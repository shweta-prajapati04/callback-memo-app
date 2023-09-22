import React, { useEffect, useState } from 'react'
import { memo } from 'react';

const Todo = ({ listodo }) => {
    console.log(listodo)
    let [todo, setTodo] = useState([]);
    useEffect(() => {
        setTodo(listodo);
    }, [listodo])
    return (
        <div>
            <div className='col-md-10 mx-auto '>

                {
                    todo.length > 0 &&
                    todo.map((ele, i) => {
                        return (
                            <div key={i}>
                                <h5>{ele}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default memo(Todo)
