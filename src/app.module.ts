import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VentasModule } from './ventas/ventas.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [VentasModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
