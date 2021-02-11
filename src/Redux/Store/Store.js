const { createStore } = require("redux");
const { default: cardReducers } = require("../Reducers/cartReducer");

export const store = createStore(cardReducers);