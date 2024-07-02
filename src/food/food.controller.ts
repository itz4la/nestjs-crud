import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto, EditFoodDto } from './dto';

@Controller('food')
export class FoodController {
    constructor(private foodService : FoodService){}

    @Get()
    GetFood(){
        return this.foodService.GetFood()
    }

    @Get(':id')
    GetFoodbyId(@Param('id') FoodId : string){
        return this.foodService.GetFoodbyId(FoodId)
    }

    @Post(':id')
    CreateFood(@Param('id') FoodId : string , @Body() dto : CreateFoodDto){
        return this.foodService.createFood(FoodId, dto)
    }

    @Put(':id')
    EditFood(@Param('id') FoodId : string ,  @Body() dto : EditFoodDto){
        return this.foodService.EditFood(FoodId , dto)
    }
    //@HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    DeleteFood(@Param('id') FoodId : string){
        return this.foodService.DeleteFood(FoodId)
    }
}
