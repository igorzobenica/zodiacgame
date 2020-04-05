export const loadImage = (image, setIsImgLoaded) => {
  const img = new Image();
    
  img.onload = () => setIsImgLoaded(true);

  img.src = image;
};