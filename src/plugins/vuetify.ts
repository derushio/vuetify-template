import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/src/stylus/app.styl';
import InstantVuetify from 'instant-vuetify-overlays';

Vue.use(Vuetify, {
    iconfont: 'mdi',
    theme: {
        primary: colors.blue.darken2,
    },
});
Vue.use(InstantVuetify);
