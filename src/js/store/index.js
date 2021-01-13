
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import  forbiddenWordsMiddleware from "../middleware/forbiddenWordsMiddleware";
import  fazerLog from "../middleware/fazerLog";

const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware, fazerLog)
  );

export default store;