var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

/*
React-redux:
the provider: the provider lets you provide your store to its children
so components like TodoList, even though they're rendered two components deep,
can still access attributes on the store and use them to render

*/

var TodoApp = require('TodoApp');
// Load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));


$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {/*
      inside of here, we can put any component that we'd like
      to have access to our store. In this case, we're going to render
      the entire application. TodoApp Component aswell as all
      of its children are going to be able to access the data
      on the store, aswell as dispatch actions
    */}
    <TodoApp/>
    {/*
      inside of here, we can put any component that we'd like
      to have access to our store. In this case, we can render
      the entire application
    */}
  </Provider>,
  document.getElementById('app')
);
