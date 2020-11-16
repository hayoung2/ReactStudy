import React from 'react';
import PropsTest from './PropsTest';
import ClassTest from './ClassTest';

const User = () => {
  const value = "userPage ";
  return (
    <div>
      <h2>User Page</h2>
      <PropsTest name="33">{value}값 전달 됐다</PropsTest>
      <ClassTest user="이하영" age="23" >classTest 내용</ClassTest>
    </div>
  )
}

export default User;