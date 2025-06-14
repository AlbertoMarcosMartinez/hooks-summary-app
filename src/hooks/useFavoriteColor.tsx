import { useState } from 'react';

interface UseFavoriteColorReturn {
  favoriteColor: string;
  previousColor: string;
  handleColorChange: (newColor: string) => void;
  availableColors: string[];
}

export const useFavoriteColor = (): UseFavoriteColorReturn => {
  const [favoriteColor, setFavoriteColor] = useState<string>('');
  const [previousColor, setPreviousColor] = useState<string>('');

  const availableColors = ['red', 'blue', 'green', 'purple', 'orange'];

  const handleColorChange = (newColor: string) => {
    setPreviousColor(favoriteColor);
    setFavoriteColor(newColor);
    console.log(`Favorite color changed to: ${newColor}`);
  };

  return {
    favoriteColor,
    previousColor,
    handleColorChange,
    availableColors
  };
};