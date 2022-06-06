import {SyntheticEvent, useEffect, useState} from "react";
import axios,{AxiosResponse} from 'axios';

type LaptopInfo ={
    id:number;
    model: number;
    make_year: number;
    operating_system: string;
    screen_height: string;
    screen_width: string;
    price: number;
}

export const Laptop = ()=>{
    const [data,setData]= useState<LaptopInfo[]>([])
    const [form,setForm]= useState({})


    const handleChange=(e: any)=>{
        const inputName =e.target.name;
        setForm({
            ...form,
            [inputName]: e.target.value,
        });
    }
    const handleSubmit=(e: SyntheticEvent)=>{
        e.preventDefault();
        let b: any= form;
        console.log(b)
        sendData(b);

    }
    const sendData=(form: LaptopInfo)=>{
        axios.post("http://localhost:8080/laptop",form).then(getData);
    }

    const getData = ()=>{
        axios.get("http://localhost:8080/laptop").then((res: AxiosResponse<LaptopInfo[]>)=>{
            console.log(res)
            const {data} = res;
            setData(data)
            console.log(data)
        })
    }
    useEffect(()=>{
getData()
},[data])
    // const [mdl,setmdl] = useState("")
    // const [mft,setmft] = useState("")
    // const [os,setos] = useState("")
    // const [sf,setsh] = useState("")
    // const [sw,setsw] = useState("")
    // const [pce,setpce] = useState("")
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-items-center items-center border-black border">
                <div className="flex w-1/3 m-1 justify-between border border-red-600">
                        <div>
                            <label className="mr-2">Id</label>
                        </div>
                        <div>
                            <input onChange={handleChange} type="number" className="border-black border w-40 " name="id"/>
                        </div>
                    </div>
                    <div className="flex w-1/3 m-1 justify-between border border-red-600">
                        <div>
                            <label className="mr-2">Model</label>
                        </div>
                        <div>
                            <input onChange={handleChange} type="number" className="border-black border w-40 " name="model"/>
                        </div>
                    </div>
                    <div className="flex w-1/3 m-1 justify-between border border-red-600">
                        <div>
                            <label className="mr-2">Manufacturing Year</label>
                        </div>
                        <div>
                            <input onChange={handleChange} type="number" className="border-black border w-40 " name="make_year"/>
                        </div>
                    </div>
                    <div className="flex w-1/3 m-1 justify-between border border-red-600">
                        <div>
                            <label className="mr-2">Operating System</label>
                        </div>
                        <div>
                            <input onChange={handleChange} type="string" className="border-black border w-40 " name="operating_system"/>
                        </div>
                    </div>
                    <div className="flex w-1/3 m-1 justify-between border border-red-600">
                        <div>
                            <label className="mr-2">Screen Height</label>
                        </div>
                        <div>
                            <input onChange={handleChange} type="string" className="border-black border w-40 " name="screen_height"/>
                        </div>
                    </div>
                    <div className="flex w-1/3 m-1 justify-between border border-red-600">
                        <div>
                            <label className="mr-2">Screen Width</label>
                        </div>
                        <div>
                            <input onChange={handleChange} type="string" className="border-black border w-40 " name="screen_width"/>
                        </div>
                    </div>
                    <div className="flex w-1/3 m-1 justify-between border border-red-600">
                        <div>
                            <label className="mr-2">Price</label>
                        </div>
                        <div>
                            <input onChange={handleChange} type="number" className="border-black border w-40 " name="price"/>
                        </div>
                    </div>
                    <div className="flex w-20 bg-[#333] text-white m-1 justify-center border border-red-600 hover:bg-white hover:text-black ">
                        
                            <input className="block" type="submit" />
                        
                    </div>
                
                
                </div>
               {data.map((el)=>{
                   return (<div className="flex " key={el.id}>
                       <span> <h2>{el.id }</h2></span>
                       <span> <h2>{el.model }</h2></span>
                       <span> <h2>{el.make_year }</h2></span>
                       <span> <h2>{el.operating_system }</h2></span>
                       <span> <h2>{el.screen_height }</h2></span>
                       <span> <h2>{el.screen_width }</h2></span>
                       <span> <h2>{el.price }</h2></span>
                       
                       </div>)
               })}
            </form>
        </div>
    )
}