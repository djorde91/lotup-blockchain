export interface ContractInfo {
  address: string;
  network: string;
  deployedAt: string;
}

export interface HelloWorldContract {
  getGreeting(): Promise<string>;
  setGreeting(greeting: string): Promise<void>;
  getOwner(): Promise<string>;
  owner(): Promise<string>;
}

export interface DeploymentResult {
  contractAddress: string;
  owner: string;
  initialGreeting: string;
}

export interface NetworkConfig {
  name: string;
  chainId: number;
  rpcUrl: string;
  blockExplorer?: string;
}

export interface WalletConfig {
  projectId: string;
  appName: string;
  chains: NetworkConfig[];
}
