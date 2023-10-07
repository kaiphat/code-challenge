import * as nock from 'nock'
import { OnModuleInit } from '@nestjs/common'
import { BANKS_API } from 'config'

export class MockApiTransactionsService implements OnModuleInit {
  async onModuleInit() {
    this.mockApiTransactionsService()
  }

  private mockApiTransactionsService() {
    nock(BANKS_API.URL).get().reply(200, {
      a: 1000,
    })
  }
}
