import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMenuDto, EditMenuDto } from './dto';

@Injectable()
export class MenuService {
    constructor(private prisma : PrismaService){}
    GetMenu(){
        return this.prisma.menu.findMany({})
    }
    GetMenubyId(menuId : string){
        return this.prisma.menu.findFirst({
            where:{
                id : menuId
            }
        })
    }

    async createMenu(dto : CreateMenuDto){
        const menu = await this.prisma.menu.create({
            data :{
                ...dto
            }
        })
        return menu
    }

    async editMenu(menuId : string , dto : EditMenuDto){
        // check menu
        const menu = await this.prisma.menu.findFirst({
            where : {
                id : menuId
            }
        })
        if(!menu)
        throw new NotFoundException('Menu not found !')
        
        //edit menu
        const editMenu  = await this.prisma.menu.update({
            where :{
                id : menu.id
            },
            data : {
                ...dto
            }
        });

        return editMenu
    }

    async deleteMenu(menuId : string){
        // check menu
        const menu = await this.prisma.menu.findFirst({
            where : {
                id : menuId
            }
        })
        if(!menu)
        throw new NotFoundException('Menu not found !')

        await this.prisma.menu.delete({
            where :{
                id : menu.id
            }
    
        });
        return {"message" : "menu deleted !"}
    }
}
