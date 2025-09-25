# Lotup Blockchain - Hello World Smart Contract

A complete blockchain dApp project featuring a "Hello World" smart contract built with modern web3 technologies. This project demonstrates the fundamentals of smart contract development, deployment, and frontend integration.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Wagmi** - React hooks for Ethereum
- **RainbowKit** - Wallet connection UI

### Blockchain
- **Solidity 0.8.19** - Smart contract language
- **Hardhat** - Ethereum development environment
- **OpenZeppelin** - Secure smart contract libraries
- **Ethers.js** - Ethereum library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## 🛠️ Installation

### **Quick Setup (Recommended)**

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd lotup-blockchain
   ```

2. **Run the setup script**
   ```bash
   ./setup.sh
   ```
   
   This script will:
   - ✅ Check Node.js and pnpm installation
   - ✅ Install all dependencies
   - ✅ Create .env file from template
   - ✅ Compile smart contracts
   - ✅ Show you the next steps

### **Manual Setup**

If you prefer to set up manually:

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` and add your configuration:
   ```env
   # For Sepolia testnet deployment
   SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
   PRIVATE_KEY=your_private_key_here
   
   # WalletConnect Project ID (required for RainbowKit v2)
   # Get your project ID from: https://cloud.walletconnect.com/
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id_here
   
   # Optional: Alchemy API key for better RPC performance
   NEXT_PUBLIC_ALCHEMY_ID=your_alchemy_id_here
   ```

3. **Compile smart contracts**
   ```bash
   pnpm run compile
   ```

## 🧪 Smart Contract Development

### Compile Contracts
```bash
pnpm run compile
```

### Run Tests
```bash
pnpm run test
```

### Deploy to Local Network
1. Start a local Hardhat node:
   ```bash
   pnpm run node
   ```

2. In another terminal, deploy the contract:
   ```bash
   pnpm run deploy:localhost
   ```

### Deploy to Sepolia Testnet
1. Get testnet ETH from [Sepolia Faucet](https://sepoliafaucet.com/)
2. Deploy to Sepolia:
   ```bash
   pnpm run deploy:sepolia
   ```

3. Update the contract address in your frontend:
   ```bash
   # Copy the contract address from the deployment output
   # Update NEXT_PUBLIC_CONTRACT_ADDRESS in your .env file
   ```

## 🌐 Frontend Development

### Start Development Server
```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production
```bash
pnpm run build
pnpm start
```

## 📖 Smart Contract Overview

The `HelloWorld` contract includes:

- **Constructor**: Sets initial greeting and contract owner
- **getGreeting()**: Returns the current greeting message
- **setGreeting()**: Updates the greeting message
- **getOwner()**: Returns the contract owner address
- **Events**: Emits `GreetingUpdated` when greeting changes

### Contract Features
- ✅ Simple greeting storage and retrieval
- ✅ Owner tracking
- ✅ Input validation (non-empty greetings)
- ✅ Event emission for transparency
- ✅ Public read functions
- ✅ Gas-efficient design

## 🔗 Contract Interaction

Once deployed, users can:
1. **Connect their wallet** using RainbowKit
2. **View the current greeting** stored on-chain
3. **Update the greeting** by calling `setGreeting()`
4. **See transaction history** through the emitted events

## 🚀 Deployment Guide

### Local Development
1. Start Hardhat node: `pnpm run node`
2. Deploy contract: `pnpm run deploy:localhost`
3. Start frontend: `pnpm run dev`
4. Connect MetaMask to `http://localhost:8545`

### Testnet Deployment (Sepolia)
1. Get Sepolia ETH from a faucet
2. Configure `.env` with your RPC URL and private key
3. Deploy: `pnpm run deploy:sepolia`
4. Update frontend with new contract address
5. Access your dApp on the testnet!

## 🎯 Learning Outcomes

By completing this project, you'll understand:
- Smart contract development with Solidity
- Contract testing and deployment
- Frontend integration with Web3
- Wallet connection and transaction handling
- Event listening and state management
- Modern blockchain development workflow

## 📚 Next Steps

After mastering this Hello World contract, consider exploring:
- **Token contracts** (ERC-20, ERC-721)
- **DeFi protocols** (DEX, lending)
- **NFT marketplaces**
- **DAO governance**
- **Layer 2 solutions**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

---

**Congratulations on deploying your first smart contract! 🎉**

This is a significant milestone in your blockchain development journey. You've successfully:
- ✅ Written a Solidity smart contract
- ✅ Deployed it to a blockchain network
- ✅ Created a frontend to interact with it
- ✅ Integrated wallet connectivity

Keep building and exploring the exciting world of blockchain technology!
