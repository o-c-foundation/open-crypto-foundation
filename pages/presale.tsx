import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

export default function Presale() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');  
  const [amount, setAmount] = useState(0);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, email, amount, agreeToTerms});
    // TODO: Handle form submission
  }

  return (
    <div className="min-h-screen bg-dark">
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Participate in our Presale
              </h1>
              <p className="text-xl text-light-muted mb-6">
                Get in early and secure your OCF tokens before the public launch.
                Fill out the form below to make your contribution.
              </p>
              
              {/* Info Notice */}
              <div className="p-5 bg-blue-900/20 border border-blue-900/30 rounded-lg mb-8">
                <div className="flex items-center justify-center mb-3">
                  <FaInfoCircle className="text-blue-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-white">Presale Details</h3>
                </div>
                <p className="text-light-muted">
                  The OCF token presale is now live! Contribute ETH to receive OCF tokens at a discounted rate. 
                  Tokens will be distributed shortly after the presale ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Presale Form Section */}
        <section className="py-16 bg-dark-light/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-card rounded-lg border border-dark-light/30 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Presale Contribution</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-light-muted mb-1">
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-3 py-2 placeholder-light-muted/50 border border-dark-light rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-light bg-dark-elevated"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-light-muted mb-1">
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="w-full px-3 py-2 placeholder-light-muted/50 border border-dark-light rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-light bg-dark-elevated"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-light-muted mb-1">
                      Contribution Amount (ETH)
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        type="number"
                        name="amount"
                        id="amount"
                        min="0"
                        step="0.1"
                        className="w-full pl-3 pr-10 py-2 placeholder-light-muted/50 border border-dark-light rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-light bg-dark-elevated"
                        placeholder="0.0"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-light-muted sm:text-sm" id="amount-currency">
                          ETH
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          checked={agreeToTerms}
                          onChange={(e) => setAgreeToTerms(e.target.checked)}
                          id="terms"
                          name="terms"
                          type="checkbox"
                          className="focus:ring-primary h-4 w-4 text-primary border-dark-light rounded bg-dark-elevated"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-light">
                          I agree to the terms and conditions
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Contribute
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 