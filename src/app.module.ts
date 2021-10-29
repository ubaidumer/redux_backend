import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import CONFIG from './config';
import { PostSchema } from './post.entity';
@Module({
  imports: [MongooseModule.forRoot( 
 CONFIG.MONGODB_URL), 
     MongooseModule.forFeature([
        { name: 'Object', schema: PostSchema },
      ]),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
