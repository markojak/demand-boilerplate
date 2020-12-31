import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';
import { blogCategoryArticlesQuery } from './queries';

export async function fetchAPI(query) {
  const apiBaseUrl = process.env.apiBaseUrl;

  const headers = {
    'Content-Type': 'application/json'
  };

  // Fetch master ref
  const masterRefResp = await fetch(apiBaseUrl + '/api/v2', {
    method: 'GET',
    headers: headers
  });
  const refJson = await masterRefResp.json();
  if (refJson.errors) {
    console.error(refJson.errors);
    throw new Error('Failed to fetch Master ref');
  }

  headers['Prismic-Ref'] = refJson.refs[0].ref;
  const res = await fetch(apiBaseUrl + '/graphql?query=' + query, {
    method: 'GET',
    headers: headers
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function fetchArticlesPaginated(
  slug,
  currentCategoryId,
  cursor = null
) {
  const articleWherePart =
    slug === 'all' ? '' : `where: {category: "${currentCategoryId}"}, `;
  const afterPart = cursor ? `after: "${cursor}"` : '';
  const query = `
      query {
        allBlog_posts (${articleWherePart}sortBy:date_DESC,${afterPart} first: 3) {
          totalCount
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
          edges {
            node {
              ${blogCategoryArticlesQuery}
            }
          }
        }
      }
    `;
  const data = await fetchAPI(query);
  return get(data, 'allBlog_posts', null);
}

export function prepareOpenGraphDataObject(page) {
  const openGraphData = {
    url: typeof window !== 'undefined' && window.location.href,
    title: RichText.asText(page.seo_title),
    description: RichText.asText(page.seo_description),
    site_name: process.env.siteName
  };

  const ogImageUrl = get(page, 'og_image.url', null);
  if (ogImageUrl) {
    openGraphData.images = [
      {
        url: ogImageUrl,
        width: get(page, 'og_image.dimensions.width', null), // optional
        height: get(page, 'og_image.dimensions.height', null), // optional
        alt: get(page, 'og_image.alt', null) // optional
      }
    ];
  }
  return openGraphData;
}
