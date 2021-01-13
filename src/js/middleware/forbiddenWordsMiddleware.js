import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

const forbiddenWordsMiddleware = (store) => (next) => (action) => {
      // do your stuff  
      if (action.type === ADD_ARTICLE) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
          return store.dispatch({ type: "FOUND_BAD_WORD", error: true });
        }
      }
      // o método next passando para ele a action atual, 
      // deixa a action seguir seu fluxo, até o próximo middleware 
      //ou até o Root Reducer.
      return next(action);
    };

  export default forbiddenWordsMiddleware