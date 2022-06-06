import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type todoType = {
    title: string;
    status: boolean;
}
export const Todo = () => {
    const [todo, setTodo] = useState<todoType[]>([]);
    const [text, setText] = useState("");

    useEffect(() => {
        getData();
    }, [])

    const getData = () =>{
        axios.get("http://localhost:8080/todo").then((response:AxiosResponse<todoType[]>)=>{
            const {data} = response;
            setTodo(data);
        });
    }

    return <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />{" "}
        <button onClick={() => {
            const payload = { title: text, status: false };
            axios.post("http://localhost:8080/todo", payload).then(getData);
            // setTodo([...todo, payload])
        }}>Add todo</button>
        {todo.map((el) => {
            return (<div>{el.title}</div>)
        })}
    </div>
}