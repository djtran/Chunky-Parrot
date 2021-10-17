import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'
import Sequence from 'components/Sequence'

function Workflow() {
  const { workflow } = useRouteData()
  return (
    <div>
      <Link to="/">{'<'} Back</Link>
      <br />
      <h1>{workflow.title}</h1>
      <Sequence sequence={workflow.sequence} />
    </div>
  )
}

export default Workflow
