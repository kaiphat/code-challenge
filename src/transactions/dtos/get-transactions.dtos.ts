import { BANKS } from '../enums'

export class GetTrasactionsQueryDTO {
  source?: BANKS
}

export class TransactionDTO {
  id!: number
  created!: string
  description!: string
  // amount
  type!: string
  reference!: string
  // metadata
}

export class GetTrasactionsResponseDTO {
  transactions!: TransactionDTO[]
}
