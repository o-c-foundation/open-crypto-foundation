import React, { useState, useEffect } from 'react';
import { FaClock, FaArrowUp } from 'react-icons/fa';

interface CountdownTimerProps {
  targetDate: number;
  increasePercentage: number;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

const PriceHikeCountdown: React.FC<CountdownTimerProps> = ({ targetDate, increasePercentage }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          total: difference
        });
      } else {
        // Time has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          total: 0
        });
      }
    };

    // Calculate on initial render
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Format with leading zeros
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  // Generate text message
  const countdownMessage = () => {
    if (timeLeft.total <= 0) {
      return "Price has increased!";
    }
    
    const totalHours = timeLeft.days * 24 + timeLeft.hours;
    if (totalHours > 0) {
      return `${totalHours} hours till next presale price hike`;
    } else {
      return `${timeLeft.minutes} minutes till next presale price hike`;
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-4 shadow-lg animate-pulse-slow">
      <div className="flex items-center mb-2">
        <FaClock className="text-primary mr-2" />
        <h3 className="text-lg font-bold text-white">Price Increase Alert</h3>
        <div className="ml-auto flex items-center text-primary">
          <FaArrowUp className="mr-1" />
          <span className="font-bold">+{increasePercentage}%</span>
        </div>
      </div>
      
      <p className="text-light-muted text-sm mb-3">
        Token price will increase in:
      </p>
      
      <div className="grid grid-cols-4 gap-2 mb-3">
        <div className="bg-dark-card border border-dark-light/30 rounded p-2 text-center">
          <span className="text-xl md:text-2xl font-mono font-bold text-white">{formatNumber(timeLeft.hours)}</span>
          <p className="text-xs text-light-muted mt-1">Hours</p>
        </div>
        <div className="bg-dark-card border border-dark-light/30 rounded p-2 text-center">
          <span className="text-xl md:text-2xl font-mono font-bold text-white">{formatNumber(timeLeft.minutes)}</span>
          <p className="text-xs text-light-muted mt-1">Minutes</p>
        </div>
        <div className="bg-dark-card border border-dark-light/30 rounded p-2 text-center">
          <span className="text-xl md:text-2xl font-mono font-bold text-white">{formatNumber(timeLeft.seconds)}</span>
          <p className="text-xs text-light-muted mt-1">Seconds</p>
        </div>
        <div className="bg-primary/10 border border-primary/30 rounded p-2 text-center flex flex-col justify-center">
          <p className="text-xs text-light-muted">Next Price</p>
          <span className="text-lg font-bold text-primary">
            ${((increasePercentage + 100) / 100 * 0.0001).toFixed(6)}
          </span>
        </div>
      </div>
      
      <p className="text-center text-sm text-primary font-medium">
        {countdownMessage()}
      </p>
    </div>
  );
};

export default PriceHikeCountdown; 