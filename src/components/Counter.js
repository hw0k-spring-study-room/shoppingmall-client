import React from 'react';
import { styled } from 'linaria/react';

const Wrapper = styled.div`
  font-size: 2rem;
  color: var(--oc-gray-8);
`;

const Counter = props => {
  return (
    <div>
      <Wrapper>{props.number}</Wrapper>
      <button onClick={() => props.increment(1)}>+</button>
      <button onClick={() => props.decrement(1)}>-</button>
      <button onClick={() => props.incrementAsync({delay: 1000, number: 1})}>1초 뒤 +</button>
    </div>
  );
};

export default Counter;
