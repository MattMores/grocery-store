import produceData from "../mockData/produce.json"

const POPULATE = "produce/POPULATE";

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    };
};

const produceReducer = (state={}, action )=>{
    switch(action.type){
        default:
            return state
    }
};

export default produceReducer
