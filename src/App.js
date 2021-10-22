import React from 'react'
import { Root, Head, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

//Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import { Container } from 'react-bootstrap';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Indie+Flower&family=Patrick+Hand&display=swap" rel="stylesheet"/>
      </Head>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/index">Index</Link>
      </nav>
      <Container className="justify-content-center">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Container>
    </Root>
  )
}

export default App
