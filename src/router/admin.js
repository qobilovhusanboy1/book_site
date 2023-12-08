export const adminRoutes = {
    path: "/admin",
    component: () => import("../layouts/AdminLayout.vue"),
    children: [
      {
        path: "profile",
        name: "admin-profile",
        component: () => import("../views/admin/ProfileView.vue"),
      },
      {
        path: "users",
        name: "admin-users",
        component: () => import("../views/admin/UsersView.vue"),
      },
      {
        path: "admins",
        name: "admin-admins",
        component: () => import("../views/admin/AdminsView.vue"),
      },
      {
        path: "home",
        name: "admin-home",
        component: () => import("../views/admin/AdminsHome.vue"),
      },
      {
        path:"about",
        name:"admin-about",
        component:()=>import("../views/admin/AdminAbout.vue")
      },
      {
        path:'add-book',
        name:"addbook",
        component:()=>import("../views/admin/AddBook.vue")
      },
      {
        path:'blockusers',
        name:"block-users",
        component:()=>import("../views/admin/BlockUsers.vue")
      }
    ],
  };
  
  