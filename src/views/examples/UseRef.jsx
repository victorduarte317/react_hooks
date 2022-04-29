import React, {useRef, useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = (props) => {
    const [value1, setValue1] = useState('')
    const counter = useRef(0)

    {/* Controlling every component render
        counter.current = counter.current + 1
    */}

    {/* Controlling component render only when 
        "value1" change
    */}

    useEffect(function() {
        counter.current = counter.current + 1
    }, [value1])
    

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title='Ex #01' />
            <div className="center">
                <div>
                    <span className="text">Value: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{counter.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input"
                    value={value1} onChange={e => setValue1(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
