import path from 'path'
import { promises as fs, readFileSync } from 'fs';

export default {
  paths: {
    public: 'public'
  },
  getRoutes: async () => {
    const dirPath = path.resolve('./public/workflows');
    const wfilenames = await fs.readdir(dirPath);
    const wfiles = [];
    wfilenames.forEach(name => {
      const data = JSON.parse(readFileSync(path.join(dirPath, name), 'utf-8'));
      wfiles.push(data);
    })

    return [
      {
        path: `/index`,
        template: 'src/containers/WorkflowIndex',
        getData: async() => ({
          wfiles
        }),
        children: wfiles.map(workflow => ({
          path: `/workflow/${workflow.title.replace(/\s/g, '-')}`,
          template: 'src/containers/Workflow',
          getData: async () => ({
            workflow
          })
        }))
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
