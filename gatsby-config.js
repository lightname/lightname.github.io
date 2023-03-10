module.exports = {
  siteMetadata: {
    title: 'The Dev Note',
    description: `The Dev Note`,
    author: 'S.Kane',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: false,
        showDescriptionInSidebar: true,
        showDate: true,
        // gitRepoContentPath: 'https://github.com/mrmartineau/gatsby-starter-code-notes/tree/master/notes',
        openSearch: {
           siteShortName: `The Dev Note`,
           siteUrl: 'http://localhost:8000',
           siteTags: 'code',
           siteContact: 'http://localhost:8000',
           siteDescription:
             'The Dev Note',
        },
      },
    },
  ],
}
