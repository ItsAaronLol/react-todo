var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function(){
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props; //the name matters, order doesn't matter
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    //{text}: get the text
    //{id}: get the id
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }
    return (
      <div className={todoClassName} onClick={() => {
        //  this.props.onToggle(id);
          dispatch(actions.toggleTodo(id));
        }}>
        <div>
            <input type="checkbox" checked={completed}/>
        </div>
        <div>
        <p>{text}</p>
        <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

//sets it as the default
//module.exports =
export default connect()(Todo);

//connect Todo component to our store

/*
Todo will need access to dispatch
By calling connect, we already have access to it
It will be available on our props
*/
