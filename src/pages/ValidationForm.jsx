import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
    username: z.string().min(3).max(10),
    email : z.string().email(),
    password: z.string().min(6)
})
export default function ValidationForm() {
    const { toast } = useToast()
    const {
        register,
        handleSubmit,
        setValue,
        formState:{errors},
    } = useForm({
        resolver: zodResolver(formSchema)
    })

    const onSubmitForm = (data)=>{
        alert(`Your username : ${data.username} \nYour email : ${data.email} \nYour email : ${data.password}`)
        toast({
            title: "Successfuly",
            className:"bg-blue-500 text-white",
            description: "Friday, February 10, 2023 at 5:57 PM",
        })
        setValue('username','')
        setValue('email','')
        setValue('password','')
    }
  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
        <div className='w-[30rem] p-4 shadow border rounded'>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className='mb-4'>
                    <label>Username</label>
                    <Input {...register("username")} />
                    {errors.username && <p className='text-red-500'>{ errors.username.message }</p>}
                </div>
                <div className='mb-4'>
                    <label>Email</label>
                    <Input {...register("email")} />
                    {errors.email && <p className='text-red-500'>{ errors.email.message }</p>}
                </div>
                <div className='mb-4'>
                    <label>Passowrd</label>
                    <Input {...register("password")} />
                    {errors.password && <p className='text-red-500'>{ errors.password.message }</p>}
                </div>
                <div className='mb-4'>
                    <Button className='bg-blue-500' type="submit" >Ajouter</Button>
                </div>
            </form>
        </div>
    </div>
  )
}
