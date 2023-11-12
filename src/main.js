import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
