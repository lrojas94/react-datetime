var DateTime = require('../DateTime.js');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(DateTime, {
    dateFormat: true,
    timeFormat: false,
    closeButton: true,
  }),
  document.getElementById('datetime')
);
