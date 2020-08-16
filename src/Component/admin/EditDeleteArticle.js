import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function EditDeleteArticle() {
    const [data, setData] = useState([])
    const [deleteData, setDeleteData] = useState([])
    const handleDelete = (e) => {

        const deleteArticle = async () => {
            await setDeleteData(e.target.name)
            try {
                const result = await axios.delete("http://localhost:3001/admin/article/" + deleteData)
                return result
            } catch (error) {
                console.log(error)
            }
        }
        deleteArticle()
    }
    useEffect(() => {
        axios.get("http://localhost:3001/admin/article")
            .then(result => {
                setData(result.data)
            }).catch(err => console.log(err))
    })
    const dataTable = data.map(result => {
        return <tr key={result._id}>
            <th scope="row">{result.title}</th>
            <td>{result.date_time}</td>
            <td><Link to={"/admin/editarticle/" + result._id} className="btn btn-sm btn-success">Edit</Link> <button className="btn btn-sm btn-danger" name={result._id} onClick={handleDelete}>Delete</button></td>
        </tr>
    })
    return (
        <div className="col-7">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Edit / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTable}
                </tbody>
            </table>
        </div>
    )
}
