import React, { useState, useEffect } from 'react';

interface TimeAgoProps {
  createdAt: Date;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ createdAt }) => {
  const [timeAgo, setTimeAgo] = useState<string>('');

  const calculateTimeAgo = () => {
    const now = new Date();
    const difference = now.getTime() - createdAt.getTime();
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    let newTimeAgo;
    if (weeks >= 1) {
      newTimeAgo = createdAt.toLocaleDateString();
    } else if (days >= 1) {
      newTimeAgo = `${days}d`;
    } else if (hours >= 1) {
      newTimeAgo = `${hours}h`;
    } else if (minutes >= 1) {
      newTimeAgo = `${minutes}m`;
    } else {
      newTimeAgo = `${seconds}s`;
    }

    setTimeAgo(newTimeAgo);
  };

  useEffect(() => {
    calculateTimeAgo();
    const interval = setInterval(calculateTimeAgo, 60000);

    return () => clearInterval(interval);
  }, []);

  return timeAgo
};

export default TimeAgo;
