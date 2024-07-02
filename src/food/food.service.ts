import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFoodDto } from './dto';

@Injectable()
export class FoodService {
    constructor(private prisma : PrismaService){}

    GetFood(){
        return this.prisma.food.findMany({})
    }
    async GetFoodbyId(foodId : string){
        const food = await this.prisma.food.findFirst({
            where:{
                id : foodId
            }
        });

        if(!food)
        throw new NotFoundException('food with id :'+foodId+' not found !')
    return food
    }
    async createFood(menuId: string , dto : CreateFoodDto){
        const menu = await this.prisma.menu.findFirst({
            where:{
                id : menuId
            }
        });
        if(!menu)
        throw new NotFoundException(`menu with id : ${menuId}  not found !`)
        
        const food = await this.prisma.food.create({
            data:{
                menuId : menu.id,
                ...dto
            }
        });
        return food
    }
    async EditFood(foodId: string , dto : CreateFoodDto){
        const food = await this.prisma.food.findFirst({
            where:{
                id : foodId
            }
        });
        if(!food)
        throw new NotFoundException('food with id :'+foodId+' not found !')

        const editedFood = await this.prisma.food.update({
            where:{
                id : food.id
            },
            data:{
                ...dto
            }
        });
        return editedFood
    }
    async DeleteFood(foodId :string){
        const food = await this.prisma.food.findFirst({
            where:{
                id : foodId
            }
        });
        if(!food)
        throw new NotFoundException('food with id :'+foodId+' not found !')
        await this.prisma.food.delete({
            where:{
                id : food.id
            }
        });
        return {"mes" : "food deleted !!!"}
    }
}
