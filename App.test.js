import React from 'react';
import ReactDOM from 'react-dom'; //necessary for rendering the component
import App from './App';
import TheDate from './TheDate';

it('renders without crashing', () => {
  const div = document.createElement('div');  e component into
  ReactDOM.render(<App />, div); //render the component, this is the actual test, if sth is wrong it will fail here
  ReactDOM.unmountComponentAtNode(div);
});
