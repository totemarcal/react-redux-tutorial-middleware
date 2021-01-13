import React, { useState } from "react";
import { addArticle } from "../actions/index";
import {useSelector, useDispatch} from 'react-redux'


function Form (){
  const [title, setTitle] = useState('')
  const articles = useSelector(state => state.articles)
  const error = useSelector(state => state.error)

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setTitle(event.target.value );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addArticle({ title }));
    setTitle("")
  }
  
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
}

export default Form;