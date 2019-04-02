
type ICodeceptCallback = (i: CodeceptJS.I) => void;

declare class FeatureConfig {
  public retry(times: number): FeatureConfig;
  public timeout(seconds: number): FeatureConfig;
  public config(config: object): FeatureConfig;
  public config(helperName: string, config: object): FeatureConfig;
}

declare class ScenarioConfig {
  public throws(err: any): ScenarioConfig;
  public fails(): ScenarioConfig;
  public retry(times: number): ScenarioConfig;
  public timeout(timeout: number): ScenarioConfig;
  public inject(inject: object): ScenarioConfig;
  public config(config: object): ScenarioConfig;
  public config(helperName: string, config: object): ScenarioConfig;
}

interface ILocator {
  xpath?: string;
  css?: string;
  name?: string;
  value?: string;
  frame?: string;
  android?: string;
  ios?: string;
}

declare class Helper {
  /** Abstract method to provide required config options */
  public static _config(): any;
  /**Access another configured helper: this.helpers['AnotherHelper'] */
  public readonly helpers: any;
  /** Abstract method to validate config */
  public _validateConfig<T>(config: T): T;
  /** Sets config for current test */
  public _setConfig(opts: any): void;
  /** Hook executed before all tests */
  public _init(): void;
  /** Hook executed before each test. */
  public _before(): void;
  /** Hook executed after each test */
  public _after(): void;
  /**
   * Hook provides a test details
   * Executed in the very beginning of a test
   */
  public _test(test: () => void): void;
  /** Hook executed after each passed test */
  public _passed(test: () => void): void;
  /** Hook executed after each failed test */
  public _failed(test: () => void): void;
  /** Hook executed before each step */
  public _beforeStep(step: () => void): void;
  /** Hook executed after each step */
  public _afterStep(step: () => void): void;
  /** Hook executed before each suite */
  public _beforeSuite(suite: () => void): void;
  /** Hook executed after each suite */
  public _afterSuite(suite: () => void): void;
  /** Hook executed after all tests are executed */
  public _finishTest(suite: () => void): void;
  /** Print debug message to console (outputs only in debug mode) */
  public debug(msg: string): void;

  public debugSection(section: string, msg: string): void;
}

declare class Locator implements ILocator {
  public xpath?: string;
  public css?: string;
  public name?: string;
  public value?: string;
  public frame?: string;
  public android?: string;
  public ios?: string;

  public or(locator: string): Locator;
  public find(locator: string): Locator;
  public withChild(locator: string): Locator;
  public find(locator: string): Locator;
  public at(position: number): Locator;
  public first(): Locator;
  public last(): Locator;
  public inside(locator: string): Locator;
  public before(locator: string): Locator;
  public after(locator: string): Locator;
  public withText(locator: string): Locator;
  public withAttr(locator: object): Locator;
  public as(locator: string): Locator;
}


