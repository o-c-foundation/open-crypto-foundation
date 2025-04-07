import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaServer, FaGlobe, FaEthereum, FaCoins, FaFilter, FaSearch, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import ScrollToTop from '../../components/ScrollToTop';

export default function RPCEndpointsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChain, setSelectedChain] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Network types
  const chains = [
    { id: 'all', name: 'All Networks', icon: <FaFilter /> },
    { id: 'ethereum', name: 'Ethereum', icon: <FaEthereum /> },
    { id: 'bsc', name: 'BSC', icon: <FaCoins /> },
    { id: 'polygon', name: 'Polygon', icon: <FaCoins /> },
    { id: 'solana', name: 'Solana', icon: <FaCoins /> },
    { id: 'avalanche', name: 'Avalanche', icon: <FaCoins /> },
    { id: 'fantom', name: 'Fantom', icon: <FaCoins /> },
    { id: 'zkEVM', name: 'Polygon zkEVM', icon: <FaCoins /> },
    { id: 'algorand', name: 'Algorand', icon: <FaCoins /> },
  ];

  // RPC types
  const rpcTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'provider', name: 'Service Providers' },
    { id: 'public', name: 'Public Endpoints' },
    { id: 'websocket', name: 'WebSocket' },
    { id: 'setup', name: 'Setup Your Own' },
  ];

  // Ethereum RPC Endpoints
  const ethereumProviders = [
    { name: 'Infura.io', url: 'https://infura.io', type: 'provider', chain: 'ethereum' },
    { name: 'Alchemy', url: 'https://www.alchemy.com', type: 'provider', chain: 'ethereum' },
    { name: 'GetBlock', url: 'https://getblock.io/nodes/eth/', type: 'provider', chain: 'ethereum' },
    { name: '0x', url: 'https://0x.org', type: 'provider', chain: 'ethereum' },
    { name: 'Amazon Managed Blockchain', url: 'https://aws.amazon.com/managed-blockchain', type: 'provider', chain: 'ethereum' },
    { name: 'Pocket Network', url: 'https://mainnet.portal.pokt.network', type: 'provider', chain: 'ethereum' },
    { name: 'Chainstack', url: 'https://chainstack.com/build-better-with-ethereum/', type: 'provider', chain: 'ethereum' },
    { name: 'ZMOK', url: 'https://zmok.io/', type: 'provider', chain: 'ethereum' },
    { name: 'Allnodes', url: 'https://www.allnodes.com', type: 'provider', chain: 'ethereum' },
    { name: 'Figment Datahub', url: 'https://datahub.figment.io/', type: 'provider', chain: 'ethereum' },
    { name: 'Ankr', url: 'https://ankr.com', type: 'provider', chain: 'ethereum' },
    { name: 'ArchiveNode', url: 'https://archivenode.io/', type: 'provider', chain: 'ethereum' },
    { name: 'Blast', url: 'https://blastapi.io/', type: 'provider', chain: 'ethereum' },
    { name: 'NodeReal', url: 'https://nodereal.io/', type: 'provider', chain: 'ethereum' },
    { name: 'NOWNodes.io', url: 'https://nownodes.io/', type: 'provider', chain: 'ethereum' },
    { name: 'Kriptonio', url: 'https://kriptonio.com/', type: 'provider', chain: 'ethereum' },
    { name: 'Chainbase', url: 'https://chainbase.online', type: 'provider', chain: 'ethereum' },
    { name: 'LlamaNodes', url: 'https://llamanodes.com/', type: 'provider', chain: 'ethereum' },
    { name: 'Exaion Node', url: 'https://node.exaion.com/', type: 'provider', chain: 'ethereum' },
    { name: 'Chainnodes', url: 'https://www.chainnodes.org/', type: 'provider', chain: 'ethereum' },
    { name: 'Node RPC', url: 'https://www.noderpc.xyz/', type: 'provider', chain: 'ethereum' },
    { name: 'OnFinality', url: 'https://onfinality.io/', type: 'provider', chain: 'ethereum' },
    { name: 'merkle', url: 'https://merkle.io/', type: 'provider', chain: 'ethereum' },
    { name: 'DRPC', url: 'https://drpc.org/public-endpoints/ethereum', type: 'provider', chain: 'ethereum' },
    { name: 'Stackup', url: 'https://www.stackup.sh/', type: 'provider', chain: 'ethereum' },
  ];

  const ethereumEndpoints = [
    { name: 'Ankr', url: 'https://rpc.ankr.com/eth', type: 'public', chain: 'ethereum' },
    { name: 'BlockPI', url: 'https://ethereum.blockpi.network/v1/rpc/public', type: 'public', chain: 'ethereum' },
    { name: 'MyCrypto', url: 'https://api.mycryptoapi.com/eth', type: 'public', chain: 'ethereum' },
    { name: 'Cloudflare', url: 'https://cloudflare-eth.com', type: 'public', chain: 'ethereum' },
    { name: 'Alchemy Demo', url: 'https://eth-mainnet.g.alchemy.com/v2/demo', type: 'public', chain: 'ethereum' },
    { name: 'Flashbots', url: 'https://rpc.flashbots.net', type: 'public', chain: 'ethereum' },
    { name: 'Pocket Network', url: 'https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79', type: 'public', chain: 'ethereum' },
    { name: 'Blockscout', url: 'https://mainnet-nethermind.blockscout.com', type: 'public', chain: 'ethereum' },
    { name: 'MEW', url: 'https://nodes.mewapi.io/rpc/eth', type: 'public', chain: 'ethereum' },
    { name: 'LinkPool', url: 'https://main-rpc.linkpool.io', type: 'public', chain: 'ethereum' },
    { name: 'Ava.do', url: 'https://mainnet.eth.cloud.ava.do', type: 'public', chain: 'ethereum' },
    { name: 'RunOnFlux', url: 'https://ethereumnodelight.app.runonflux.io', type: 'public', chain: 'ethereum' },
    { name: 'Pocket', url: 'https://eth-rpc.gateway.pokt.network', type: 'public', chain: 'ethereum' },
    { name: 'LinkPool Light', url: 'https://main-light.eth.linkpool.io', type: 'public', chain: 'ethereum' },
    { name: 'BlastAPI', url: 'https://eth-mainnet.public.blastapi.io', type: 'public', chain: 'ethereum' },
    { name: 'Static Node', url: 'http://18.211.207.34:8545', type: 'public', chain: 'ethereum' },
    { name: 'NodeReal', url: 'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7', type: 'public', chain: 'ethereum' },
    { name: 'Bitstack', url: 'https://api.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet', type: 'public', chain: 'ethereum' },
    { name: 'Unifra', url: 'https://eth-mainnet-public.unifra.io', type: 'public', chain: 'ethereum' },
    { name: '1RPC', url: 'https://1rpc.io/eth', type: 'public', chain: 'ethereum' },
    { name: 'RPCFast', url: 'https://eth-mainnet.rpcfast.com', type: 'public', chain: 'ethereum' },
    { name: 'RPCFast (API Key)', url: 'https://eth-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf', type: 'public', chain: 'ethereum' },
    { name: 'SecureRPC', url: 'https://api.securerpc.com/v1', type: 'public', chain: 'ethereum' },
    { name: 'PublicNode', url: 'https://ethereum.publicnode.com', type: 'public', chain: 'ethereum' },
    { name: 'QuickNode Example', url: 'https://yolo-intensive-paper.discover.quiknode.pro/45cad3065a05ccb632980a7ee67dd4cbb470ffbd', type: 'public', chain: 'ethereum' },
    { name: 'Infura', url: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', type: 'public', chain: 'ethereum' },
    { name: 'Alchemy', url: 'https://eth-mainnet.alchemyapi.io/v2/QKMdAyFAARxN-dEm_USOu8-u0klcBuTO', type: 'public', chain: 'ethereum' },
    { name: 'Public RPC', url: 'https://eth.public-rpc.com', type: 'public', chain: 'ethereum' },
    { name: 'Moralis', url: 'https://speedy-nodes-nyc.moralis.io/4ab2a0fb78faf37a48596270/eth/mainnet', type: 'public', chain: 'ethereum' },
    { name: '1inch', url: 'https://web3.1inch.exchange', type: 'public', chain: 'ethereum' },
    { name: 'Compound', url: 'https://mainnet-eth.compound.finance', type: 'public', chain: 'ethereum' },
  ];

  // BSC RPC Endpoints
  const bscProviders = [
    { name: 'ANKR', url: 'https://ankr.com', type: 'provider', chain: 'bsc' },
    { name: 'GetBlock', url: 'https://getblock.io', type: 'provider', chain: 'bsc' },
    { name: 'Pocket Network', url: 'https://mainnet.portal.pokt.network', type: 'provider', chain: 'bsc' },
    { name: 'Chainstack', url: 'https://chainstack.com/build-better-with-bnb-smart-chain/', type: 'provider', chain: 'bsc' },
    { name: 'Figment Datahub', url: 'https://datahub.figment.io/', type: 'provider', chain: 'bsc' },
    { name: 'NodeReal', url: 'https://nodereal.io/', type: 'provider', chain: 'bsc' },
    { name: 'NOWNodes.io', url: 'https://nownodes.io/', type: 'provider', chain: 'bsc' },
    { name: 'Chainbase', url: 'https://chainbase.online', type: 'provider', chain: 'bsc' },
    { name: 'DRPC', url: 'https://drpc.org/public-endpoints/bsc', type: 'provider', chain: 'bsc' },
    { name: 'Stackup', url: 'https://www.stackup.sh/', type: 'provider', chain: 'bsc' },
  ];

  const bscEndpoints = [
    { name: '48.club', url: 'https://four.rpc.48.club', type: 'public', chain: 'bsc' },
    { name: 'Nodies', url: 'https://bsc-pokt.nodies.app', type: 'public', chain: 'bsc' },
    { name: 'Binance Data Seed', url: 'https://data-seed-prebsc-1-s1.binance.org:8545', type: 'public', chain: 'bsc' },
    { name: 'Ankr', url: 'https://binance.ankr.com', type: 'public', chain: 'bsc' },
    { name: 'MyTokenPocket', url: 'https://bsc.mytokenpocket.vip', type: 'public', chain: 'bsc' },
    { name: 'NodeReal', url: 'https://binance.nodereal.io', type: 'public', chain: 'bsc' },
    { name: 'BNB48 Club', url: 'https://rpc-bsc.bnb48.club/', type: 'public', chain: 'bsc' },
    { name: 'BSC RPC', url: 'https://bscrpc.com', type: 'public', chain: 'bsc' },
    { name: 'BlockPI', url: 'https://bsc.blockpi.network/v1/rpc/public', type: 'public', chain: 'bsc' },
    { name: 'Binance Dataseed 1', url: 'https://bsc-dataseed.binance.org', type: 'public', chain: 'bsc' },
    { name: 'Binance Dataseed 2', url: 'https://bsc-dataseed1.binance.org', type: 'public', chain: 'bsc' },
    { name: 'Binance Dataseed 3', url: 'https://bsc-dataseed2.binance.org', type: 'public', chain: 'bsc' },
    { name: 'Binance Dataseed 4', url: 'https://bsc-dataseed3.binance.org', type: 'public', chain: 'bsc' },
    { name: 'Binance Dataseed 5', url: 'https://bsc-dataseed4.binance.org', type: 'public', chain: 'bsc' },
    { name: 'Defibit 1', url: 'https://bsc-dataseed1.defibit.io', type: 'public', chain: 'bsc' },
    { name: 'Defibit 2', url: 'https://bsc-dataseed2.defibit.io', type: 'public', chain: 'bsc' },
    { name: 'Defibit 3', url: 'https://bsc-dataseed3.defibit.io', type: 'public', chain: 'bsc' },
    { name: 'Defibit 4', url: 'https://bsc-dataseed4.defibit.io', type: 'public', chain: 'bsc' },
    { name: 'Ninicoin 1', url: 'https://bsc-dataseed1.ninicoin.io', type: 'public', chain: 'bsc' },
    { name: 'Ninicoin 2', url: 'https://bsc-dataseed2.ninicoin.io', type: 'public', chain: 'bsc' },
    { name: 'Ninicoin 3', url: 'https://bsc-dataseed3.ninicoin.io', type: 'public', chain: 'bsc' },
    { name: 'Ninicoin 4', url: 'https://bsc-dataseed4.ninicoin.io', type: 'public', chain: 'bsc' },
    { name: 'Moralis', url: 'https://speedy-nodes-nyc.moralis.io/4ab2a0fb78faf37a48596270/bsc/mainnet', type: 'public', chain: 'bsc' },
    { name: 'Ankr', url: 'https://rpc.ankr.com/bsc', type: 'public', chain: 'bsc' },
    { name: 'Terminet', url: 'https://bscapi.terminet.io/rpc', type: 'public', chain: 'bsc' },
  ];

  const bscWebsockets = [
    { name: 'Nariox', url: 'wss://bsc-ws-node.nariox.org:443', type: 'websocket', chain: 'bsc' },
  ];

  const bscSetup = [
    { name: 'Run Your Own Node', url: 'https://docs.binance.org/smart-chain/developer/fullnode.html', type: 'setup', chain: 'bsc' },
  ];

  // Polygon
  const polygonProviders = [
    { name: 'Infura.io', url: 'https://infura.io', type: 'provider', chain: 'polygon' },
    { name: 'GetBlock', url: 'https://getblock.io/nodes/matic/', type: 'provider', chain: 'polygon' },
    { name: 'MaticVigil', url: 'https://maticvigil.com', type: 'provider', chain: 'polygon' },
    { name: 'Chainstack', url: 'https://chainstack.com', type: 'provider', chain: 'polygon' },
    { name: 'ANKR', url: 'https://ankr.com', type: 'provider', chain: 'polygon' },
    { name: 'Pocket Network', url: 'https://mainnet.portal.pokt.network', type: 'provider', chain: 'polygon' },
    { name: 'Allnodes', url: 'https://www.allnodes.com', type: 'provider', chain: 'polygon' },
    { name: 'Figment Datahub', url: 'https://datahub.figment.io/', type: 'provider', chain: 'polygon' },
    { name: 'Ankr', url: 'https://ankr.com', type: 'provider', chain: 'polygon' },
    { name: 'Blast', url: 'https://blastapi.io/', type: 'provider', chain: 'polygon' },
    { name: 'NOWNodes.io', url: 'https://nownodes.io/', type: 'provider', chain: 'polygon' },
    { name: 'Kriptonio', url: 'https://kriptonio.com/', type: 'provider', chain: 'polygon' },
    { name: 'Chainbase', url: 'https://chainbase.online', type: 'provider', chain: 'polygon' },
    { name: 'Alchemy', url: 'https://alchemy.com', type: 'provider', chain: 'polygon' },
    { name: 'Chainnodes', url: 'https://www.chainnodes.org/', type: 'provider', chain: 'polygon' },
    { name: 'Node RPC', url: 'https://www.noderpc.xyz/', type: 'provider', chain: 'polygon' },
    { name: 'OnFinality.io', url: 'https://onfinality.io', type: 'provider', chain: 'polygon' },
    { name: 'DRPC', url: 'https://drpc.org/public-endpoints/polygon', type: 'provider', chain: 'polygon' },
    { name: 'Stackup', url: 'https://www.stackup.sh/', type: 'provider', chain: 'polygon' },
  ];

  const polygonEndpoints = [
    { name: 'Polygon RPC', url: 'https://rpc-mainnet.matic.network', type: 'public', chain: 'polygon' },
    { name: 'MaticVigil', url: 'https://rpc-mainnet.maticvigil.com', type: 'public', chain: 'polygon' },
    { name: 'Bware Labs Full', url: 'https://matic-mainnet-full-rpc.bwarelabs.com', type: 'public', chain: 'polygon' },
    { name: 'Bware Labs Archive', url: 'https://matic-mainnet-archive-rpc.bwarelabs.com', type: 'public', chain: 'polygon' },
    { name: 'Pocket Gateway', url: 'https://poly-rpc.gateway.pokt.network/', type: 'public', chain: 'polygon' },
    { name: 'Ankr', url: 'https://rpc.ankr.com/polygon', type: 'public', chain: 'polygon' },
    { name: 'BlastAPI', url: 'https://blastapi.io/public-api/polygon', type: 'public', chain: 'polygon' },
    { name: 'Polygon RPC', url: 'https://polygon-rpc.com', type: 'public', chain: 'polygon' },
    { name: 'PublicNode', url: 'https://polygon.publicnode.com', type: 'public', chain: 'polygon' },
    { name: 'OnFinality', url: 'https://polygon.api.onfinality.io/public', type: 'public', chain: 'polygon' },
    { name: 'DRPC', url: 'https://polygon.drpc.org', type: 'public', chain: 'polygon' },
    { name: 'Stackup', url: 'https://public.stackup.sh/api/v1/node/polygon-mainnet', type: 'public', chain: 'polygon' },
  ];

  const polygonWebsockets = [
    { name: 'Polygon RPC', url: 'wss://rpc-mainnet.matic.network', type: 'websocket', chain: 'polygon' },
    { name: 'GetBlock', url: 'wss://matic.getblock.io/api_key/mainnet/', type: 'websocket', chain: 'polygon' },
    { name: 'MaticVigil', url: 'wss://rpc-mainnet.maticvigil.com/ws', type: 'websocket', chain: 'polygon' },
  ];

  const polygonSetup = [
    { name: 'Run Your Own Node', url: 'https://docs.polygon.technology/docs/maintain/validate/validator-index', type: 'setup', chain: 'polygon' },
  ];

  // Helper function to filter RPC endpoints based on search and filter criteria
  const filterRPCEndpoints = (endpoints) => {
    return endpoints.filter(endpoint => {
      // Filter by chain
      if (selectedChain !== 'all' && endpoint.chain !== selectedChain) {
        return false;
      }
      
      // Filter by type
      if (selectedType !== 'all' && endpoint.type !== selectedType) {
        return false;
      }
      
      // Filter by search query
      if (searchQuery && !endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !endpoint.url.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  };

  // Combine all endpoints for the view
  const allEndpoints = [
    ...ethereumProviders, ...ethereumEndpoints,
    ...bscProviders, ...bscEndpoints, ...bscWebsockets, ...bscSetup,
    ...polygonProviders, ...polygonEndpoints, ...polygonWebsockets, ...polygonSetup,
    // Add other chains here
  ];
  
  const filteredEndpoints = filterRPCEndpoints(allEndpoints);
  
  // Group endpoints by chain and type for display
  const groupedEndpoints = {};
  
  filteredEndpoints.forEach(endpoint => {
    if (!groupedEndpoints[endpoint.chain]) {
      groupedEndpoints[endpoint.chain] = {};
    }
    
    if (!groupedEndpoints[endpoint.chain][endpoint.type]) {
      groupedEndpoints[endpoint.chain][endpoint.type] = [];
    }
    
    groupedEndpoints[endpoint.chain][endpoint.type].push(endpoint);
  });

  // Chain display names mapping
  const chainNames = {
    'ethereum': 'Ethereum',
    'bsc': 'Binance Smart Chain (BSC)',
    'polygon': 'Polygon',
    'solana': 'Solana',
    'avalanche': 'Avalanche',
    'fantom': 'Fantom',
    'zkEVM': 'Polygon zkEVM',
    'algorand': 'Algorand'
  };

  // RPC type display names mapping
  const typeNames = {
    'provider': 'Service Providers',
    'public': 'Public Endpoints',
    'websocket': 'WebSocket Endpoints',
    'setup': 'Run Your Own Node'
  };

  return (
    <>
      <Head>
        <title>RPC Endpoints | Open Crypto Foundation</title>
        <meta 
          name="description" 
          content="A comprehensive directory of RPC endpoints for various blockchain networks, including service providers and public endpoints." 
        />
      </Head>

      <main className="min-h-screen bg-dark">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-dark-light to-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                RPC Endpoints Directory
              </h1>
              <p className="text-xl text-light-muted mb-8">
                A comprehensive collection of RPC endpoints for major blockchain networks, 
                including service providers and public endpoints for developers.
              </p>
              <div className="flex items-center justify-center">
                <FaInfoCircle className="text-primary mr-2" size={24} />
                <span className="text-light">Securely connect to blockchain networks with reliable RPC providers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-10 bg-dark border-b border-dark-light/20">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search */}
                <div className="w-full md:flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search by name or URL..."
                    className="w-full px-4 py-3 bg-dark-light rounded-lg border border-dark-light focus:outline-none focus:ring-2 focus:ring-primary text-white pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                
                {/* Chain Filter */}
                <div className="w-full md:w-auto">
                  <select
                    className="w-full md:w-48 px-4 py-3 bg-dark-light rounded-lg border border-dark-light focus:outline-none focus:ring-2 focus:ring-primary text-white"
                    value={selectedChain}
                    onChange={(e) => setSelectedChain(e.target.value)}
                  >
                    {chains.map(chain => (
                      <option key={chain.id} value={chain.id}>
                        {chain.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Type Filter */}
                <div className="w-full md:w-auto">
                  <select
                    className="w-full md:w-48 px-4 py-3 bg-dark-light rounded-lg border border-dark-light focus:outline-none focus:ring-2 focus:ring-primary text-white"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {rpcTypes.map(type => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Results counter */}
              <div className="mt-4 text-light-muted text-sm">
                Showing {filteredEndpoints.length} of {allEndpoints.length} RPC endpoints
              </div>
            </div>
          </div>
        </section>

        {/* RPC Endpoints Sections */}
        <section className="py-16 bg-dark">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto">
              {Object.keys(groupedEndpoints).length > 0 ? (
                Object.keys(groupedEndpoints).map(chain => (
                  <div key={chain} className="mb-16">
                    <div className="flex items-center mb-6">
                      {chain === 'ethereum' && <FaEthereum className="text-blue-400 mr-3" size={24} />}
                      {chain === 'bsc' && <FaCoins className="text-yellow-400 mr-3" size={24} />}
                      {chain === 'polygon' && <FaCoins className="text-purple-400 mr-3" size={24} />}
                      {chain === 'solana' && <FaCoins className="text-green-400 mr-3" size={24} />}
                      {chain === 'avalanche' && <FaCoins className="text-red-400 mr-3" size={24} />}
                      {chain === 'fantom' && <FaCoins className="text-blue-400 mr-3" size={24} />}
                      <h2 className="text-2xl font-bold text-white">{chainNames[chain]}</h2>
                    </div>
                    
                    {Object.keys(groupedEndpoints[chain]).map(type => (
                      <div key={`${chain}-${type}`} className="mb-10">
                        <h3 className="text-xl font-bold text-light-muted mb-4">{typeNames[type]}</h3>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {groupedEndpoints[chain][type].map((endpoint, index) => (
                            <div key={`${chain}-${type}-${index}`} className="bg-dark-card border border-dark-light/30 rounded-lg p-4 hover:border-primary/50 transition-colors">
                              <h4 className="text-lg font-medium text-white mb-2">{endpoint.name}</h4>
                              <a
                                href={endpoint.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary-light text-sm flex items-center"
                              >
                                {endpoint.url.length > 40 ? `${endpoint.url.substring(0, 40)}...` : endpoint.url}
                                <FaExternalLinkAlt size={12} className="ml-2" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-light-muted">No RPC endpoints found matching your criteria.</p>
                  <button
                    className="mt-4 px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-md transition-colors"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedChain('all');
                      setSelectedType('all');
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Safety Notice */}
        <section className="py-12 bg-dark-light/30 border-y border-dark-light/30">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto bg-dark-card border border-yellow-900/30 rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-yellow-900/30 p-3 rounded-lg mr-4">
                  <FaInfoCircle className="text-yellow-500" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Important Notes About RPC Usage</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start text-light-muted">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Public RPC endpoints may have rate limits or performance issues. For production applications, consider using a dedicated service provider.</span>
                    </li>
                    <li className="flex items-start text-light-muted">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Never expose your private keys or sensitive information when connecting to RPC endpoints.</span>
                    </li>
                    <li className="flex items-start text-light-muted">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>Using multiple RPC providers as fallbacks can improve the reliability of your applications.</span>
                    </li>
                    <li className="flex items-start text-light-muted">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>For privacy-sensitive applications, consider running your own node or using a trusted service provider.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-dark-light/30">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto">
              <NewsletterSubscribe />
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
    </>
  );
}
