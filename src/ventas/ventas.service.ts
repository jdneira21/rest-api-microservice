import { Injectable, OnApplicationBootstrap } from '@nestjs/common';


@Injectable()
export class VentasService {
  
  create(createVentaDto: any) {
    console.log(createVentaDto)
    return 'This action adds a new venta';
  }

  findAll(createVentaDto: any) {
    console.log('findAll')
    console.log(createVentaDto)
    return `This action returns all ventas`;
  }

  findOne(id: number) {
    console.log('findOne' + id)
    return `This action returns a #${id} venta`;
  }

  update(id: number, updateVentaDto: any) {
    console.log(id + updateVentaDto)
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    console.log(id)
    return `This action removes a #${id} venta`;
  }
}
