'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useReadContract, useWriteContract } from 'wagmi'
import { useState } from 'react'
import HelloWorldABI from '../artifacts/contracts/HelloWorld.sol/HelloWorld.json'

export default function Home() {
  const { address, isConnected } = useAccount()
  const [newGreeting, setNewGreeting] = useState('')

  // Contract configuration
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x5FbDB2315678afecb367f032d93F642f64180aa3'
  
  const { data: greeting } = useReadContract({
    address: contractAddress as `0x${string}`,
    abi: HelloWorldABI.abi,
    functionName: 'getGreeting',
  })

  const { data: owner } = useReadContract({
    address: contractAddress as `0x${string}`,
    abi: HelloWorldABI.abi,
    functionName: 'getOwner',
  })

  const { writeContract: setGreeting } = useWriteContract()

  const handleSetGreeting = (): void => {
    if (newGreeting.trim()) {
      setGreeting({
        address: contractAddress as `0x${string}`,
        abi: HelloWorldABI.abi,
        functionName: 'setGreeting',
        args: [newGreeting]
      })
      setNewGreeting('')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Lotup Blockchain
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Hello World Smart Contract
            </p>
          </div>
          <ConnectButton />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                🚀 Welcome to Your First Smart Contract!
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                This is a simple "Hello World" contract deployed on the blockchain.
                Connect your wallet to interact with it!
              </p>
            </div>

            {isConnected ? (
              <div className="space-y-6">
                {/* Contract Info */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Contract Information
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Contract Address:</span> 
                      <code className="ml-2 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-sm">
                        {contractAddress}
                      </code>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Owner:</span> 
                      <code className="ml-2 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-sm">
                        {owner}
                      </code>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Your Address:</span> 
                      <code className="ml-2 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-sm">
                        {address}
                      </code>
                    </p>
                  </div>
                </div>

                {/* Current Greeting */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Current Greeting
                  </h3>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-dashed border-blue-300 dark:border-blue-600">
                    <p className="text-2xl font-medium text-blue-600 dark:text-blue-400 text-center">
                      "{greeting || 'Loading...'}"
                    </p>
                  </div>
                </div>

                {/* Update Greeting */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Update Greeting
                  </h3>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={newGreeting}
                      onChange={(e) => setNewGreeting(e.target.value)}
                      placeholder="Enter your new greeting..."
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                    <button
                      onClick={handleSetGreeting}
                      disabled={!newGreeting.trim()}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                      Update
                    </button>
                  </div>
                </div>

                {/* Success Message */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    🎉 Congratulations!
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    You've successfully deployed and interacted with your first smart contract! 
                    This is a significant milestone in your blockchain journey.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔗</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Connect Your Wallet
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Connect your wallet to interact with the Hello World smart contract
                </p>
                <ConnectButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
