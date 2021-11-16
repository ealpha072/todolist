import React from 'react'

const CreateTodo = () => {
    return (
        <div className={"row"}>
            <div className={"col-lg-10 col-md-10 col-sm-12 col-sm-12"}>
                <form>
                    <div className={"form-group row"}>
                        <label className="col-sm-2 col-form-label">New Todo</label>
                        <div className={"col-sm-8"}>
                            <input type="text" className={"form-control"} placeholder="Add Todo..."/>
                        </div>
                        <div className={"col-auto"}>
                            <button className={"btn btn-primary"}>+ Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo