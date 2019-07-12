const React = require('react');
const ReactDOM = require('react-dom');

const reactElement = (
    <div>
        <h1>Hello world form react.js!!</h1>
        <p>We use JSX!!</p>
    </div>
);
ReactDOM.render(reactElement, document.getElementById('react-app'));
