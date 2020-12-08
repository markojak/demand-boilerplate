import React from 'react';
import Container from 'src/common/src/components/UI/Container';
import Image from 'src/common/src/components/Image';
import GalleryArea, { Row, Col } from './gallery.style';
import { GalleryData } from 'src/common/src/data/AppMinimal';

const Gallery = () => {
  return (
    <GalleryArea>
      <Container className="Container">
        <Row>
          {GalleryData.map(({ image }, index) => (
            <Col key={`gallery-key-${index}`}>
              <Image src={image} alt="gallery image" />
            </Col>
          ))}
        </Row>
      </Container>
    </GalleryArea>
  );
};

export default Gallery;
