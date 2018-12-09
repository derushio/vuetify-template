<template lang='pug'>
v-app#app
    v-navigation-drawer(app temporary v-model='drawer')
    v-toolbar(app)
        v-toolbar-side-icon(@click.stop='drawer = !drawer')
        v-toolbar-title App

    v-content
        v-container(fluid)
            router-view

    v-footer(app inset)
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    protected drawer = false;
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_all.styl';

#app {}
</style>
