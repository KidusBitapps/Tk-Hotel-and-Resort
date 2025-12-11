import { useState, useEffect } from 'react';

interface UseImagePreloaderOptions {
  priority?: boolean;
  timeout?: number;
}

export const useImagePreloader = (
  imageUrls: string[], 
  options: UseImagePreloaderOptions = {}
) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { priority = false, timeout = 10000 } = options;

  useEffect(() => {
    if (imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }

    const loadImage = (url: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const timeoutId = setTimeout(() => {
          reject(new Error(`Image load timeout: ${url}`));
        }, timeout);

        img.onload = () => {
          clearTimeout(timeoutId);
          resolve(url);
        };

        img.onerror = () => {
          clearTimeout(timeoutId);
          reject(new Error(`Failed to load image: ${url}`));
        };

        img.src = url;
      });
    };

    const loadImages = async () => {
      setIsLoading(true);
      setProgress(0);
      const newLoadedImages = new Set<string>();

      for (let i = 0; i < imageUrls.length; i++) {
        try {
          const loadedUrl = await loadImage(imageUrls[i]);
          newLoadedImages.add(loadedUrl);
          setLoadedImages(new Set(newLoadedImages));
          setProgress(((i + 1) / imageUrls.length) * 100);
        } catch (error) {
          console.warn('Failed to preload image:', error);
          setProgress(((i + 1) / imageUrls.length) * 100);
        }
      }

      setIsLoading(false);
    };

    loadImages();
  }, [imageUrls, priority, timeout]);

  return {
    loadedImages,
    isLoading,
    progress,
    isImageLoaded: (url: string) => loadedImages.has(url)
  };
};