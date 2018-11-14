// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import DateFilter from './filters/date';

Vue.config.productionTip = false;
Vue.filter('date', DateFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

Vue.component('heading1', {
  props: ['title'],
  template: '<h2>{{ title }}</h2>',
});
