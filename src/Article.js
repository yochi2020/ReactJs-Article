import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Article(props) {
    const [data,setDate]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/admin/article")
        .then(result=>{
            setDate(result.data)
        }).catch(err=>console.log(err))
    },[])
    const result = data.filter(article=>{
        return article._id==props.match.params.id
    })
    return (
        <div className="container mt-4">
            <div className="row">
                {result.map(article=>(
                    article.title
                ))}
                {props.match.params.id}
            </div>
        </div>
    )
}
