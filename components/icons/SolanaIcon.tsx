import React from 'react';

interface SolanaIconProps {
  className?: string;
  size?: number | string;
  color?: string;
}

export const SolanaIcon: React.FC<SolanaIconProps> = ({ 
  className = '', 
  size = '1em',
  color = 'currentColor'
}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 25" 
    className={className}
    style={{ color }}
  >
    <path 
      fill="currentColor" 
      d="M16.886 9.468a.47.47 0 0 1-.313.124H5.584c-.39 0-.587-.446-.317-.707l1.805-1.74a.46.46 0 0 1 .312-.129h11.032c.394 0 .587.45.313.712zm0 8.576a.47.47 0 0 1-.313.12H5.584c-.39 0-.587-.442-.317-.703l1.805-1.745a.45.45 0 0 1 .312-.124h11.032c.394 0 .587.446.313.707zm0-6.618a.47.47 0 0 0-.313-.12H5.584c-.39 0-.587.442-.317.703l1.805 1.745a.47.47 0 0 0 .312.124h11.032c.394 0 .587-.446.313-.707z"
    />
  </svg>
);

export default SolanaIcon; 