import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:()=>('./views/home/Home'),
        children:[
			{	//Home加载后，HomeRight要做为它的子路由加载，但是并没对应的地址，所以path就为空
				path:"",
				component:()=>import('./views/home/HomeRight'),
			},
		]
    },
    {
        path:'/login',
		component:()=>import('./views/Login'),
        beforeEnter(to,from,next){	//如果是已登录的状态进入到这个组件，就让它跳转到首页
			if(localStorage.getItem('order:isLogin')!=null){
				//登录状态，跳转到首页
				next('/');
			}else{
				next();
			}
		}
    },
]

const router = new VueRouter({
    routes,
})

export default router