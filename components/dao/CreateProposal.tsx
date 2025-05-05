import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWeb3React } from '@web3-react/core';

interface Proposal {
  title: string;
  description: string;
  options: string[];
}

export function CreateProposal() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState(['Yes', 'No']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { publicKey } = useWallet();
  const { account } = useWeb3React();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const proposal: Proposal = {
        title,
        description,
        options,
      };

      // Here you would typically send the proposal to your backend
      const response = await fetch('/api/proposals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          proposal,
          walletAddress: publicKey?.toString() || account,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create proposal');
      }

      // Reset form
      setTitle('');
      setDescription('');
      setOptions(['Yes', 'No']);
    } catch (error) {
      console.error('Error creating proposal:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create New Proposal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-700 rounded px-3 py-2"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-700 rounded px-3 py-2"
            rows={4}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Voting Options</label>
          <div className="space-y-2">
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                  className="flex-1 bg-gray-700 rounded px-3 py-2"
                  required
                />
                {index > 1 && (
                  <button
                    type="button"
                    onClick={() => setOptions(options.filter((_, i) => i !== index))}
                    className="text-red-500 hover:text-red-400"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => setOptions([...options, ''])}
              className="text-blue-500 hover:text-blue-400"
            >
              Add Option
            </button>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {isSubmitting ? 'Creating...' : 'Create Proposal'}
        </button>
      </form>
    </div>
  );
} 