export function numberReducer(state, action) {

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

        default: return state
    }

}