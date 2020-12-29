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

const BlogHeaderSection = ({ blogCategories }) => {
  return (
    <BannerWrapper>
      <Container>
        <Box className="row">
          <CategoryMenuWrapper>
            <CategoryMenuItem>
              <Link href={'/blog-category/all'}>
                <a>All</a>
              </Link>
            </CategoryMenuItem>
            {blogCategories &&
              blogCategories.map((blogCat, index) => (
                <CategoryMenuItem key={`blogCatMenuItem_${index}`}>
                  <Link href={`/blog-category/${blogCat.node._meta.uid}`}>
                    <a>{RichText.asText(blogCat.node.name)}</a>
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
