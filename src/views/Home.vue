<template lang='pug'>
v-container#home(fluid)
    v-layout(justify-center): v-flex(xs12 sm10 md8)
        hello-world
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
    components: {
        HelloWorld,
    },
})
export default class Home extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_view.styl';

#home
    // mixin overflow-y overflow-x
    view: auto hidden;
</style>
