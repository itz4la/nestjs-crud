import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto, EditMenuDto } from './dto';

@Controller('menu')
export class MenuController {

    constructor(private menuService : MenuService){}

    @Get()
    GetMenu(){
        return this.menuService.GetMenu()
    }

    @Get(':id')
    GetMenubyId(@Param('id') menuId : string){
        return this.menuService.GetMenubyId(menuId)
    }

    @Post()
    CreateMenu( @Body() dto : CreateMenuDto){
        return this.menuService.createMenu( dto)
    }

    @Put(':id')
    EditMenu(@Param('id') menuId : string ,  @Body() dto : EditMenuDto){
        return this.menuService.editMenu(menuId , dto)
    }
    //@HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    DeleteMenu(@Param('id') menuId : string){
        return this.menuService.deleteMenu(menuId)
    }
}
