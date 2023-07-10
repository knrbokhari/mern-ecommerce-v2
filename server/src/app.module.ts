import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StripeModule } from 'nestjs-stripe';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StripeModule.forRoot({
      apiKey: process.env.STRIPE_API_KEY,
      apiVersion: '2022-11-15',
    }),
    PrismaModule,
    UsersModule,
    SettingsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
