import React, {useRef, useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const merge = function(s1, s2) {
    return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("")
}

const UseRef = (props) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    
    const counter = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)


    {/* Controlling every component render
        counter.current = counter.current + 1
    */}

    {/* Controlling component render only when 
        "value1" change
    */}

    useEffect(function() {
        counter.current = counter.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function() {
        counter.current++
        myInput1.current.focus()
    }, [value2])
    

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
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{counter.current}</span>
                    <span className="text">]</span>
                </div>

                <input 
                    type="text" 
                    className="input"
                    ref={myInput1}
                    value={value1} 
                    onChange={e => setValue1(e.target.value)} />
            </div>
            <SectionTitle title ="Ex 02"/>
            <div className="center">
                <input 
                    type="text" 
                    className="input"
                    ref={myInput2}
                    value={value2} 
                    onChange={e => setValue2(e.target.value)} 
                />
            </div>
        </div>
    )
}

export default UseRef
