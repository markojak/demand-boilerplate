export const fetchNavigationsQuery = `
  allNavigations {
    edges {
      node {
        location
        body {
          ...on NavigationBodyMenu_item {
            primary {
              section_title
            }
            fields {
              
              name
              external_url
              page {
                ...on Page {
                  name
                  template
                  _meta {
                    uid
                  }
                }
              }
              scroll_path
            }
          }
        }
      }
    }
  }
`;

export const fetchSocialIconsQuery = `
  allSocial_icons {
    edges {
      node {
        type
        url
      }
    }
  }
`;

export const fetchIndexPageQuery = `
  allPages(where: {template: "index"}) {
    edges {
      node {
        name
        _meta {
          uid
        }
        template
        seo_title
        seo_description
        og_image
      }
    }
  }
`;

export const fetchBlogUrlsQuery = `
  allBlog_posts {
    edges {
      node {
        _meta {
          uid
        }
      }
    }
  }
`;

export const blogPostQueryFields = `
  _meta {
    id
    uid
    tags
  }
  category {
    ... on Blog_category {
      name
      _meta {
        id
        uid
      }
    }
  }
  title
  image
  date
  seo_title
  seo_description
  og_image
  preview
  article_highlights
  content
`;

export const blogCategoriesQuery = `
  allBlog_categorys {
    edges {
      node {
        name
        _meta {
          id
          uid
        }
      }
    }
  }
`;

export const blogRelatedArticlesQuery = `
  _meta {
    id
    uid
    tags
  }
  category {
    ... on Blog_category {
      name
      _meta {
        uid
      }
    }
  }
  title
  image
  date
  preview
`;

export const fetchBlogPageQuery = `
  allPages(where: {template: "blog"}) {
    edges {
      node {
        name
        _meta {
          uid
        }
        template
        seo_title
        seo_description
        og_image
      }
    }
  }
`;
