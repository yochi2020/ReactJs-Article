import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Article(props) {
    const [data, setDate] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/admin/article")
            .then(result => {
                setDate(result.data)
            }).catch(err => console.log(err))
    }, [])
    const result = data.filter(article => {
        return article._id == props.match.params.id
    })
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    
                    {result.map(article => (
                        <div className="card bg-light">
                            <div className="card-header">
                                <h5 className="card-title">{article.title}</h5>
                            </div>
                            <div className="card-body">
                                {article.content}
                            </div>
                            <div className="card-footer text-muted">
                                {article.date_time}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
