import { createRouter, createWebHistory } from 'vue-router'
import auth from '../middileware/auth'
import AccountComponent from "@/components/AccountComponent"

const routes = [
    {
    name: 'Account',
    path: '/',
    component: AccountComponent,
    meta: {
        moddleware: [auth]
    }
  }];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass:'active',
    routes
})

function nextFactory(context, middleware, index) {

  const subsequentMiddleware = middleware[index]
    if(!subsequentMiddleware) {
        return context.next;
    }

    return (...parameters) => {
        context.next(...parameters);
        const nextMiddleware = nextFactory(context, middleware, index + 1)
        subsequentMiddleware({...context, next: nextMiddleware()})
    }
}

router.beforeEach((to, from, next) => {
    if(to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware ? to.meta.middleware : [to.meta.middleware]);
        const  context = (from, next, router, to)
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({...context, next: nextMiddleware})
    }
     return next();
})

export default router