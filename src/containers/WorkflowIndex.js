import React from 'react'
import { Link } from 'components/Router'
import { useRouteData } from 'react-static'

export default function WorkflowIndex() {
  const { wfiles } = useRouteData()

  console.log(wfiles);
  wfiles.map((workflow) => {
    console.log(workflow.title)
  })
  return <div style={{ textAlign: 'center' }}>
    <h1> Workflows </h1>
    <ul className="no-bullets">
      {wfiles.map((workflow) => {
        return <li><Link to={`/index/workflow/${workflow.title.replace(/\s/g, '-')}`}>{workflow.title}</Link></li>
      })}
    </ul>
  </div>
} 

