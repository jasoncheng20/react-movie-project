/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import HomePage from './pages/HomePage/HomePage'
import CriticsPage from './pages/CriticsPage/CriticsPage'

import '../../styles/styles.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App(props) {
  return (
    <ChakraProvider>
      <div className="app-wrapper">
        <Helmet defaultTitle="Everyone's a critic">
          <meta name="description" content="React Movie Reviews" />
        </Helmet>

        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} exact />
          <Route path="/home" component={HomePage} />
          <Route path="/critics" component={CriticsPage} />
        </Switch>
        <Footer />
      </div>
    </ChakraProvider>
  )
}
