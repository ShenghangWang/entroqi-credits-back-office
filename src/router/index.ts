import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layouts/BackOfficeLayout.vue';
import Console from '@/pages/credits-admin/index.vue';
import Pricing from '@/pages/pricing/index.vue';
import Login from '@/pages/back-office-login/index.vue';
import { useAuthStore } from '@/stores/auth';
const router=createRouter({history:createWebHistory('/'),routes:[{path:'/back-office/login',component:Login},{path:'/back-office/recovery',component:Login},{path:'/back-office',component:Layout,children:[{path:'',component:Console},{path:'pricing',component:Pricing}]},{path:'/:pathMatch(.*)*',redirect:'/back-office'}]});
router.beforeEach(async to=>{const auth=useAuthStore();await auth.hydrate();if(!['/back-office/login','/back-office/recovery'].includes(to.path)&&!auth.isLoggedIn)return '/back-office/login';if(to.path==='/back-office/pricing'&&!auth.permissions.includes('pricing:read'))return '/back-office';if(to.path==='/back-office/login'&&auth.isLoggedIn)return '/back-office';return true;});
export default router;
