var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function(){
    var {text, id, completed, createdAt, completedAt} = this.props; //the name matters, order doesn't matter
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
          this.props.onToggle(id);
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

module.exports = Todo;
