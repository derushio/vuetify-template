import Vue from 'vue';

Vue.prototype.$vdialog = {
    open: () => null,
    alert: () => null,
    confirm: () => null,
    prompt: () => null,
};

Vue.prototype.$vsnackbar = {
    open: () => null,
    alert: () => null,
};

Vue.prototype.$vprogress = {
    circular: () => null,
    circularLoading: () => null,
    circularProgress: () => null,
    circularTimer: () => null,
};
