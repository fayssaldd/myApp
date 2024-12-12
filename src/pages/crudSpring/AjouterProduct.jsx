import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import * as z from "zod";
import { Loader, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast"
import { axiosClient } from '../../api/axios';


const formSchema = z.object({
    nom: z.string().min(2),
    prix: z.string().min(1),
});
export default function AjouterProduct({fetchData}) {
    const { toast } = useToast()
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          nom: '',
          prix: '',
        },
    });
   

    const onSubmit = async (values) => {
        setIsLoading(true)
        await axiosClient.post('/products',{...values}).then(res=>{
            setIsLoading(false)
            toast({
                title: "Successfuly",
                className:"bg-blue-500 text-white",
                description: "Bien ajouter product",
            }) 
            form.setValue('nom','')
            form.setValue('prix','')
            fetchData()
            setOpen(false)
        }).catch(err=>{
            console.log("err ", err);
            setIsLoading(false)
        })
    }
  return (
    <>
    
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusCircle className="mr-2" /> Créer un produit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Créer un produit</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prix"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prix</FormLabel>
                  <FormControl>
                    <Input placeholder="Prix" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            

            <DialogFooter className="mt-5">
              <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader className={"mx-2 my-2 animate-spin"} />
              ) : (
                "Create"
              )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
    </>
  )
}
