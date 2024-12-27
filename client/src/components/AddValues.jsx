import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import '../css/addValues.css'
import { useNavigate } from 'react-router-dom'

function AddValues() {


    const [data, setData] = useState({ valuesIcon: '', valuesTitle: '', valuesDescription: '' })

    const navigate = useNavigate()

    async function handle_submit(e) {

        e.preventDefault()

        const { valuesIcon, valuesTitle, valuesDescription } = data

        try {

            const res = await axios.post('http://localhost:8081/createValues', { valuesIcon, valuesTitle, valuesDescription })

            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/")
            }

            else {
                toast.error(res.data.error)
            }

        } catch (error) {
            console.log(error);
        }

    }



    return (
        <>

            <div className='add-vision-container'>

                <div className='add-vision-inner'>

                    <h2>Add Values</h2>

                    <form onSubmit={handle_submit}>

                        <label>Values Icon:</label>
                        <input type="text" placeholder='Enter abbreviation' onChange={(e) => setData({ ...data, valuesIcon: e.target.value })} />
                        <label>Values Title:</label>
                        <input type="text" placeholder='Enter value title' onChange={(e) => setData({ ...data, valuesTitle: e.target.value })} />
                        <label>Values Description:</label>
                        <input type="text" placeholder='Enter value description' onChange={(e) => setData({ ...data, valuesDescription: e.target.value })} />

                        <button type='submit'>Add value</button>

                    </form>


                </div>

            </div>

        </>
    )
}

export default AddValues

