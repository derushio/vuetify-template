<template lang='pug'>
.hello-world
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    protected async mounted() {
        await this.$vdialog.alert('HelloWorld').promise;
    }
}
</script>

<style lang='stylus' scoped>
.hello-world {}
</style>
