import React, { useState } from 'react'
import TutorialService from '../services/tutorial.service';

const AddTutorial = () => {
    const initialState = {
        id: null,
        title: '',
        description: '',
        published: false,
    }
    const [tutorial, setTutorial] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        setTutorial({
            ...tutorial,
            [event.target.name]: event.target.value
        })
    }

    const saveTutorial = () => {
        var data = {
            title: tutorial.title,
            description: tutorial.description,
        }
        TutorialService.create(data).then(res => {
            setTutorial({
                id: res.data.id,
                title: res.data.title,
                description: res.data.description,
                published: res.data.published,
            })
            setSubmitted(true)
        }).catch(e => {
            console.log(e)
        })
    }
    const newTutorial = () => {
        setTutorial(initialState)
        setSubmitted(false)
    }
    return (
        <div className='submit-form'>{
            submitted ? (
                <div>
                    <h2>Tutorial Added</h2>
                    <button onClick={newTutorial} className='btn btn-success'>Add</button>
                </div>
            ) : (
                <div>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' className='form-control' name='title' value={tutorial.title} onChange={handleInputChange} required />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input type='text' className='form-control' name='description' value={tutorial.description} onChange={handleInputChange} required />
                    </div>

                    <button onClick={saveTutorial} className='btn btn-success'>Submit</button>
                </div>
            )
        }</div>
    )
}

export default AddTutorial;