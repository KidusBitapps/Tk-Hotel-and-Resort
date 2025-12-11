import { useState, useEffect } from 'react';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  acceptedFormats?: string[];
}

const ImagePlaceholder = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc,
  acceptedFormats = ['png', 'jpg', 'jpeg', 'webp']
}: ImagePlaceholderProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
    setImageError(false);
    setImageLoaded(false);
  }, [src]);

  const isValidFormat = (url: string) => {
    // Handle URLs with query parameters
    const urlWithoutQuery = url.split('?')[0];
    const extension = urlWithoutQuery.split('.').pop()?.toLowerCase();
    return extension && acceptedFormats.includes(extension);
  };

  const handleImageError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  if (imageError || !isValidFormat(currentSrc)) {
    return (
      <div className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-500">
          <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm opacity-75">Image unavailable</p>
          {!isValidFormat(currentSrc) && (
            <p className="text-xs mt-1 opacity-60">
              Supported: {acceptedFormats.join(', ')}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse ${className}`}>
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} ${imageLoaded ? 'block' : 'hidden'} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
        decoding="async"
      />
    </>
  );
};

export default ImagePlaceholder;