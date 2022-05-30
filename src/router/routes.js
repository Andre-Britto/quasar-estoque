const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'loginDefault',
        component: () => import('pages/Account/Login.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/Account/Login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('pages/Account/Register.vue')
      },
      {
        path: 'email-confirmation',
        name: 'email-confirmation',
        component: () => import('pages/Account/EmailConfirmation.vue')
      },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: () => import('pages/Account/ForgotPassword.vue')
      },
      {
        path: 'reset-password',
        name: 'reset-password',
        component: () => import('pages/Account/ResetPassword.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'me',
        name: 'me',
        component: () => import('pages/Account/Me.vue')
      }
      // { path: 'category', name: 'category', component: () => import('pages/category/List.vue') },
      // { path: 'form-category/:id?', name: 'form-category', component: () => import('pages/category/Form.vue') },
      // { path: 'product', name: 'product', component: () => import('pages/product/List.vue') },
      // { path: 'form-product/:id?', name: 'form-product', component: () => import('pages/product/Form.vue') },
      // { path: 'form-config/:id?', name: 'form-config', component: () => import('pages/config/Form.vue') }
      // { path: '', component: () => import('pages/Index.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*'
    // component: () => import('pages/Error404.vue')
  }
]

export default routes
