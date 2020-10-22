export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f9182a7a6a5b50131ed8eec',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sinkkk-studio',
                  apiId: '88e03831-3de0-4b28-9781-8a7ef48793e5'
                },
                {
                  buildHookId: '5f9182a7441f3e0882dc4230',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sinkkk',
                  apiId: '81174651-dd1d-4599-b9ad-8bfe708fceef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/berserk216/sanity-kitchen-sinkkk',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sinkkk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
