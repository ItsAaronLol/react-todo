var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value = '';
      //this.props.onAddTodo(todoText);
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }

  },
  render: function(){
    return(
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="Add Todo"/>
          <button className = "button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);


//one is connected to the store and one that isn't. And we can use the one that isn't connected for/
//testing purposes
