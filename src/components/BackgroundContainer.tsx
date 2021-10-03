import React from 'react';
import backgroundImageColor from '../assets/background/backgroundImageColor.png';

interface BakcgroundContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const BackgroundContainer = ({ children }: BakcgroundContainerProps) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        backgroundImage: `url(${backgroundImageColor})`,
        top: 0,
        left: 0,
      }}
    >
      {children}
    </div>
  );
};
