import React,{useState} from "react";
import './index.css'
const Question = ({title,info})=>{
    const [show,setShow] = useState(false)
    return(
        <article className="wrapper">
            <div className="single-question">
                <div className="flex-container">
                    <h3>{title}</h3>
                    <button onClick={()=> setShow(!show)}>
                        {show? '-' : '+'}
                    </button>
                </div>
                <p>{
                    show ? info : ''
                }</p>
            </div>
        </article>
    )
}

export default Question