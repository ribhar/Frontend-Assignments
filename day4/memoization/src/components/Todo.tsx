import { useCallback, useState } from "react";
import { MemoisedSingleItem } from "./SingleTem";
import styles from './Todo.module.css';

export type listType = {
    id: number;
    title: string;
    body: string;
    verify: boolean;
}

const Todo = () => {
   const [title,setTitle] = useState("");
   const [body,setBody] = useState("");
   const [list,setList] = useState<listType[]>([]);

   const handleToggle = (id: number)=>{
    console.log("Hllo")
        setList(list.map((l)=> l.id===id? {...l,verify:!l.verify}: l))
   }

   const callback = useCallback(handleToggle,[list])

  return (
      <>
    <div className={styles.container}>
        <input type="text" onChange={(e:any)=>setTitle(e.target.value)} />
        <textarea onChange={(e:any)=>setBody(e.target.value)} />
        <button onClick={()=>{
            const payload: listType = {
                id: Math.random(),
                title: title,
                body: body,
                verify: false
            }
            setList([...list,payload])
        }}>Submit</button>
    </div>
        <div>{list.map((item)=>{
            return <MemoisedSingleItem key={item.id} {...item} handleToggle={callback}/>
        })}</div>
    </>
  )
}

export default Todo