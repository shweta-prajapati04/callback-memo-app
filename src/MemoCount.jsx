import React, { useMemo, useState } from 'react'

export const MemoCount = () => {
    let [count, setCount] = useState(0);
    const handleCount = useMemo(() => {
       return count * count * count


    }, [count])
    return (
        <>
            <h4>USEMEMO</h4>
            <div className='col-md-3  mx-auto alert alert-danger'>

                {/*<h4>Square:{square}</h4>*/}
                <h4>Cube:{handleCount}</h4>
                <div className='count'>
                    <input type="number" className='form-control'
                        onChange={(e) => setCount(e.target.value)}
                        placeholder='Enter value'></input>
                    <button className='btn btn-dark' onClick={handleCount}>Calculate</button>
                </div>
            </div>
        </>
    )
}
