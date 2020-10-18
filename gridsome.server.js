// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/Social/:name',
      component: './src/templates/UserDetail.vue'
    })
    createPage({
      path: '/Blog/:id',
      component: './src/templates/BlogDetail.vue'
    })
    createPage({
      path: '/BlogAE/:id',
      component: './src/templates/BlogAddEdit.vue'
    })
    createPage({
      path: '/Project/:name',
      component: './src/templates/ProjectDetail.vue'
    })
  })
}
