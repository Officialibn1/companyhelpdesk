import { deletePost, editPost, getPost } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req: Request, context: {params: {id: string}}) => {

    const paramsId = context.params.id
    const id = Number(paramsId)

    const post = await getPost(id)

    try {
        if(post) {
            return NextResponse.json({message: `we fetched post with ID: ${id}`, post}, {status: 200})
        }

        return NextResponse.json({message: `We could not find post with ID: ${id}`}, {status: 404})
    } catch (error) {
        return NextResponse.json({message: 'We encountered an error. . .', error}, {status: 500})
    }
}

export const PUT =  async (req: Request, context: {params: {id: string}}) => {

    const strId = context.params.id

    const id = Number(strId)

    const {title, body} =  await req.json()

    try {
        const post = await getPost(id)

        if (!post) {
            return NextResponse.json({message: `We could not find post with ID: ${id}`}, {status: 404})
        } else {
            editPost(id, title, body)

            return NextResponse.json({message: `Edit post with ID: ${id} was successful`, post}, {status: 200})
        }
    } catch (error) {
        return NextResponse.json({message: 'Error', error}, {status: 500})
    }

}

export const DELETE = async (req: Request, context: {params: {id: string}}) => {
    const strId = context.params.id
    
    const id = Number(strId)

    const post = await getPost(id)

    try {
        if (!post) {
            return NextResponse.json({message: `Post with ID: ${id} does not exist.`}, {status: 404})
        }

        deletePost(id)

        return NextResponse.json({message: `Post with ID: ${id} is deleted`}, {status: 200})

    } catch (error) {
        return NextResponse.json({message: 'Error encountered'}, {status: 500})
    }
}