
import React from 'react';
import MatrixRain from './MatrixRain';

const VideoBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Base Layer: High-Visibility Canvas Rain */}
      <MatrixRain />
    </div>
  );
};

export default VideoBackground;
