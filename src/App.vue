<template lang='pug'>
v-app#app
    v-navigation-drawer(app temporary v-model='drawer')
    v-toolbar(app color='primary' dark)
        v-toolbar-side-icon(@click.stop='drawer = !drawer')
        v-toolbar-title App

    v-content#content
        router-view
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    protected drawer = false;
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_app.styl';

#app
    background: transparent;
</style>
