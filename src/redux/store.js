import { legacy_createStore as createStore} from 'redux'
const SET_VALUE = "SET_VALUE";

export const setInputValue = (value) => ({
  type: SET_VALUE,
  value: value,
});

const reducer = (state = "", action) => {
  switch (action.type) {
    case SET_VALUE:
      return action.value;
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
