import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
export default class App extends React.Component {
  
  render() {

    return(
      <div>
        <Header />
        <Section />
        <Footer />
      </div>
    )
  }
}