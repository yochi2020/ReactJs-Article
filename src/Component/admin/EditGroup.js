import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function EditGroup(props) {
    const [group,setGroup]=useState({group_name:"",_id:""})

    useEffect(()=>{
      setGroup({group_name:props.match.params.group,_id:props.match.params.id})
    },[])

    const handleChange=(e)=>{
      setGroup({group_name:e.target.value,_id:e.target.name})
    }
    const onSubmitGroup = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3001/admin/group/${group.group_name}/${group._id}`)
        .then(result=>{
          props.history.push("/admin/editdeletegroup")
        }).catch(err=>console.log(err))
      }

    return (
        <div className="col-6 ">
        <h4 className="mb-3">แก้ไข</h4>
        <form onSubmit={onSubmitGroup}>
          <div className="mb-3">
            <input type="text" className="form-control" name={props.match.params.id} placeholder="หมวด"  value={group.group_name} onChange={handleChange} />
            <button className="btn btn-success mt-3 btn-sm">แก้ไข</button>
          </div>
        </form>
        </div>
    )
}
