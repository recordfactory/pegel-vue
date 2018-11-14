// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import DateFilter from './filters/date';

// eslint-disable-next-line import/prefer-default-export
export const urlTraveBauhof = 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/f4f9f7fb-eeff-46dc-9727-04d8aa56240a/W/measurements.json?start=P1D';

export const urlTravemuende = 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/c7383149-1f77-430d-8bef-c5667be3846b/W/measurements.json?start=P1D';

Vue.config.productionTip = false;
Vue.filter('date', DateFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

Vue.component('heading2', {
  props: ['title', 'subtitle'],
  template: '<div><h2>{{ title }}</h2><h3>{{ subtitle }}</h3></div>',
});

