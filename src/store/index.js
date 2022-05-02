import { reducer } from './reducers'
import { numberAdd2 } from './actions/numberManagement'


const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export {
    initialState,
    reducer,
}

