import React, { useEffect, useState } from 'react'
import '../css/editValues.css'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'

function EditValues() {



    const [data, setData] = useState({ valuesIcon: '', valuesTitle: '', valuesDescription: '' })

    const { id } = useParams()

    const naviagte = useNavigate()

    async function handle_update(e) {

        e.preventDefault()

        const { valuesIcon, valuesTitle, valuesDescription } = data

        try {

            const res = await axios.put('https://fullstack-kwanosportsclub-app-backendd.onrender/updateValues', { id, valuesIcon, valuesTitle, valuesDescription })

            if (res.data.success) {
                toast.success(res.data.message)
                naviagte("/")
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }



    async function handle_fetch_values_by_id(id) {

        try {

            const res = await axios.get(`https://fullstack-kwanosportsclub-app-backendd.onrender/getValuesById?id=${id}`)

            if (res.data.success) {
                setData(res.data.data.values)
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {

        handle_fetch_values_by_id(id)
        window.scrollTo(0, 0)

    }, [id])

    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])

    return (


        <div className='edit-values-container'>

            <div className='edit-values-inner'>

                <h2>Edit Values</h2>

                <form onSubmit={handle_update}>

                    <label>Values Icon:</label>
                    <input type="text" placeholder='Enter abbreviation' value={data.valuesIcon} onChange={(e) => setData({ ...data, valuesIcon: e.target.value })} />
                    <label>Values Title:</label>
                    <input type="text" placeholder='Enter value title' value={data.valuesTitle} onChange={(e) => setData({ ...data, valuesTitle: e.target.value })} />
                    <label>Values Description:</label>
                    <textarea name="" id="" rows={10} cols={10} value={data.valuesDescription} onChange={(e) => setData({ ...data, valuesDescription: e.target.value })}></textarea>
                    <button className='btnUpdateValues' type='submit'>Update values</button>

                </form>


            </div>

        </div>
    )
}

export default EditValues
