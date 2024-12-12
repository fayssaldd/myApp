import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { LoaderCircle, Trash2 } from 'lucide-react';
import AjouterProduct from './AjouterProduct';
import { useToast } from "@/hooks/use-toast"
import { axiosClient } from '../../api/axios';



export default function Producs() {
  // const { toast } = useToast()
  //   const [data, setData] = useState([])
  //   const [isloading, setIsLoading] = useState(true);
  //   const fetchData = async ()=>{
  //     try{
  //       const res = await axiosClient.get('/products');
  //       setData(res.data)
  //     }catch(err){
  //       console.log("Error : ", err);
  //     }finally{
  //       setIsLoading(false);
  //     }
  //   }
  //   const handleDelete = async (id)=>{
  //     if(confirm('are you sur')){
  //       await axiosClient.delete(`/products/${id}`)
  //       .then(res=>{
  //         toast({
  //           title: "Successfuly",
  //           className:"bg-red-500 text-white",
  //           description: "Bien Suprimer product",
  //       })  
  //         fetchData()
  //       }).catch(err=>{
  //         console.log("err ", err);
  //       })
  //     }
  //   }
  //   useEffect(()=>{
  //     fetchData()
  //   },[])
  return (
    <div className='flex justify-center '>
      {/* <AjouterProduct fetchData={fetchData} />
    {
      isloading ? <p className='flex justify-center items-center w-full h-[80vh]'>
        <LoaderCircle className={"animate-spin"}/>
        </p> :
      <div className='flex flex-wrap justify-center lg:w-[50rem]'>
        <Table className="shadow border mt-20">
          <TableCaption>A list of products</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {
            data.map(product=><>
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.nom}</TableCell>
                  <TableCell>{product.prix}$</TableCell>
                  <TableCell><Button  className="bg-red-500" onClick={()=>handleDelete(product.id)} > <Trash2/></Button></TableCell>
                </TableRow>
            </>)
          }
          </TableBody>
        </Table>
      </div>
    } */}
   
  </div>
  )
}
