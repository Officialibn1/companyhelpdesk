import { addPost, getPosts } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    const posts = await getPosts()
    
    try {
        if (posts.length < 1) {
            return NextResponse.json({message: 'There are no Posts.!!'}, {status: 200})
        } else {
            return NextResponse.json({message: `You have a total of ${posts.length} ${posts.length > 1 ? 'Posts' : 'Post'}`, posts}, {status: 200})
        } 

    } catch (error) {
        return NextResponse.json({message: 'We encountered an error', error}, {status: 500})
    }
}

export const POST = async (req: Request) => {
    const {title, body} = await req.json()

    const post = {
        id: Date.now(),
        title: title,
        body: body,
        date: new Date
    }

    try {
        addPost(post)
        return NextResponse.json({message: 'Post created successfully', post}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Could not complete the operation'}, {status: 500})
    }
}