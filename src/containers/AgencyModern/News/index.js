import React from 'react';

import Container from 'src/common/src/components/UI/Container';
import Text from 'src/common/src/components/Text';
import Heading from 'src/common/src/components/Heading';
import BlogPost from 'src/common/src/components/BlogPost';
import Image from 'src/common/src/components/Image';

import SectionWrapper, { SectionHeading, NewsWrapper } from './news.style';

import data from 'src/common/src/data/AgencyModern';
import comment from 'src/common/src/assets/image/agencyModern/comment.png';

const News = () => {
  return (
    <SectionWrapper id="news">
      <Container>
        <SectionHeading>
          <Heading as="h2" content="Popular blog post we update everyday" />
          <Text content="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click." />
        </SectionHeading>
        <NewsWrapper>
          {data.posts.map((post) => (
            <BlogPost
              key={`news-${post.id}`}
              thumbUrl={post.icon}
              title={post.title}
              link={
                <React.Fragment>
                  <Image src={comment} alt="comment" /> {post.comments_count}{' '}
                  comments
                </React.Fragment>
              }
            />
          ))}
        </NewsWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default News;
