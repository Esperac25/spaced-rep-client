import React from 'react';

export function WordList(props) {
  const { word } = props;
  const { correct_count, incorrect_count } = props.word;
  return (
    <li>
      <h4 className='item'>{word.original}</h4>
      <br></br>
      <span className='item-span'>
        <div>correct: {correct_count}</div>
        <div>incorrect: {incorrect_count}</div>
      </span>
    </li>
  );
}

