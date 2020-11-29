import { Postmodel} from './model/post.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model} from 'mongoose';
import  {CreatePostDTO } from'./Dto/create-post.dto'

@Injectable()
export class BlogService {
    constructor( @InjectModel('Post') readonly Post:Model<Postmodel>){ }

    async getposts(){
        const posts = await this.Post.find().exec();
        return posts;
    }
    async getpostbyid(id){
        return await this.getpost(id);
    }
    async addpost(CreatePostDTO:CreatePostDTO): Promise<Postmodel>{
        const newpost = await this.Post.create(CreatePostDTO);

        return newpost.save();
    }
    async editpost(id,CreatePostDTO:CreatePostDTO){
        const post = this.getpost(id);
        const updated = await this.Post.findByIdAndUpdate(id,CreatePostDTO,{new:true});

        return updated;
    }
    async deletepost(id):Promise<Postmodel>{
        const deletepost = await this.Post.deleteOne({_id:id}).exec();
        return deletepost;
    }
    async getpost(id):Promise<Postmodel>{
        try {
            const posts = await this.Post.findById(id).exec();
            return posts;
            
        } catch (error) {
            throw new NotFoundException('product not found');
        }
        
    }
 }
