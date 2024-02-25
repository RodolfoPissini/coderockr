import axios from "axios";

export async function getListPosts(){
    return await axios.get('https://sample-posts.coderockr.com/api/posts')
}

export async function getPost(id){
    return await axios.get(`https://sample-posts.coderockr.com/api/posts/${id}`)
}