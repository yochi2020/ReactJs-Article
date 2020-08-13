import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function EditDeleteGroup() {
    const [group, setGroup] = useState([])
    const [idGroup,setIdGroup]=useState({_id:""})
    const deleteClick=  (e)=>{
        setIdGroup({_id:e.target.name})
        async function deleteGroup(){
            try {
                const result = await axios.delete("http://localhost:3001/admin/group/"+idGroup._id)
                return result
            } catch (error) {
                console.log(error)
            }
        }
        deleteGroup()
    }
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
    },[idGroup])
    return (
        <div className="col-6">
            <table className="table table-bordered bg-light">
                <thead>
                    <tr>
                        <th >Group_Name</th>
                        <th >Edit/Delete</th>
                    </tr>
                </thead>
                {
                group.map(result=>{
                   return  <tbody key={result._id}>
                                <tr>
                                    <th>
                                        {result.group_name}
                                        </th>
                                    <td>
                                        <button className="btn btn-sm btn-success mr-3">Edit</button>
                                        <button className="btn btn-sm btn-danger" name={result._id} onClick={deleteClick}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                })
                }
            </table>
        </div>
    )
}
