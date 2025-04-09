import { useState } from 'react';

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
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-dark-card rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold tracking-tight text-light sm:text-4xl">
        <span className="block">Participate in our Presale</span>
      </h2>
      <div className="mt-8 sm:flex">
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light-muted">
                Name
              </label>
              <div className="mt-1">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-dark-light rounded-md"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="email" className="block text-sm font-medium text-light-muted">
                Email
              </label>  
              <div className="mt-1">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-dark-light rounded-md"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="amount" className="block text-sm font-medium text-light-muted">
                Contribution Amount  
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-light-muted sm:text-sm">
                    $
                  </span>
                </div>
                <input
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  type="number"
                  name="amount"
                  id="amount"
                  className="focus:ring-primary focus:border-primary block w-full pl-7 pr-12 sm:text-sm border-dark-light rounded-md"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-light-muted sm:text-sm" id="amount-currency">
                    USD
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="focus:ring-primary h-4 w-4 text-primary border-dark-light rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-light">
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 