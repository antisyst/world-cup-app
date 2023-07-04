import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

interface ImageLoaderProps {
  src: string;
  alt: string;
}
const ImageCont = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`
const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setLoading(false);
      setCurrentSrc(src);
    };
  }, [src]);

  return (
    <>
      {loading ? (
       <ImageCont>
        <span className="loader"></span>
       </ImageCont>
      ) : (
       <img src={currentSrc} alt={alt} />
      )}
    </>
  );
};

export default ImageLoader;
