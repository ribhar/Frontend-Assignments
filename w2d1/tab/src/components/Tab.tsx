import React, { useState } from 'react'
import styles from './Tab.module.css';

type dataType = {
    data: { title: string; desc: string }[];
}

const Tab = ({ data }: dataType) => {
    const [show, setShow] = useState(0);
    const handleShow = (index: number) => {
        setShow(index)
    }

    return (
        <div style={{ margin: "10px" }}>
            <div style={{ display: "flex" }}>
                {data.map((el, ind) => {
                    return (
                        <div style={{ cursor: "pointer", margin: "10px" }} className={ind === show ? styles.borderB : ""} onClick={() => handleShow(ind)} key={ind}>
                            {el.title}
                        </div>
                    )
                })}
            </div>
            <div style={{ display: "flex" }}>
                {data.map((el, ind) => {
                    if (show === ind) {
                        return (
                            <div style={{ margin: "10px" }} key={el.title}>
                                {el.desc}
                            </div>
                        )
                    }
                    return false;
                })}

            </div>

        </div>


    )
}

export default Tab
