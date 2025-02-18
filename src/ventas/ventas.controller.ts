import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VentasService } from './ventas.service';

@Controller()
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @MessagePattern('createVenta')
  create(@Payload() createVentaDto: any) {
    return this.ventasService.create(createVentaDto);
  }

  @MessagePattern('findAllVentas')
  findAll(@Payload() createVentaDto: any) {
    return this.ventasService.findAll(createVentaDto);
  }

  @MessagePattern('findOneVenta')
  findOne(@Payload() id: number) {
    return this.ventasService.findOne(id);
  }

  @MessagePattern('updateVenta')
  update(@Payload() updateVentaDto: any) {
    return this.ventasService.update(updateVentaDto.id, updateVentaDto);
  }

  @MessagePattern('removeVenta')
  remove(@Payload() id: number) {
    return this.ventasService.remove(id);
  }
}
