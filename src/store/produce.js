import produceData from "../mockData/produce.json"

const POPULATE = "produce/POPULATE";

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    };
};
console.log(produceData);
//action = object on 7/8
const produceReducer = (state={}, action )=>{
    switch(action.type){
     case POPULATE:
         const newObject = {};
         action.produce.forEach(produce => {
            newObject[produce.id] = produce;
                // const { id } = produce
                // newObject.push({id: produce})
            });
            return newObject;
        default:
            return state;
    }
};

export default produceReducer
