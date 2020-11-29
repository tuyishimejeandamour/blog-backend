import { CreatePostDTO } from './Dto/create-post.dto';
import { Body, Controller,Delete,Get, Param, Patch, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Postmodel } from './model/post.model';
import { ValidateObjectIdPipe } from 'src/shared/pipes/validateobjectid.pipe';


@Controller('api/post')
export class BlogController { 
 constructor(private readonly blogservice:BlogService){}
@Get()
async getallpost():Promise<Postmodel[]> {
 const posts = await this.blogservice.getposts();
 return posts;
}
@Get(':id')
async getOne(@Param('id',ValidateObjectIdPipe) id: number): Promise<Postmodel> {
    const post = await this.blogservice.getpostbyid(id);
    return post;
}
@Post()
async addpost(@Body() createpostDTO:CreatePostDTO):Promise<Postmodel> {
const newpost = await this.blogservice.addpost(createpostDTO);
return newpost;
}
@Patch(':id')
async updatepost(
    @Param('id',ValidateObjectIdPipe) id:string,
    @Body() createpostDTO:CreatePostDTO
){
 const updatedpost = await this.blogservice.editpost(id,createpostDTO);

 return updatedpost;
}
@Delete(':id')
 async deletepost(@Param('id',ValidateObjectIdPipe) id:string){
  const deletepost = await this.blogservice.deletepost(id);

  return deletepost;
 }
}
