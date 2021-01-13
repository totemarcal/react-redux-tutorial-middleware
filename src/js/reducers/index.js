import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
  articles: [],
  error: false
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    //state.articles.push(action.payload);
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload),
            error: false
        });
  }else if (action.type === FOUND_BAD_WORD) {
        return { ...state, error: action.error}
  }
  return state;
}

export default rootReducer;