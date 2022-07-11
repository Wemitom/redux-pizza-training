import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PromoCarousel() {
  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    const fetchImages = async (): Promise<File[]> => {
      const data = (await axios.get('https://localhost:5000/images')).data;
      setImages(data);

      return data;
    };

    fetchImages();
    //images.map(img => img.)
  }, []);

  return (
    <Carousel
      fade
      style={{
        height: '273px',

        backgroundColor: '#131313',
      }}
    >
      <Carousel.Item style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          className="d-block w-80"
          style={{ height: '273px', maxWidth: '100%' }}
          src="https://staticy.dominospizza.ru/api/medium/Banner/Web/568/NULL/NULL/RU"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default PromoCarousel;
