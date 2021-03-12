const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// action
function buycake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}
function buyicecream(){
    return {
        type: BUY_ICECREAM,
        info: 'FIRST Redux Action'
    }
}

// (previousState, action) => new State
// reducer
const cakeinitialState = {
    numberOfCake:10
}
const iceCreaminitialState = {
    numberOfIcecream:10
}

const cakereducer = (state = cakeinitialState,action) => {
switch(action.type)
  {
    case BUY_CAKE: return{
        ...state,
        numberOfCake: state.numberOfCake-1
    }
    default: return state;
  }
}
const iceCreamreducer = (state = iceCreaminitialState,action) => {
    switch(action.type)
      {
        case BUY_ICECREAM: return{
            ...state,
            numberOfIcecream: state.numberOfIcecream-1
        }
        default: return state;
      }
    }
// store
const rootReducer = redux.combineReducers({
    cake:cakereducer,
    iceCream:iceCreamreducer
})
const store = createStore(rootReducer);
console.log('Initial State',store.getState());
const unsubscribe = store.subscribe(() => console.log('updated State',store.getState()));
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyicecream());
unsubscribe();