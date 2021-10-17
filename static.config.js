import path from 'path'
import axios from 'axios'
import data from './public/workflows/example-workflow.json'

export default {
  paths: {
    public: 'public'
  },
  getRoutes: async () => {
    // const { data: posts } = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // )
    var workflow = data;
    console.log(workflow);

    return [
      {
        path: `/test`,
        getData: () => ({
          workflow,
        }),
        template: 'src/containers/Workflow'
      }
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
