import React, {Component} from 'react';
import styled, {withTheme} from 'styled-components';

import v4 from 'uuid';
import Todo from './Todo';
import PropTypes from 'prop-types';

const AddStyled = styled.span`
  color: ${({theme}) => theme.colors.primary};
`;

class List extends Component {
  render() {
    const {todos} = this.props;
    return (
      <div>
        {todos.map(({title, status}, index) => (
          <Todo key={v4()} title={title} status={status} index={index} />
        ))}
        <AddStyled {...this.props} data-add-todo="">
          Add
        </AddStyled>
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

const enhancedList = withTheme(List);

export default enhancedList;
