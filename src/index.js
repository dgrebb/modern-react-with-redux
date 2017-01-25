import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyDQS0SXXljYE3XBMLh8UtYqDgZSRXMELfE';

// latest lesson: https://www.udemy.com/react-redux/learn/v4/t/lecture/4288066

// Create a new component. This component
// should produce some HTML.

const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
  );
}

// Insert the component into the the DOM.
ReactDOM.render(
  <App />,
  document.querySelector(".container")
);
