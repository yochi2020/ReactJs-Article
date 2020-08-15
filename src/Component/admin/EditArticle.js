import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function EditArticle(props) {
    const [data, setData] = useState([])
    const [group,setGroup]=useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/admin/article/"+props.match.params.id)
            .then(result => {
                setData(result.data)
            }).catch(err => console.log(err))

            axios.get("http://localhost:3001/admin/group")
            .then(result => {
                setGroup(result.data)
            }).catch(err => console.log(err))
    }, [])

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
    }
    return (
        <div className="col-7">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <select name="group" className="form-control">

                    </select>
                </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="">Title</label>
                            <input type="text" className="form-control" name="title" value={data.title} />
                        </div>

                        <div className="from-group">
                            <label>Detail</label>
                            <textarea className="form-control" name="detail" cols="30" rows="10" value={data.content}>
                               
                            </textarea>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success mt-3">submit</button>
                        </div>
                    </div>
            </form>
        </div>
    )
}
