
/**
 * Project Color Palette
 * This file centralizes all color definitions used throughout the application
 */

const colors = {
  // Primary Colors
  primary: {
    main: '#1C3FEC',       // Royal blue - main brand color
    light: '#4169E1',      // Lighter blue for hover states
    dark: '#0B1F78',       // Darker blue for active states
    contrastText: '#FFFFFF', // White text on primary background
  },
  
  // Secondary Colors
  secondary: {
    main: '#FFD700',       // Gold accent color
    light: '#FFEB99',      // Light gold
    dark: '#CC9900',       // Dark gold
    contrastText: '#000000', // Black text on secondary background
  },
  
  // UI Colors
  ui: {
    background: {
      default: '#F5F7FA',  // Light gray background
      paper: '#FFFFFF',    // White surface
      sidebar: '#1C3FEC',  // Sidebar background
    },
    divider: 'rgba(255, 255, 255, 0.3)', // Sidebar dividers
  },
  
  // Text Colors
  text: {
    primary: '#333333',    // Main text color
    secondary: '#666666',  // Secondary text color
    disabled: '#999999',   // Disabled text color
    hint: '#BBBBBB',       // Hint text color
    light: '#FFFFFF',      // Light text (for dark backgrounds)
  },
  
  // Status Colors
  status: {
    success: '#4CAF50',    // Green for success messages
    info: '#2196F3',       // Blue for information
    warning: '#FF9800',    // Orange for warnings
    error: '#F44336',      // Red for errors
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #1C3FEC 0%, #4169E1 100%)',
    secondary: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
  }
};

export default colors;
