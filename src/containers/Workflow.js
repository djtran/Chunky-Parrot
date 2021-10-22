import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'
import Sequence from 'components/Sequence'
import { Container } from 'react-bootstrap'

function Workflow() {
  const { workflow } = useRouteData()
  return (
    <Container className="w-75">
      <Link to="/index">{'<'} Back to Index</Link>
      <br />
      <h1>{workflow.title}</h1>
      <Sequence sequence={workflow.sequence} />
    </Container>
  )
}

export default Workflow
