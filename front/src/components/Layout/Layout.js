import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Laoyut = React.memo(({ page, children }) => {
  return (
    <div className="wrapper">
      <Header page={page} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
});
export default Laoyut;
