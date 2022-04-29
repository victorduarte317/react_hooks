import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFactorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if (n === 0) return 1

    return calcFactorial(n - 1) * n
}

function evenOrOdd(num) {
    const n = parseInt(num)
    if (n % 2 == 0) return 'Even'
    else return 'Odd'
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [status, setStatus] = useState("Odd")

    useEffect(function() {
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(function() {
        setStatus(evenOrOdd(number))
    }, [number])

    useEffect(function(){
        if(factorial > 1000000) {
            document.title = 'Ouch!'
        } else {
            document.title = 'React app'
        }
    })

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <div className='center'>
                <div>
                    <span className="text">{number} Factorial: </span>
                    <span className="text red">{factorial === -1 ? 'Doesnt exist' : factorial}</span>
                </div>

                <input type="number" className="input"
                    value={number} onChange={e => setNumber(+e.target.value)}
                />
            </div>

            <SectionTitle title='useEffect Challenge #01 - Even or Odd' />
            <div className="center">
                <span className="text">{number} is </span>
                <span className="text red">{status}</span>
            </div>
        </div>
    )
}

export default UseEffect