declare function actor(customSteps?: {
  [action: string]: (this: CodeceptJS.I, ...args: any[]) => void,
}): CodeceptJS.I;
declare function actor(customSteps?: {}): CodeceptJS.I;
declare function Feature(title: string, opts?: {}): FeatureConfig;
declare const Scenario: {
  (title: string, callback: ICodeceptCallback): ScenarioConfig;
  (title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
  only(title: string, callback: ICodeceptCallback): ScenarioConfig;
  only(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
};
declare function xScenario(title: string, callback: ICodeceptCallback): ScenarioConfig;
declare function xScenario(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
declare function Data(data: any): any;
declare function xData(data: any): any;
declare function Before(callback: ICodeceptCallback): void;
declare function BeforeSuite(callback: ICodeceptCallback): void;
declare function After(callback: ICodeceptCallback): void;
declare function AfterSuite(callback: ICodeceptCallback): void;

declare function locate(selector: string): Locator;
declare function locate(selector: ILocator): Locator;
declare function within(selector: string, callback: Function): Promise<any>;
declare function within(selector: ILocator, callback: Function): Promise<any>;
declare function session(selector: string, callback: Function): Promise<any>;
declare function session(selector: ILocator, callback: Function): Promise<any>;
declare function session(selector: string, config: any, callback: Function): Promise<any>;
declare function session(selector: ILocator, config: any, callback: Function): Promise<any>;
declare function pause(): void;

declare const codeceptjs: any;

declare namespace CodeceptJS {
  export interface I {
    say: () => any;
    amAcceptingPopups(): void;
    acceptPopup(): void;
    amCancellingPopups(): void;
    cancelPopup(): void;
    seeInPopup(text: string): void;
    grabPopupText(): Promise<string>;
    amOnPage(url: string): void;
    resizeWindow(width: number, height: number): void;
    haveRequestHeaders(customHeaders: string): void;
    moveCursorTo(locator: ILocator, offsetX?: number, offsetY?: number): void;
    moveCursorTo(locator: string, offsetX?: number, offsetY?: number): void;
    dragAndDrop(srcElement: string, destElement: string): void;
    refreshPage(): void;
    scrollPageToTop(): void;
    scrollPageToBottom(): void;
    scrollTo(locator: ILocator, offsetX?: number, offsetY?: number): void;
    scrollTo(locator: string, offsetX?: number, offsetY?: number): void;
    seeInTitle(text: string): void;
    grabPageScrollPosition(): Promise<string>;
    seeTitleEquals(text: string): void;
    dontSeeInTitle(text: string): void;
    grabTitle(): Promise<string>;
    switchToNextTab(num?: number): void;
    switchToPreviousTab(num?: number): void;
    closeCurrentTab(): void;
    closeOtherTabs(): void;
    openNewTab(): void;
    grabNumberOfOpenTabs(): Promise<string>;
    seeElement(locator: ILocator): void;
    seeElement(locator: string): void;
    dontSeeElement(locator: ILocator): void;
    dontSeeElement(locator: string): void;
    seeElementInDOM(locator: ILocator): void;
    seeElementInDOM(locator: string): void;
    dontSeeElementInDOM(locator: ILocator): void;
    dontSeeElementInDOM(locator: string): void;
    click(locator: ILocator, context?: ILocator): void;
    click(locator: string, context?: ILocator): void;
    click(locator: ILocator, context?: string): void;
    click(locator: string, context?: string): void;
    clickLink(locator: ILocator, context?: ILocator): void;
    clickLink(locator: string, context?: ILocator): void;
    clickLink(locator: ILocator, context?: string): void;
    clickLink(locator: string, context?: string): void;
    downloadFile(locator: ILocator, customName: string): void;
    downloadFile(locator: string, customName: string): void;
    doubleClick(locator: ILocator, context?: ILocator): void;
    doubleClick(locator: string, context?: ILocator): void;
    doubleClick(locator: ILocator, context?: string): void;
    doubleClick(locator: string, context?: string): void;
    rightClick(locator: ILocator, context?: ILocator): void;
    rightClick(locator: string, context?: ILocator): void;
    rightClick(locator: ILocator, context?: string): void;
    rightClick(locator: string, context?: string): void;
    checkOption(field: ILocator, context?: ILocator): void;
    checkOption(field: string, context?: ILocator): void;
    checkOption(field: ILocator, context?: string): void;
    checkOption(field: string, context?: string): void;
    seeCheckboxIsChecked(field: ILocator): void;
    seeCheckboxIsChecked(field: string): void;
    dontSeeCheckboxIsChecked(field: ILocator): void;
    dontSeeCheckboxIsChecked(field: string): void;
    pressKey(key: string): void;
    fillField(field: ILocator, value: string): void;
    fillField(field: string, value: string): void;
    clearField(field: ILocator): void;
    clearField(field: string): void;
    appendField(field: ILocator, value: string): void;
    appendField(field: string, value: string): void;
    seeInField(field: ILocator, value: string): void;
    seeInField(field: string, value: string): void;
    dontSeeInField(field: ILocator, value: string): void;
    dontSeeInField(field: string, value: string): void;
    attachFile(locator: ILocator, pathToFile: string): void;
    attachFile(locator: string, pathToFile: string): void;
    selectOption(select: ILocator, option: string): void;
    selectOption(select: string, option: string): void;
    grabNumberOfVisibleElements(locator: ILocator): Promise<string>;
    grabNumberOfVisibleElements(locator: string): Promise<string>;
    seeInCurrentUrl(url: string): void;
    dontSeeInCurrentUrl(url: string): void;
    seeCurrentUrlEquals(url: string): void;
    dontSeeCurrentUrlEquals(url: string): void;
    see(text: string, context?: ILocator): void;
    see(text: string, context?: string): void;
    seeTextEquals(text: string, context?: ILocator): void;
    seeTextEquals(text: string, context?: string): void;
    dontSee(text: string, context?: ILocator): void;
    dontSee(text: string, context?: string): void;
    grabSource(): Promise<string>;
    grabBrowserLogs(): Promise<string>;
    grabCurrentUrl(): Promise<string>;
    seeInSource(text: string): void;
    dontSeeInSource(text: string): void;
    seeNumberOfElements(selector: string, num: number): void;
    seeNumberOfVisibleElements(locator: ILocator, num: number): void;
    seeNumberOfVisibleElements(locator: string, num: number): void;
    setCookie(cookie: string): void;
    seeCookie(name: string): void;
    dontSeeCookie(name: string): void;
    grabCookie(name: string): Promise<string>;
    clearCookie(name: string): void;
    executeScript(fn: Function): void;
    executeAsyncScript(fn: Function): void;
    grabTextFrom(locator: ILocator): Promise<string>;
    grabTextFrom(locator: string): Promise<string>;
    grabValueFrom(locator: ILocator): Promise<string>;
    grabValueFrom(locator: string): Promise<string>;
    grabHTMLFrom(locator: ILocator): Promise<string>;
    grabHTMLFrom(locator: string): Promise<string>;
    grabCssPropertyFrom(locator: ILocator, cssProperty: string): Promise<string>;
    grabCssPropertyFrom(locator: string, cssProperty: string): Promise<string>;
    seeCssPropertiesOnElements(locator: ILocator, cssProperties: string): void;
    seeCssPropertiesOnElements(locator: string, cssProperties: string): void;
    seeAttributesOnElements(locator: ILocator, attributes: string): void;
    seeAttributesOnElements(locator: string, attributes: string): void;
    dragSlider(locator: ILocator, offsetX?: number): void;
    dragSlider(locator: string, offsetX?: number): void;
    grabAttributeFrom(locator: ILocator, attr: string): Promise<string>;
    grabAttributeFrom(locator: string, attr: string): Promise<string>;
    saveScreenshot(fileName: string, fullPage: string): void;
    wait(sec: number): void;
    waitForEnabled(locator: ILocator, sec: number): void;
    waitForEnabled(locator: string, sec: number): void;
    waitForValue(field: ILocator, value: string, sec: number): void;
    waitForValue(field: string, value: string, sec: number): void;
    waitNumberOfVisibleElements(locator: ILocator, num: number, sec: number): void;
    waitNumberOfVisibleElements(locator: string, num: number, sec: number): void;
    waitForElement(locator: ILocator, sec: number): void;
    waitForElement(locator: string, sec: number): void;
    waitForVisible(locator: ILocator, sec: number): void;
    waitForVisible(locator: string, sec: number): void;
    waitForInvisible(locator: ILocator, sec: number): void;
    waitForInvisible(locator: string, sec: number): void;
    waitToHide(locator: ILocator, sec: number): void;
    waitToHide(locator: string, sec: number): void;
    waitInUrl(urlPart: string, sec?: number): void;
    waitUrlEquals(urlPart: string, sec?: number): void;
    waitForText(text: string, sec?: number, context?: ILocator): void;
    waitForText(text: string, sec?: number, context?: string): void;
    waitForRequest(urlOrPredicate: string, sec?: number): void;
    waitForResponse(urlOrPredicate: string, sec?: number): void;
    switchTo(locator: ILocator): void;
    switchTo(locator: string): void;
    waitForFunction(fn: Function, argsOrSec?: string, sec?: number): void;
    waitForNavigation(opts?: string): void;
    waitUntil(fn: Function, sec?: number): void;
    waitUntilExists(locator: ILocator, sec: number): void;
    waitUntilExists(locator: string, sec: number): void;
    waitForDetached(locator: ILocator, sec: number): void;
    waitForDetached(locator: string, sec: number): void;
    debug(msg: string): void;
    debugSection(section: string, msg: string): void;
    retryStep(opts: string): void;

  }

}

declare module 'codeceptjs' {
    export = CodeceptJS;
}
