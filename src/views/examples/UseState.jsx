import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    {/* Controlled components are linked to a state, 
    in a way that in order to change the value on a graphic UI, 
    you need to change the component's state before.

    Usually, an event is triggered - like onClick, for example -
    then the state changes, then the graphic UI updates.
    */}

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="#01"/>
            <div className="center">
                <span className="text">{count}</span>

                <div> {/* place the buttons side by side */}
                    <button className="btn"
                    onClick={() => setCount(count-1)}>-1</button>
                    <button className="btn"
                    onClick={() => setCount(count+1)}>+1</button>
                    <button className="btn"
                    onClick={() => setCount(current => current + 1000)}>+1000</button>
                </div>

            </div>
            <SectionTitle title="#02"/>
            <input type="text" className="input"
                value={name} onChange={e => setName(e.target.value)}
            />

            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
