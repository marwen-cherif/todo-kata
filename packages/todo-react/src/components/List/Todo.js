import React from 'react';

const MarkAs = props => {
  const {handleMarkAs, text} = props;
  return <span onClick={handleMarkAs}>{text}</span>;
};

const Todo = ({title, status, index}) => {
  return (
    <div data-todo="">
      <div>{title}</div>
      <div>
        {status === 'TO_DO' ? (
          <MarkAs data-mark-as={index} text="Check DONE" />
        ) : (
          <MarkAs data-mark-as={index} text="Check TO DO" />
        )}
      </div>
    </div>
  );
};

export default Todo;
