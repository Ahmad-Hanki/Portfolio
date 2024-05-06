'use client'
import {ZodType, z} from 'zod';

export interface ZodTypeProp {
    name:string,
    subject:string
    email:string,
    message:string
}

export const Schame = ():ZodType<ZodTypeProp> => {
    return z.object({
        name: z.string().min(3).max(30),
        subject: z.string().min(3).max(30),
        email:z.string().email(),
        message:z.string().min(10).max(200)
    })
}


