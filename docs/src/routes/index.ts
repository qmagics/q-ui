import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/start"
    },
    {
        path: "/component",
        component: () => import("@/views/component/index.vue"),
        children: [
            {
                path: "button",
                component: () => import("@/views/component/button/index.vue")
            }
        ]
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;