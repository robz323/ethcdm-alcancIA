export interface CrateCeloWallet {
    mnemonic: string;
    address: string;
    key: string;
  }

export interface GetBalanceWallet{
    celo:BigInteger,
    cUsd:string,
    cEur:string
}