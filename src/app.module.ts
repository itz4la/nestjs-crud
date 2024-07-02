import {  Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { FoodModule } from './food/food.module';


@Module({
  imports: [
    MenuModule, 
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal : true,
    }),
    FoodModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
