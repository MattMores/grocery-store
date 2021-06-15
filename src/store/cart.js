import produceData from "../mockData/produce.json"

const  PRODUCE ="cart/PRODUCE"

export const produceCart = (id) => {
    return {

        type: PRODUCE,
        id
    }
};

export const cartReducer = (state={}, action) => {
    switch(action.type){
        case PRODUCE:
            const newState = {
                ...state,
                [action.id]:{id: action.id, count:1}
            }
            return newState

        default:
            return state;
    }
};
