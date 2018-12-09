<template lang='pug'>
v-container#home(fluid fill-height)
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

#home {}
</style>
