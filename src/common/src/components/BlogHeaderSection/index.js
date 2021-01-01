import React from 'react';
import PropTypes from 'prop-types';
import Box from 'src/common/src/components/Box';
import Container from 'src/common/src/components/UI/Container';
import BannerWrapper, {
  CategoryMenuItem,
  CategoryMenuWrapper
} from './bannerSection.style';
import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const BlogHeaderSection = ({ blogCategories }) => {
  const router = useRouter();

  return (
    <BannerWrapper>
      <Container>
        <Box className="row">
          <CategoryMenuWrapper>
            <CategoryMenuItem>
              <Link href={'/blog-category/all'}>
                <a
                  className={classNames({
                    'is-active': router.query.slug === 'all'
                  })}
                >
                  All
                </a>
              </Link>
            </CategoryMenuItem>
            {blogCategories &&
              blogCategories.map((blogCat, index) => (
                <CategoryMenuItem key={`blogCatMenuItem_${index}`}>
                  <Link href={`/blog-category/${blogCat.node._meta.uid}`}>
                    <a
                      className={classNames({
                        'is-active':
                          router.query.slug === blogCat.node._meta.uid
                      })}
                    >
                      {RichText.asText(blogCat.node.name)}
                    </a>
                  </Link>
                </CategoryMenuItem>
              ))}
          </CategoryMenuWrapper>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BlogHeaderSection.propTypes = {
  blogCategories: PropTypes.array
};

export default BlogHeaderSection;
