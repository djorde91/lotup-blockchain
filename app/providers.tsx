'use client'

import '@rainbow-me/rainbowkit/styles.css'
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import {
  sepolia,
  localhost,
} from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { http } from 'wagmi'
import type { ReactNode } from 'react'

const config = getDefaultConfig({
  appName: 'Lotup Blockchain',
  //TODO: Add project id.
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'default-project-id',
  chains: [sepolia, localhost],
  transports: {
    [sepolia.id]: http(),
    [localhost.id]: http(),
  },
})

const queryClient = new QueryClient()

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
