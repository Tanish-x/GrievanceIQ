// Project Update: Prepared for deployment
const { ethers } = require('ethers');
const EventEmitter = require('events');

/**
 * Simple Blockchain Service for testing
 */
class SimpleBlockchainService extends EventEmitter {
  constructor() {
    super();
    this.isInitialized = true; // Start as initialized
    this.isOnline = false;
    this.offlineMode = true;
    this.contracts = {};
    
    // Simple mock data
    this.mockData = {
      citizens: new Map(),
      documents: new Map(),
      grievances: new Map(),
      transactions: []
    };
    
    console.log('🔄 Simple blockchain service initialized');
  }

  async initialize(network, privateKey, forceOffline = false) {
    console.log('🚀 Initializing Simple Blockchain Service...');
    
    if (forceOffline) {
      console.log('🔄 Forced offline mode enabled');
      this.offlineMode = true;
      this.isOnline = false;
      this.emit('offline', { reason: 'Force offline enabled' });
      return true;
    }

    try {
      // Try to connect to network
      const rpcUrl = 'http://127.0.0.1:8545';
      console.log('🔗 Attempting to connect to Hardhat Network...');
      
      const provider = new ethers.JsonRpcProvider(rpcUrl);
      await provider.getNetwork(); // Test connection
      
      console.log('✅ Connected to blockchain network');
      this.provider = provider;
      this.isOnline = true;
      this.offlineMode = false;
      this.emit('connected', { network: 'localhost' });
      
    } catch (error) {
      console.log('❌ Blockchain connection failed:', error.message);
      console.log('🔄 Switching to enhanced offline mode...');
      this.offlineMode = true;
      this.isOnline = false;
      this.emit('offline', { reason: error.message });
    }
    
    this.isInitialized = true;
    console.log('✅ Simple blockchain service initialized successfully.');
    return true;
  }

  getConnectionStatus() {
    return {
      isInitialized: this.isInitialized,
      isOnline: this.isOnline,
      offline: this.offlineMode,
      network: this.isOnline ? 'localhost' : 'offline',
      provider: this.provider ? 'Connected' : 'Not connected'
    };
  }

  getMockStats() {
    return {
      citizens: this.mockData.citizens.size,
      documents: this.mockData.documents.size,
      grievances: this.mockData.grievances.size,
      transactions: this.mockData.transactions.length
    };
  }

  // Simple stub methods for compatibility
  async registerCitizen() { return { success: true, message: 'Mock registration' }; }
  async verifyCitizen() { return { success: true, message: 'Mock verification' }; }
  async getCitizen() { return null; }
  async uploadDocument() { return { success: true, message: 'Mock upload' }; }
  async getDocument() { return null; }
  async submitGrievance() { return { success: true, message: 'Mock submission' }; }
  async getGrievance() { return null; }
}

// Create singleton instance
const simpleBlockchainService = new SimpleBlockchainService();

module.exports = simpleBlockchainService;