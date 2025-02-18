import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { SocketService } from './socket.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true, transports: ['websocket'] })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  // constructor(private readonly socketService: SocketService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // @SubscribeMessage('createSocket')
  // create(@MessageBody() createSocketDto: any) {
  //   return this.socketService.create(createSocketDto);
  // }

  // @SubscribeMessage('findAllSocket')
  // findAll() {
  //   return this.socketService.findAll();
  // }

  // @SubscribeMessage('findOneSocket')
  // findOne(@MessageBody() id: number) {
  //   return this.socketService.findOne(id);
  // }

  // @SubscribeMessage('updateSocket')
  // update(@MessageBody() updateSocketDto: any) {
  //   return this.socketService.update(updateSocketDto.id, updateSocketDto);
  // }

  // @SubscribeMessage('removeSocket')
  // remove(@MessageBody() id: number) {
  //   return this.socketService.remove(id);
  // }
}
