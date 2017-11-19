import React from 'react';

const el = (
  <h1>Hello, from</h1>
)

export default ( props ) => {
  return <div>{el}, {props.name}</div>;
}
