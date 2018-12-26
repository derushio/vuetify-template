<template lang='pug'>
v-app#app
    v-navigation-drawer(app temporary v-model='drawer')
    v-toolbar(app color='primary' dark)
        v-toolbar-side-icon(@click.stop='drawer = !drawer')
        v-toolbar-title App

    v-content#content
        router-view

    v-footer(inset)
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

html, body
    // vhを使わないほうがスマホのアドレスバーの挙動が自然になる
    width: 100%; height: 100%;

#app {}
</style>
