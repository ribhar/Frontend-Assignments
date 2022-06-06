import { useEffect, useState } from "react"

export const useTimeout =(delay:number)=>{
 const [toshow,setTOShow]= useState(false);

 useEffect(()=>{
     let id = setTimeout(()=>{
         setTOShow(true);
     },delay*1000);
     return ()=> clearTimeout(id);
 },[])

return toshow;

}