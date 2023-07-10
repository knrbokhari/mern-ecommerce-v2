import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StripeModule } from 'nestjs-stripe';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { SettingsModule } from './settings/settings.module';
import { TypesModule } from './types/types.module';
import { CategoriesModule } from './categories/categories.module';
import { AttributesModule } from './attributes/attributes.module';
import { TagsModule } from './tags/tags.module';

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
    TypesModule,
    CategoriesModule,
    AttributesModule,
    TagsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
