const initialState = {
    data: []
}

const storeReduce = (state = initialState, action) =>{
    switch(action.type) {
        case 'GET_DATA':
            console.log(state);
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default storeReduce