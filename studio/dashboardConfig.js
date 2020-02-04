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
                  buildHookId: '5e399cd80aeeccae2824c73d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-69ji48b7',
                  apiId: 'bebfde43-523a-4d67-a91c-44871c1bb5dd'
                },
                {
                  buildHookId: '5e399cd8e4730cb9cbd43573',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-81uhbg7i',
                  apiId: '013fb717-75f2-4720-a0aa-76fb37a7c019'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sferg989/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-81uhbg7i.netlify.com', category: 'apps' }
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
