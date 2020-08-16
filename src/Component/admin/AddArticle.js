import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function AddArticle(props) {
    const [group, setGroup] = useState([])
    const [groupName,setGroupName]=useState()
    const [title,setTitle]=useState()
    const [detail,setDetail]=useState()
    useEffect(() => {
        async function getGroup() {
            try {
                const result = await axios.get("http://localhost:3001/admin/group")
                setGroup(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        getGroup()
    }, [group]);
    const changeGroupName=(e)=>{
        setGroupName(e.target.value)
    }
    const changeTitle=(e)=>{
        setTitle(e.target.value)   
    }
    const changeDetail=(e)=>{
        setDetail(e.target.value)
    }
    const submit=(e)=>{
        e.preventDefault()
        const data = {
            group_name:groupName,
            title:title,
            detail:detail
        }
        axios.post("http://localhost:3001/admin/article",data)
        .then(result=>{
            props.history.push("/admin/editdeletearticle")
        }).catch(result=>{
            console.log(result)
        })
    }
    return (
        <div className="col-7">
            <form onSubmit={submit}>
                <div className="form-group">
                    <select className="form-control" name="group" onChange={changeGroupName}>
                        <option> Change Group</option>
                        {group.map(result=>{
                            return <option key={result._id} value={result._id}>{result.group_name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" name="title" onChange={changeTitle}/>
                </div>
                <div className="from-group">
                    <label htmlFor="Content">Detail</label>
                    <textarea className="form-control" name="detail"  cols="30" rows="10" onChange={changeDetail}>

                    </textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-success mt-3">submit</button>
                </div>
            </form>
        </div>
    )
}
