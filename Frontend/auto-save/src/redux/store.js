import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import blogReducer from './reducers';


const rootReducer = combineReducers({
  blogs: blogReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

