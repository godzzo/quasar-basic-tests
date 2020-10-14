const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'table', component: () => import('pages/Table.vue') },
      { path: 'tab', component: () => import('pages/Tab.vue') },
      { path: 'foo', component: () => import('pages/Foo.vue') }
    ]
  },

  // Always leave this as last one
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
