import { Button } from "@/components/ui/button"
import { axiosClient } from "../api/axios"

export default function Home() {
  const handleClick = async()=>{
    await axiosClient.post('/login',{email:"fayssal@gmail.com", password:"fayssal@gmail.com"}).then(res=>{
      console.log(res);
      
  }).catch(err=>{
      console.log("err ", err);
  })
  }
  return (
    <div>
      <span onClick={()=>handleClick()}>wta</span>
      {/* <Button>  Click me</Button> */}
    </div>
  )
}
