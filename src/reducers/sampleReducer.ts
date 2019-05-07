const defaultState = {}

const reducers = {}

export default function reducer(state = defaultState, action) {
    return !!reducers[action.type] ?
        reducer[action.type](state, action) :
        state
}
