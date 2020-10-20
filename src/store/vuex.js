//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

//在vue中使用vuex
Vue.use(Vuex)

//创建Store对象用于存储数据
export default new Vuex.Store({
    mutations: {
        add: function(state, step) {
            state.count += step;
        },
        setCity: function(state, cityName) {
            state.city = cityName;
        },
        updateToken: function(state, _token) {
            state._token = _token;
            localStorage.setItem("_token", _token);
        },
        // ....
    },
});