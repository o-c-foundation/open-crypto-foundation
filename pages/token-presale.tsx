import React from 'react';
import Layout from '../components/Layout';
import { FaClock } from 'react-icons/fa';

const TokenPresalePage = () => {
  // Calculate the time remaining until the presale end date
  const presaleEndDate = new Date('2025-04-09T13:00:00Z'); // April 9, 2025 9:00 AM EST
  const currentTime = new Date();
  const timeRemaining = presaleEndDate.getTime() - currentTime.getTime();
  
  // Extract days, hours, minutes and seconds from the time remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <Layout title="Token Presale">
      <section className="py-12 bg-dark">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            Token Presale
          </h1>
          
          <div className="max-w-lg mx-auto bg-dark-card rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-white flex items-center justify-center">
              <FaClock className="mr-2" /> Presale Ends In
            </h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-4xl font-bold text-primary">{days}</div>
                <div className="text-light-muted uppercase">Days</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">{hours}</div>
                <div className="text-light-muted uppercase">Hours</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">{minutes}</div>
                <div className="text-light-muted uppercase">Minutes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">{seconds}</div>
                <div className="text-light-muted uppercase">Seconds</div>
              </div>
            </div>
          </div>
          
          {/* Add the rest of the presale page content here */}
          
        </div>
      </section>
    </Layout>
  );
};

export default TokenPresalePage; 