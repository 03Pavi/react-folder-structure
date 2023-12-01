const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/molecules': path.resolve(__dirname, 'src/components/Molecules'),
    },
  },
};
