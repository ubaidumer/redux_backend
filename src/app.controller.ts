import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/post')
  getGet() {
    return this.appService.getPostData();
  }

  @Post('/post')
  getPOst(
    @Req() req,
  )
   {
     const post = req.body
    return this.appService.postPostData(post);
  }
}
