<template lang='pug'>
v-layout#$__CLASS_NAME__$(fill-height column)
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class $__CLASS_NAME__$ extends Vue {}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#$__CLASS_NAME__$ {}
</style>
