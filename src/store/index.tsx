import { createStore } from 'redux'

const INITIAL_STATE = {
    active: null,
    menu: [
        {id: 1, title: 'Home', rote: ''},
        {id: 2, title: 'Serviços', rote: 'servicos'}
    ]
}

function reducer(state = INITIAL_STATE, action: any) {

    if (action.type === 'SET_MENU') {
        return {
            ...state,
            active: action.menu
        }
    }

    return state
}

const store = createStore(reducer)

export default store