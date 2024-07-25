import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './mycomponents/Header/Header'
import Body from './mycomponents/Body/Body'
import Footer from './mycomponents/Footer/Footer'
import Quote from './mycomponents/Quotes/Quote'
import Restaurant from './mycomponents/Restaurant/Restaurant.jsx'


const App = () => {
  return (
      <Router>
          <div>
              <Header />
              <Routes>
                  <Route path="/" element={<Body />} />
                  <Route path="/quote" element={<Quote />} />
                   <Route path="/Restaurant" element={<Restaurant />} />
                  {/*<Route path="/foods" element={<Foods />} />
                  <Route path="/contact" element={<Contact />} /> */}
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;