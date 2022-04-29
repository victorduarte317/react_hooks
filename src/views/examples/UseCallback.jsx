import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallBackButtons from './UseCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount(current => current + delta)
    }, [setCount]) 
    /* Now, the callback function depends on setCount, and setCount doesnt change.
       Passing the "current" function as a parameter gives it the current value.
       Since the callback function is relying on setCount - that only renders once -
       the app wont re-render everytime the user clicks on a button.
       Instead, it creates a cached version of "setCount" that wont change unless setCount changes.
    */ 
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!"
            />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallBackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
