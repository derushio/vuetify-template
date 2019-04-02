/// <reference path='../configs/steps.d.ts' />

Feature('サンプルテスト');

Scenario('アクセステスト', async (I) => {
    const a = '' as string;
    I.amOnPage('https://1.1.1.1/');
    I.see('You are one step away from browsing a faster, more private Internet');
});
