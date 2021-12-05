export interface CoinTransferObject{
  operation:CoinOperations,
  elementId:string
}

export enum CoinOperations{
  Add=1,
  Delete=2
}