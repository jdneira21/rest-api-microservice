import { Injectable } from '@nestjs/common';

@Injectable()
export class SocketService {
  create(createSocketDto: any) {
    return 'This action adds a new socket';
  }

  findAll() {
    return `This action returns all socket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socket`;
  }

  update(id: number, updateSocketDto: any) {
    return `This action updates a #${id} socket`;
  }

  remove(id: number) {
    return `This action removes a #${id} socket`;
  }
}
