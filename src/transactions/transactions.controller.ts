import { Controller, Get, Query } from '@nestjs/common'
import { GetTrasactionsQueryDTO, GetTrasactionsResponseDTO } from './dtos'
import { TransactionsService } from './transactions.service'

import axios from 'axios'

@Controller()
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService, //
  ) { }

  @Get('transactions')
  async getTransaction(
    @Query() query: GetTrasactionsQueryDTO, //
  ): Promise<void> {
    const transactions = await this.transactionsService.getTransactions()
    new GetTrasactionsResponseDTO()
  }
}
