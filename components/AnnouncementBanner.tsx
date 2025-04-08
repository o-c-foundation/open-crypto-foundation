import React from 'react';

interface AnnouncementBannerProps {
  className?: string;
}

// This component is intentionally left empty to remove the blue presale banner
const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ className = '' }) => {
  // Return null to render nothing
  return null;
};

export default AnnouncementBanner; 