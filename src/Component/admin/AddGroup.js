import React, { useState } from 'react'
import axios from 'axios'
export default function AddGroup(props) {
  const [topic, setTopic] = useState({ topic: "" })
  const onSubmitTopic = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/admin/group',topic)
      .then(result => {
        alert("บันทึกข้อมูลเรียบร้อย")
        props.history.push("/admin/editdeletegroup")
      }).catch(result =>
        console.log(result))
  }
  return (
      <div className="col-6 mx-auto">
      <h4 className="mb-3">เพิ่มหมวด</h4>
      <form onSubmit={onSubmitTopic}>
        <div className="mb-3">
          <input type="text" className="form-control" name="topic" placeholder="หมวด" onChange={(e) => setTopic({ topic: e.target.value })} />
          <button className="btn btn-success mt-3 btn-sm">เพิ่ม</button>
        </div>
      </form>
      </div>

  )
}



