import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?
                <span className="text">{state.user.name}</span>
                : <span className="text">No user.</span>
            }

                <span className="text">{state.number}</span>
                    <div>
                        <button className="btn"
                        onClick={() => numberAdd2(dispatch)}>+2</button>
                    </div>
            
                <div>
                    <button className="btn"
                    onClick={() => login(dispatch, 'João')}>Login</button>
                </div>

                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberMultiplyBy7', payload: '3'})}>x7</button>
                </div>

                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberDivBy25', payload: '5'})}>/25</button>
                </div>

                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'Int' })}>Int</button>
                </div>

                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberAddN', payload: -9 })}>-9</button>
                </div>

                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberAddN', payload: +11 })}>+11</button>
                </div>

            </div>
        </div>
    )
}

export default UseReducer
