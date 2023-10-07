import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { API } from 'config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await app.listen(API.PORT)
}

bootstrap()
