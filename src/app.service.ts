import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { posts } from './post.interface';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Object')
    private postrepo: Model<posts>,

  ) { }
  async getPostData(){
    const postData = await this.postrepo.find();
    return postData;
  }
  async  postPostData(post){
    const newPost = await new this.postrepo(post);
    const save = await newPost.save();
    return save;

  }
  async  deletePosttData(id){
    const deletedData = await this.postrepo.findByIdAndDelete(id);
    console.log(id,deletedData)
    return deletedData;
  }
  async  updatePosttData(post){
    let id=post._id;
    delete post._id;
    const data = await this.postrepo.findByIdAndUpdate(id,post);
    console.log(post,data)
    return data;
  }
}
