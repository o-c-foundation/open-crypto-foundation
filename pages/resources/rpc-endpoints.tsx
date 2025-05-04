import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaServer, FaGlobe, FaEthereum, FaCoins, FaFilter, FaSearch, FaExternalLinkAlt, FaInfoCircle, FaNetworkWired } from 'react-icons/fa';
import { SiBinance, SiPoly, SiFantom, SiAlgorand } from 'react-icons/si';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import ScrollToTop from '../../components/ScrollToTop';
import SolanaIcon from '../../components/icons/SolanaIcon';

// Define types for our RPC endpoints
interface RPCEndpoint {
  name: string;
  url: string;
  type: 'provider' | 'public' | 'websocket' | 'setup';
  chain: string;
}

interface Chain {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface RPCType {
  id: string;
  name: string;
}

// Type for grouped endpoints
interface GroupedEndpoints {
  [chain: string]: {
    [type: string]: RPCEndpoint[];
  };
}

export default function RPCEndpointsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChain, setSelectedChain] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Define chains with their icons
  const chains: Chain[] = [
    { id: 'all', name: 'All Chains', icon: <FaNetworkWired /> },
    { id: 'ethereum', name: 'Ethereum', icon: <FaEthereum className="text-blue-400" /> },
    { id: 'bsc', name: 'BSC', icon: <SiBinance className="text-yellow-400" /> },
    { id: 'polygon', name: 'Polygon', icon: <SiPoly className="text-purple-400" /> },
    { id: 'solana', name: 'Solana', icon: <SolanaIcon className="text-green-500" size={16} /> },
    { id: 'avalanche', name: 'Avalanche', icon: <FaCoins className="text-red-400" /> },
    { id: 'fantom', name: 'Fantom', icon: <SiFantom className="text-blue-400" /> },
    { id: 'zkEVM', name: 'Polygon zkEVM', icon: <SiPoly className="text-purple-300" /> },
    { id: 'algorand', name: 'Algorand', icon: <SiAlgorand className="text-gray-500" /> },
  ];

  // RPC types
  const rpcTypes: RPCType[] = [
    { id: 'all', name: 'All Types' },
    { id: 'provider', name: 'Service Providers' },
    { id: 'public', name: 'Public Endpoints' },
    { id: 'websocket', name: 'WebSocket' },
    { id: 'setup', name: 'Setup Your Own' },
  ];

  // Ethereum RPC Endpoints
  const ethereumProviders: RPCEndpoint[] = [
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

  const ethereumEndpoints: RPCEndpoint[] = [
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
  const bscProviders: RPCEndpoint[] = [
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

  const bscEndpoints: RPCEndpoint[] = [
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

  const bscWebsockets: RPCEndpoint[] = [
    { name: 'Nariox', url: 'wss://bsc-ws-node.nariox.org:443', type: 'websocket', chain: 'bsc' },
  ];

  const bscSetup: RPCEndpoint[] = [
    { name: 'Run Your Own Node', url: 'https://docs.binance.org/smart-chain/developer/fullnode.html', type: 'setup', chain: 'bsc' },
  ];

  // Polygon
  const polygonProviders: RPCEndpoint[] = [
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

  const polygonEndpoints: RPCEndpoint[] = [
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

  const polygonWebsockets: RPCEndpoint[] = [
    { name: 'Polygon RPC', url: 'wss://rpc-mainnet.matic.network', type: 'websocket', chain: 'polygon' },
    { name: 'GetBlock', url: 'wss://matic.getblock.io/api_key/mainnet/', type: 'websocket', chain: 'polygon' },
    { name: 'MaticVigil', url: 'wss://rpc-mainnet.maticvigil.com/ws', type: 'websocket', chain: 'polygon' },
  ];

  const polygonSetup: RPCEndpoint[] = [
    { name: 'Run Your Own Node', url: 'https://docs.polygon.technology/docs/maintain/validate/validator-index', type: 'setup', chain: 'polygon' },
  ];

  // Solana
  const solanaProviders: RPCEndpoint[] = [
    { name: 'Chainstack', url: 'https://chainstack.com/build-better-with-solana/', type: 'provider', chain: 'solana' },
    { name: 'GetBlock', url: 'https://getblock.io/nodes/sol/', type: 'provider', chain: 'solana' },
    { name: 'Pocket Network', url: 'https://mainnet.portal.pokt.network', type: 'provider', chain: 'solana' },
    { name: 'Figment Datahub', url: 'https://datahub.figment.io/', type: 'provider', chain: 'solana' },
    { name: 'NOWNodes.io', url: 'https://nownodes.io/', type: 'provider', chain: 'solana' },
    { name: 'Coinbase', url: 'https://www.coinbase.com/blog/coinbase-cloud-launches-solana-archival-nodes-to-empower-the-solana', type: 'provider', chain: 'solana' },
    { name: 'Blockdaemon', url: 'https://blockdaemon.com/documentation/guides/solana/solana-nodes/', type: 'provider', chain: 'solana' },
    { name: 'Alchemy', url: 'https://alchemy.com', type: 'provider', chain: 'solana' },
    { name: 'OnFinality', url: 'https://onfinality.io/networks/solana', type: 'provider', chain: 'solana' },
    { name: 'DRPC', url: 'https://drpc.org/public-endpoints/solana', type: 'provider', chain: 'solana' },
  ];

  const solanaEndpoints: RPCEndpoint[] = [
    { name: 's.1b.tc', url: 'https://s.1b.tc/888/solana', type: 'public', chain: 'solana' },
    { name: 'QuickNode', url: 'https://aged-serene-cherry.solana-mainnet.quiknode.pro/2fd1bc5f0b9eaf51169ca37b2b92c35232365a1a', type: 'public', chain: 'solana' },
    { name: 'Solflare', url: 'https://mainnet-beta.solflare.network', type: 'public', chain: 'solana' },
    { name: 'Helius', url: 'https://adjacent-prisca-fast-mainnet.helius-rpc.com', type: 'public', chain: 'solana' },
    { name: 'Coin98', url: 'https://information.coin98.com/api/solanaV4', type: 'public', chain: 'solana' },
    { name: 'Helius Cold', url: 'https://cold-hanni-fast-mainnet.helius-rpc.com/', type: 'public', chain: 'solana' },
    { name: 'Phantom', url: 'https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ', type: 'public', chain: 'solana' },
    { name: 'Helius Linguistic', url: 'https://linguistic-dulcea-fast-mainnet.helius-rpc.com', type: 'public', chain: 'solana' },
    { name: 'Ankr', url: 'https://rpc.ankr.com/solana', type: 'public', chain: 'solana' },
    { name: 'Phantom Tech', url: 'https://solana-mainnet.phantom.tech', type: 'public', chain: 'solana' },
    { name: 'Solana Mainnet', url: 'https://api.mainnet-beta.solana.com', type: 'public', chain: 'solana' },
    { name: 'RPC Pool', url: 'https://api.rpcpool.com', type: 'public', chain: 'solana' },
    { name: 'Solana Public', url: 'https://solana.public-rpc.com', type: 'public', chain: 'solana' },
    { name: 'Solana Devnet', url: 'https://api.devnet.solana.com', type: 'public', chain: 'solana' },
  ];

  const solanaSetup: RPCEndpoint[] = [
    { name: 'Run Your Own Node', url: 'https://docs.solana.com/running-validator', type: 'setup', chain: 'solana' },
  ];

  // Avalanche
  const avalancheProviders: RPCEndpoint[] = [
    { name: 'GetBlock', url: 'https://getblock.io/nodes/avax/', type: 'provider', chain: 'avalanche' },
    { name: 'Pocket Network', url: 'https://mainnet.portal.pokt.network', type: 'provider', chain: 'avalanche' },
    { name: 'Chainstack', url: 'https://chainstack.com/build-better-with-avalanche/', type: 'provider', chain: 'avalanche' },
    { name: 'Allnodes', url: 'https://www.allnodes.com', type: 'provider', chain: 'avalanche' },
    { name: 'Figment Datahub', url: 'https://datahub.figment.io/', type: 'provider', chain: 'avalanche' },
    { name: 'Ankr', url: 'https://ankr.com', type: 'provider', chain: 'avalanche' },
    { name: 'Blast', url: 'https://blastapi.io/', type: 'provider', chain: 'avalanche' },
    { name: 'NOWNodes.io', url: 'https://nownodes.io/', type: 'provider', chain: 'avalanche' },
    { name: 'OnFinality.io', url: 'https://onfinality.io', type: 'provider', chain: 'avalanche' },
    { name: 'Chainbase', url: 'https://chainbase.online', type: 'provider', chain: 'avalanche' },
    { name: 'Exaion Node', url: 'https://node.exaion.com/', type: 'provider', chain: 'avalanche' },
    { name: 'DRPC', url: 'https://drpc.org/public-endpoints/avalanche', type: 'provider', chain: 'avalanche' },
    { name: 'Stackup', url: 'https://www.stackup.sh/', type: 'provider', chain: 'avalanche' },
  ];

  const avalancheEndpoints: RPCEndpoint[] = [
    { name: 'Pocket Network', url: 'https://avax-mainnet.gateway.pokt.network/v1/lb/605238bf6b986eea7cf36d5e/ext/bc/C/rpc', type: 'public', chain: 'avalanche' },
    { name: 'API AVAX', url: 'https://api.avax.network/ext/bc/C/rpc', type: 'public', chain: 'avalanche' },
    { name: 'Ankr', url: 'https://rpc.ankr.com/avalanche', type: 'public', chain: 'avalanche' },
    { name: 'RPCGator', url: 'https://avax.rpcgator.com/', type: 'public', chain: 'avalanche' },
    { name: 'Public RPC', url: 'https://avalanche.public-rpc.com', type: 'public', chain: 'avalanche' },
    { name: 'BlastAPI', url: 'https://blastapi.io/public-api/avalanche', type: 'public', chain: 'avalanche' },
    { name: 'OnFinality', url: 'https://avalanche.api.onfinality.io/public', type: 'public', chain: 'avalanche' },
    { name: 'PublicNode', url: 'https://avalanche.publicnode.com', type: 'public', chain: 'avalanche' },
    { name: 'DRPC', url: 'https://avalanche.drpc.org', type: 'public', chain: 'avalanche' },
    { name: 'Stackup', url: 'https://public.stackup.sh/api/v1/node/avalanche-mainnet', type: 'public', chain: 'avalanche' },
  ];

  const avalancheSetup: RPCEndpoint[] = [
    { name: 'Run Your Own Node', url: 'https://docs.avax.network/build/tutorials/nodes-and-staking/run-avalanche-node', type: 'setup', chain: 'avalanche' },
  ];

  // Fantom
  const fantomProviders: RPCEndpoint[] = [
    { name: 'GetBlock', url: 'https://getblock.io/nodes/ftm/', type: 'provider', chain: 'fantom' },
    { name: 'ANKR', url: 'https://ankr.com', type: 'provider', chain: 'fantom' },
    { name: 'Chainstack', url: 'https://chainstack.com/build-better-with-fantom/', type: 'provider', chain: 'fantom' },
    { name: 'Pocket Network', url: 'https://mainnet.portal.pokt.network', type: 'provider', chain: 'fantom' },
    { name: 'Blast', url: 'https://blastapi.io/', type: 'provider', chain: 'fantom' },
    { name: 'Datahub', url: 'https://datahub.figment.io/', type: 'provider', chain: 'fantom' },
    { name: 'NOWNodes.io', url: 'https://nownodes.io/', type: 'provider', chain: 'fantom' },
    { name: 'Chainbase', url: 'https://chainbase.online', type: 'provider', chain: 'fantom' },
    { name: 'OnFinality.io', url: 'https://onfinality.io', type: 'provider', chain: 'fantom' },
    { name: 'DRPC', url: 'https://drpc.org/public-endpoints/fantom', type: 'provider', chain: 'fantom' },
  ];

  const fantomEndpoints: RPCEndpoint[] = [
    { name: 'Pocket Network', url: 'https://fantom-mainnet.gateway.pokt.network/v1/lb/6261a8a154c745003bcdb0f8', type: 'public', chain: 'fantom' },
    { name: 'FTM Tools', url: 'https://rpc.ftm.tools/', type: 'public', chain: 'fantom' },
    { name: 'Ankr', url: 'https://rpc.ankr.com/fantom', type: 'public', chain: 'fantom' },
    { name: 'RPCGator', url: 'https://ftm.rpcgator.com/', type: 'public', chain: 'fantom' },
    { name: 'BlastAPI', url: 'https://blastapi.io/public-api/fantom', type: 'public', chain: 'fantom' },
    { name: 'PublicNode', url: 'https://fantom.publicnode.com', type: 'public', chain: 'fantom' },
    { name: 'OnFinality', url: 'https://fantom.api.onfinality.io/public', type: 'public', chain: 'fantom' },
    { name: 'DRPC', url: 'https://fantom.drpc.org', type: 'public', chain: 'fantom' },
  ];

  const fantomWebsockets: RPCEndpoint[] = [
    { name: 'Fantom Network', url: 'wss://wsapi.fantom.network', type: 'websocket', chain: 'fantom' },
    { name: 'GetBlock', url: 'wss://bsc.getblock.io/api_key/mainnet/', type: 'websocket', chain: 'fantom' },
  ];

  const fantomSetup: RPCEndpoint[] = [
    { name: 'Run Your Own Node', url: 'https://docs.fantom.foundation/node/how-to-run-a-validator-node', type: 'setup', chain: 'fantom' },
  ];

  // Polygon zkEVM
  const zkEVMProviders: RPCEndpoint[] = [
    { name: 'Chainstack', url: 'https://chainstack.com/build-better-with-polygon-zkevm/', type: 'provider', chain: 'zkEVM' },
    { name: 'DRPC', url: 'https://drpc.org/public-endpoints/polygon-zkevm', type: 'provider', chain: 'zkEVM' },
  ];

  const zkEVMEndpoints: RPCEndpoint[] = [
    { name: 'zkEVM RPC', url: 'https://zkevm-rpc.com', type: 'public', chain: 'zkEVM' },
    { name: 'DRPC', url: 'https://polygon-zkevm.drpc.org', type: 'public', chain: 'zkEVM' },
  ];

  // Algorand
  const algorandProviders: RPCEndpoint[] = [
    { name: 'GetBlock', url: 'https://getblock.io/nodes/algo/', type: 'provider', chain: 'algorand' },
    { name: 'Pocket Network', url: 'https://mainnet.portal.pokt.network', type: 'provider', chain: 'algorand' },
    { name: 'NOWNodes.io', url: 'https://nownodes.io/', type: 'provider', chain: 'algorand' },
  ];

  const algorandSetup: RPCEndpoint[] = [
    { name: 'Run Your Own Node', url: 'https://developer.algorand.org/docs/run-a-node/setup/install/', type: 'setup', chain: 'algorand' },
  ];

  // Helper function to filter RPC endpoints based on search and filter criteria
  const filterRPCEndpoints = (endpoints: RPCEndpoint[]): RPCEndpoint[] => {
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
  const allEndpoints: RPCEndpoint[] = [
    ...ethereumProviders, ...ethereumEndpoints,
    ...bscProviders, ...bscEndpoints, ...bscWebsockets, ...bscSetup,
    ...polygonProviders, ...polygonEndpoints, ...polygonWebsockets, ...polygonSetup,
    ...solanaProviders, ...solanaEndpoints, ...solanaSetup,
    ...avalancheProviders, ...avalancheEndpoints, ...avalancheSetup,
    ...fantomProviders, ...fantomEndpoints, ...fantomWebsockets, ...fantomSetup,
    ...zkEVMProviders, ...zkEVMEndpoints,
    ...algorandProviders, ...algorandSetup
  ];
  
  const filteredEndpoints = filterRPCEndpoints(allEndpoints);
  
  // Group endpoints by chain and type for display
  const groupedEndpoints: GroupedEndpoints = {};
  
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
  const chainNames: Record<string, string> = {
    'ethereum': 'Ethereum',
    'bsc': 'BNB Chain',
    'polygon': 'Polygon',
    'solana': 'Solana',
    'avalanche': 'Avalanche',
    'fantom': 'Fantom',
    'zkEVM': 'Polygon zkEVM',
    'algorand': 'Algorand'
  };

  // RPC type display names mapping
  const typeNames: Record<string, string> = {
    'provider': 'Service Providers',
    'public': 'Public Endpoints',
    'websocket': 'WebSocket Endpoints',
    'setup': 'Run Your Own Node'
  };

  // Get icon for a given chain
  const getChainIcon = (chainId: string) => {
    const chain = chains.find(c => c.id === chainId);
    return chain ? chain.icon : <FaFilter />;
  };

  // Get display string for a given type
  const getTypeDisplay = (type: string): string => {
    switch(type) {
      case 'provider': return 'Service Providers';
      case 'public': return 'Public Endpoints';
      case 'websocket': return 'WebSocket Endpoints';
      case 'setup': return 'Run Your Own Node';
      default: return type;
    }
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                
                {/* Chain Filter */}
                <div className="w-full md:w-auto">
                  <select
                    className="w-full md:w-48 px-4 py-3 bg-dark-light rounded-lg border border-dark-light focus:outline-none focus:ring-2 focus:ring-primary text-white"
                    value={selectedChain}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedChain(e.target.value)}
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
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedType(e.target.value)}
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
                      {chain === 'solana' && <SolanaIcon className="text-green-500 mr-3" size={24} />}
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
