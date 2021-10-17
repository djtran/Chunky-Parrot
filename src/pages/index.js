import React from 'react'
import { useSiteData } from 'react-static'

export default function Home() {
  const { workflowDirectory } = useSiteData()
  
  console.log(workflowDirectory);
  const importAll = (r) => r.keys().map(r);
  const files = importAll(require.context("../../public/workflows", true, /.json$/));
  console.log(JSON.stringify(files));

  return <div style={{ textAlign: 'center' }}>
    <h1>Welcome to Chunky Parrot!</h1>
  </div>
} 

