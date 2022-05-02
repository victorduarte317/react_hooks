import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    // reducer will get an object on its initial state and,
    // for each action triggered, the objects state evolves by changing its attribute

    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
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
            
                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                </div>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
