/// <reference path='../configs/steps.d.ts' />

Feature('サンプルテスト');

Scenario('アクセステスト', async (I) => {
    I.amOnPage('http://localhost:8080/');
    I.see('HelloWorld');
});
