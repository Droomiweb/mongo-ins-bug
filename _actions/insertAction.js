'use server'
import connectDB from "@/config/database";
import PostModel from "@/models/postModel";

export async function insPost(res,req){
    try{
        await connectDB();
    const data ={
        msg:res
    }
   const insert = await PostModel.create(data)
   return {insert}
   

    }catch(error){
        return{errMsgi:error.message}
    }
}