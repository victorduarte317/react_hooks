import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {

    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        break

        case 'numberMultiplyBy7':
            return {...state, number: state.number * action.payload }
        break

        case 'numberDivBy25':
            return {...state, number: state.number / action.payload }
        break

        case 'Int': 
            return {...state, number: parseInt(state.number) }
        break

        case 'numberAddN':
            return {...state, number: state.number + action.payload }
        break

        case 'login':
            return {...state, user: { name: action.payload } }
        break

        default: return state
    }

}

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
                        onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                    </div>
            
                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
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
