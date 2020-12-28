import { RichText } from 'prismic-reactjs';
import React from 'react';
import Heading from '../Heading';
import Image from '../Image';
import Link from 'next/link';
import { Col } from './blogArticleGrid.style';
import { Row } from '../../../../containers/AppMinimal/Blog/blog.style';
import Container from '../UI/Container';

export default function BlogArticleGrid({ articles }) {
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
    </Container>
  );
}
