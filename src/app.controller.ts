import { Controller, Delete, Get, Post, Req } from '@nestjs/common';
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
  @Post('/updatePost')
  updatePOst(
    @Req() req,
  )
   {
     const post = req.body
    return this.appService.updatePosttData(post);
  }
  @Post('/deletePost')
  deletePOst(
    @Req() req,
  )
   {
     console.log("request",req)
     const post = req.body.id;
     console.log("id",post)
    return this.appService.deletePosttData(post);
  }
}
