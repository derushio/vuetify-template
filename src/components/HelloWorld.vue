<template lang='pug'>
.hello-world
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    protected async mounted() {
        await this.$vdialog.alert('HelloWorld');
    }
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.hello-world {}
</style>
