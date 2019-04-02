<template lang='pug'>
v-layout#CLASS_NAME.fill-height(column)
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CLASS_NAME extends Vue {}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#CLASS_NAME {}
</style>
