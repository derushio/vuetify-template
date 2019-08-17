<template lang='pug'>
v-app#app
    v-navigation-drawer(app temporary v-model='drawer')
    v-app-bar(app color='primary' dark height='54px')
        v-app-bar-nav-icon.hidden-sm-and-up.nav-icon(@click.stop='drawer = !drawer')
        v-toolbar-title {{ appName }}
        v-spacer

        v-menu.hidden-xs-only
            //- メニュー

    v-content#content
        router-view
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    public appName = process.env.APP_NAME;
    protected drawer = false;
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_app.styl';

#app
    background-color: transparent;

    .nav-icon:before
        opacity: 0;
</style>
