import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Group(props) {
    const [article,setArticle]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/admin/article')
        .then(result=>{
            setArticle(result.data)
        }).catch(err=>console.log(err))
    },[])
    const groupArticle= article.filter(result=>{
        return result.group_name===props.match.params.group
    })
    return (
            <div className="album py-5 bg-light">
                <div className="container">
                <div className="row">
                {groupArticle.map(result=>(
                            
                                <div className="col-md-4" key={result._id}>
          <div className="card mb-4 shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div className="card-body">
              <h4>{result.title}</h4>
                <p className="card-text">{result.content} This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">{result.date_time}</small>
                <Link to={"/article/"+result._id} className="btn btn-sm btn-outline-dark">View</Link>
              </div>
            </div>
          </div>
        </div>


        ))}
                </div>
                </div>
            </div>



    )
}
