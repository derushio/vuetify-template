import '../helpers/VuetifyInstantOverlays';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('サンプルテスト', () => {
    it('プロパティテスト', () => {
        const msg = 'new message';
        const helloWorld = shallowMount(HelloWorld, {
            propsData: { msg },
        });
        expect(helloWorld.text()).toMatch(msg);
    });
});
