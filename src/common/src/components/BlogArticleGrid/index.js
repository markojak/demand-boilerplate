import { RichText } from 'prismic-reactjs';
import React, { useState, useEffect } from 'react';
import Heading from '../Heading';
import Image from '../Image';
import Link from 'next/link';
import { Col } from './blogArticleGrid.style';
import { Row } from '../../../../containers/AppMinimal/Blog/blog.style';
import Container from '../UI/Container';
import Button from '../Button';
import { fetchArticlesPaginated } from '../../../../utils/utils';
import { useRouter } from 'next/router';

let pageInfo = null;

export default function BlogArticleGrid({
  initialArticles,
  currentCategoryId
}) {
  const router = useRouter();
  const [articles, setArticles] = useState(initialArticles.edges);

  useEffect(() => {
    pageInfo = initialArticles.pageInfo;
  }, []);

  async function handleLoadMore() {
    const newArticles = await fetchArticlesPaginated(
      router.query.slug,
      currentCategoryId,
      pageInfo ? pageInfo.endCursor : null
    );
    pageInfo = newArticles.pageInfo;

    setArticles([...articles, ...newArticles.edges]);
  }

  return (
    <Container>
      <Row>
        {articles &&
          articles.map(({ node }, index) => (
            <Col key={`articleGridBoxKey_${index}`}>
              <Link href={`/blog/${node._meta.uid}`}>
                <a className="article-grid-box">
                  <div className="article-grid-box__image-wrapper">
                    {!!node.image && (
                      <Image
                        src={node.image.preview.url}
                        alt={
                          node.image.preview.alt || RichText.asText(node.title)
                        }
                      />
                    )}
                  </div>
                  <div className="article-grid-box__text-wrapper">
                    {!!node.category && (
                      <Link href={`/blog-category/${node.category._meta.uid}`}>
                        <a className="article-grid-box__text-wrapper__category">
                          {RichText.asText(node.category.name)}
                        </a>
                      </Link>
                    )}
                    <Heading
                      as={'h3'}
                      content={RichText.asText(node.title)}
                      fontSize={['16px', '16px', '20px', '20px']}
                      fontWeight={'400'}
                    />
                  </div>
                </a>
              </Link>
            </Col>
          ))}
      </Row>
      <div style={{ textAlign: 'center' }}>
        <Button title={'Load more'} onClick={handleLoadMore} />
      </div>
    </Container>
  );
}
