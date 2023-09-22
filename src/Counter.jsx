import React, { useCallback, useState } from 'react'
import Todo from './todo';

export const Counter = () => {
    let [count, setCount] = useState(0);
    let [listodo, setlisTodo] = useState([]);
    let [task, setTask] = useState("");
    const handleCount = () => {
        setCount(count + 1);
    }
    const add = useCallback(() => {
        setlisTodo([...listodo,task])
    }, [listodo,task])
    return (
        <>
        <div className='col-md-10 mx-auto'>
        <h4>USECALLBACK</h4>
            <div className='divflex'>

                <div className='col-md-5  mx-auto alert alert-info'>
                    <h4>COUNTER</h4>
                    {/*<h4>Square:{square}</h4>*/}
                    <h4>{count}</h4>
                    <div className='count'>

                        <button className='btn btn-dark' onClick={handleCount}>+</button>
                    </div>

                </div>

                <div className='col-md-5  mx-auto alert alert-info'>
                    <h4>TODO</h4>
                    <input type="text"
                        onChange={(e) => setTask(e.target.value)}
                        placeholder='Todo'></input>
                    <button onClick={add} className='btn btn-dark'>Add</button>
                </div>
            </div>
            <div >
                <Todo listodo={listodo} />
            </div>
            </div>
        </>
    )
}
