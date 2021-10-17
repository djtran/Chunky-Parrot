

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404.js'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404.js'
      
const t_1 = universal(import('__react_static_root__/src/pages/index.js'), universalOptions)
      t_1.template = '__react_static_root__/src/pages/index.js'
      
const t_2 = universal(import('__react_static_root__/src/containers/Workflow'), universalOptions)
      t_2.template = '__react_static_root__/src/containers/Workflow'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404.js': t_0,
'__react_static_root__/src/pages/index.js': t_1,
'__react_static_root__/src/containers/Workflow': t_2
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404.js"
