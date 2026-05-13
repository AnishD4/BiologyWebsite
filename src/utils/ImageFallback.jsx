// Image utility with fallback support
// Handles external image loading with graceful fallback

export const ImageFallback = ({ src, alt, ...props }) => {
  const [imageSrc, setImageSrc] = React.useState(src);
  const [error, setError] = React.useState(false);

  const handleError = () => {
    setError(true);
    // Fallback to a placeholder
    setImageSrc(`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23222' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%2300b366' text-anchor='middle' dominant-baseline='middle'%3EImage not available%3C/text%3E%3C/svg%3E`);
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageFallback;

