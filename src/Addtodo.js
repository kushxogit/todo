import React, { useState } from 'react'

const Addtodo = (props) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank")
        }

        else {
            props.addTodo(title, desc)
            settitle("")
            setdesc("")
        }

    }
    return (
        <div className='container my-3'>
            <h3>Add a todo</h3>

            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="todoText" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="form-control" id="todoText" />
                </div>
                <div className="mb-3">
                    <label htmlFor="todoDesc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => setdesc(e.target.value)} className="form-control" id="todoDesc" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>


        </div>
    )
}

export default Addtodo
