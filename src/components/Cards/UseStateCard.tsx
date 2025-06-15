import React from 'react';
import { 
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper
} from '@mui/material';
import { useFavoriteColor } from '../../hooks/useFavoriteColor';

const UseStateCard: React.FC = () => {
  const {
    favoriteColor,
    previousColor,
    handleColorChange,
    availableColors
  } = useFavoriteColor();

  return (
    <Box sx={{ p: 2 }}>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        useState  Hook Example
      </h2>
      
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select your favorite color</InputLabel>
        <Select
          value={favoriteColor}
          label="Select your favorite color"
          onChange={(e) => handleColorChange(e.target.value)}
        >
          {availableColors.map((color) => (
            <MenuItem key={color} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {favoriteColor && (
        <Box>
          <Paper 
            sx={{ 
              height: 100, 
              backgroundColor: favoriteColor,
              mb: 2
            }} 
          />
          <Typography>
            Current color: {favoriteColor}
          </Typography>
          {previousColor && (
            <Typography>
              Previous color: {previousColor}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default UseStateCard;