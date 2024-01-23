// import React from 'react'
// import MyNavbar from '../components/MyNavbar'
// import MyFooter from '../components/MyFooter'
// import MyMainHomePage from '../components/MyMainHomePage'

// export default function HomePage() {
//   return (
//     <>
//       <MyNavbar />
//       <MyMainHomePage />
//       <MyFooter />
//     </>
//   )
// }

import React from 'react';
import MyNavbar from '../components/MyNavbar';
import MyFooter from '../components/MyFooter';
import MyMainHomePage from '../components/MyMainHomePage';

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <MyMainHomePage />
      <MyFooter />
    </>
  );
};

export default HomePage;