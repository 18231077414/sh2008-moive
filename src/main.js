import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//引入elementUI
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI)

Vue.config.productionTip = false;


// 使用懒加载
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad, {
    loading: "https://2url.cc/1OwrB",
});

// 定义事件总线（后续需要使用的）
Vue.prototype.eventBus = new Vue();

//导入vuex的store对象
import store from '@/store/vuex'

//同步一下localStorage数据到Vuex
let _token = localStorage.getItem("_token");
if(_token){
    store.commit("updataToken",_token);
}

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
