import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LoaderCircle } from 'lucide-react';

export default function GetData() {
  // const [data, setData] = useState([])
  // const [isloading, setIsLoading] = useState(true);
  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //     try{
  //       const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //       setData(res.data)
  //     }catch(err){
  //       console.log("Error : ", err);
  //     }finally{
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchData()
  // },[])
  return (
    <div className='flex justify-center '>
      {/* {
        isloading ? <p className='flex justify-center items-center w-full h-[80vh]'>
          <LoaderCircle className={"animate-spin"}/>
          </p> :
        <div className='flex flex-wrap justify-center lg:w-[50rem]'>
        {
          data.map(post=><p className='m-2 w-[25rem]' key={post.id}>
          
            <Card>
              <CardHeader>
                <CardTitle> {post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.body}</p>
              </CardContent>
            </Card>
          </p>)
        }
        </div>
      }
      */}
    </div>
  )
}

