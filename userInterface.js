import React from 'react';
import Navbar from './navbar';
import UserDestination from './destinaiton';
// import UserInput from '../userInput';
import MyComponent from '../connections';

const UserInterface = () => {
  return (
    <>
      <Navbar />
      <MyComponent />
      <UserDestination />
    </>
  );
};

export default UserInterface;

