export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec283d711ca370dc2ed9c0f',
                  title: 'Sanity Studio',
                  name: 'project-test-studio',
                  apiId: 'fb8695d1-7b26-4493-92df-4cf9339bb929'
                },
                {
                  buildHookId: '5ec283dc7e4135610615b7ad',
                  title: 'Blog Website',
                  name: 'project-test-web',
                  apiId: '53d2f4bb-bf70-4ed6-ac57-867e8d2aca6d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lfelipevalerios/project-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://project-test-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
