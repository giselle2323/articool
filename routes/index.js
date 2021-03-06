/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
 const routes = [
  {
    path: '/dashboard', // the url
    icon: 'DashboardIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/components',
    icon: 'ComponentIcon',
    name: 'Component',
  },
  {
    path: '/articles',
    icon: 'ArticleIcon',
    name: 'Article',
  },
  
]

export default routes
