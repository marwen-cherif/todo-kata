import React, {Component} from 'react';

import v4 from 'uuid';
import Todo from './Todo';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const {todos} = this.props;
    return (
      <div>
        {todos.map(({title, status}, index) => (
          <Todo key={v4()} title={title} status={status} index={index} />
        ))}
        <span data-add-todo="">Add</span>
      </div>
    );
  }
}

List.propTypes = {
  todos: PropTypes.array,
};

List.defaultProps = {
  todos: [],
};

export default List;
