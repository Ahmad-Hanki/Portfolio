import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function GuestBookForm() {
    const user = false

    if (user) {
        return <div>
            <h1>Hello</h1>
        </div>
    }

    return <div className='flex justify-between gap-4 flex-col md:flex-row'>
        <Input type='text' placeholder='Your Message...'/>
        <Button>
            Sign For Free
        </Button>
    </div>
}


const GuestBookPage = () => {
  return (
    <section className='max-w-7xl w-full px-4 md:px-8 mx-auto'>
        <h1 className='text-4xl font-semibold lg:text-5xl'>
            GuestBook
        </h1>
        <p className='leading-7 text-muted-foreground mt-2'>Sign My GuestBook!</p>

        <Card className='mt-10'>
            <CardHeader className='flex flex-col w-full'>
                <Label className='mb-1'>
                    Message
                </Label>
                <GuestBookForm />
            </CardHeader>
        </Card>
    </section>
  )
}

export default GuestBookPage