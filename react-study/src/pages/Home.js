import React from 'react';

const Home = () => {
  const count = 1;
  return (
    <div>
      <h2>201111 스터디</h2>
      {
        count == 1 ? <h2>count 값 {count}</h2> : <h2>count 값 {count} 1아님</h2>
      }
    </div>
  )
}

export default Home;