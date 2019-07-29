export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d3f659099999cb8803f91e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6zziefah',
                  apiId: 'be7ba83e-ab88-43ea-9742-9a492aafb7a4'
                },
                {
                  buildHookId: '5d3f6590063c355019ca3772',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e6jh7gar',
                  apiId: 'd8f5b167-09c3-454f-9791-b9cd9d29136c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cohancarpentier/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-e6jh7gar.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
