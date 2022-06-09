import { PostReponseDto } from "../interfaces/common/PostResponseDto";
import { BlogCreateDto } from "../interfaces/blog/BlogCreateDto";
import { BlogUpdateDto } from "../interfaces/blog/BlogUpdateDto";
import { BlogResponseDto } from "../interfaces/blog/BlogResponseDto";
import Blog from "../models/Blog";

const createBlog = async (blogCreateDto: BlogCreateDto): Promise<PostReponseDto> => {
    try{
        const blog = new Blog({
            topic: blogCreateDto.topic,
            writer: blogCreateDto.writer,
            title: blogCreateDto.title,
            contents: blogCreateDto.contents,
            views: blogCreateDto.views
        });

        await blog.save();

        const data = {
            _id: blog.id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

const updateBlog = async (blogId: string, blogUpdateDto: BlogUpdateDto) : Promise<void> => {
    try{
        await Blog.findByIdAndUpdate(blogId, blogUpdateDto);

    } catch(error){
        console.log(error);
        throw error;
    }
}

const findBlog = async ( blogId: string ): Promise<BlogResponseDto | null>=> {
    try{
        const blog = await Blog.findById(blogId);
        
        if(!blog){
            return null;
        }

        return blog;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteBlog = async ( blogId: string ): Promise<void> => {
    try{
        await Blog.findByIdAndDelete(blogId);

    } catch (error){
        console.log(error);
        throw error;
    }
}
export default {
    createBlog,
    updateBlog,
    findBlog,
    deleteBlog
}