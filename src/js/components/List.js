import React from "react";
import { connect } from "react-redux";
import { isError } from "../actions/index";


const mapStateToProps = state => {
  return { articles: state.articles,
            error:  state.error};
};

function mapDispatchToProps(dispatch) {
  return {
    isError: error => dispatch(isError(error))
  };
}

const ConnectedList = ({ articles, error }) => (
  <div>
  <ul>
    {articles.map(el => (
      <li key={el.id}>{el.title}</li>
    ))
    }
  </ul>
  <p>{(error) ? "ERROR" : ""}</p>
  </div>
);

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;