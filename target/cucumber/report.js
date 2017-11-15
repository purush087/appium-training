$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RechargeMobile.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I should be able to recharge from paytm",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-recharge-from-paytm",
  "keyword": "Feature"
});
formatter.before({
  "duration": 29981739604,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user selects the language as English",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user should be able to see Login Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user skips the login",
  "keyword": "And "
});
formatter.match({
  "location": "SelectLanguageSteps.user_selects_language_as_English()"
});
formatter.result({
  "duration": 4330035759,
  "status": "passed"
});
formatter.match({
  "location": "SelectLanguageSteps.user_clicks_on_continue_btn()"
});
formatter.result({
  "duration": 2451538210,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_see_login_screen()"
});
formatter.result({
  "duration": 17063332936,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_skips_login()"
});
formatter.result({
  "duration": 528820138,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Mobile Recharge - Prepaid",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-recharge-from-paytm;mobile-recharge---prepaid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user chooses to recharge for prepaid mobile",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters mobile number as 9901897419",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user waits for mobile operator to be auto selected",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user chooses to recharge with Rs. 30",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user clicks on proceed button",
  "keyword": "And "
});
formatter.match({
  "location": "DashboardSteps.user_chooses_to_recharge_for_mobile()"
});
formatter.result({
  "duration": 15619289189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9901897419",
      "offset": 29
    }
  ],
  "location": "MobileRechargeSteps.user_enters_mobile_number(String)"
});
formatter.result({
  "duration": 11579879800,
  "status": "passed"
});
formatter.match({
  "location": "MobileRechargeSteps.auto_select_operator_verify()"
});
formatter.result({
  "duration": 1066126144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 34
    }
  ],
  "location": "MobileRechargeSteps.enter_total_amount(String)"
});
formatter.result({
  "duration": 4696504489,
  "status": "passed"
});
formatter.match({
  "location": "MobileRechargeSteps.user_clicks_on_proceed_button()"
});
formatter.result({
  "duration": 721037702,
  "status": "passed"
});
formatter.after({
  "duration": 2039265380,
  "status": "passed"
});
formatter.before({
  "duration": 53650754867,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Error occured while starting App. Original error: \u0027net.one97.paytm.AJRJarvisSplash\u0027 never started (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 43.42 seconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027Purushothams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:cc9:e9e5:7320:5c15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.1\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: AppiumDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:89)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:254)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:38)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:87)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:111)\n\tat steps.DriverFactory.initialize(DriverFactory.java:38)\n\tat steps.DriverFactory.\u003cinit\u003e(DriverFactory.java:14)\n\tat steps.StartingSteps.startAppiumServer(StartingSteps.java:38)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user selects the language as English",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user should be able to see Login Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user skips the login",
  "keyword": "And "
});
formatter.match({
  "location": "SelectLanguageSteps.user_selects_language_as_English()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectLanguageSteps.user_clicks_on_continue_btn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_see_login_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_skips_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Mobile Recharge - Postpaid",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-recharge-from-paytm;mobile-recharge---postpaid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user chooses to recharge for postpaid mobile",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters mobile number as 9901897419",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user waits for mobile operator to be auto selected",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user chooses to recharge with Rs. 30",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on proceed button",
  "keyword": "And "
});
formatter.match({
  "location": "DashboardSteps.user_chooses_to_recharge_for_postpaid_mobile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9901897419",
      "offset": 29
    }
  ],
  "location": "MobileRechargeSteps.user_enters_mobile_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MobileRechargeSteps.auto_select_operator_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 34
    }
  ],
  "location": "MobileRechargeSteps.enter_total_amount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MobileRechargeSteps.user_clicks_on_proceed_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 126025,
  "error_message": "java.lang.NullPointerException\n\tat steps.StartingSteps.captureScreenShotInCaseOfFailure(StartingSteps.java:54)\n\tat steps.StartingSteps.stopAppiumServer(StartingSteps.java:45)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.uri("Sample.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I should be able to select a Language after installing the app",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-select-a-language-after-installing-the-app",
  "keyword": "Feature"
});
formatter.before({
  "duration": 26283267015,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a User I should be able to select English as my preferred language",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-select-a-language-after-installing-the-app;as-a-user-i-should-be-able-to-select-english-as-my-preferred-language",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user selects the language as English",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user should be able to see Login Screen",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user skips the login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user swipes to see broadband",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on broadband",
  "keyword": "And "
});
formatter.match({
  "location": "SelectLanguageSteps.user_selects_language_as_English()"
});
formatter.result({
  "duration": 5439719278,
  "status": "passed"
});
formatter.match({
  "location": "SelectLanguageSteps.user_clicks_on_continue_btn()"
});
formatter.result({
  "duration": 2592093488,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_see_login_screen()"
});
formatter.result({
  "duration": 17067228127,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_skips_login()"
});
formatter.result({
  "duration": 872558657,
  "status": "passed"
});
formatter.match({
  "location": "DashboardSteps.user_swipes_to_see_broadband()"
});
formatter.result({
  "duration": 14682718301,
  "status": "passed"
});
formatter.match({
  "location": "DashboardSteps.clicks_on_broadband()"
});
formatter.result({
  "duration": 20504609032,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //android.widget.TextView[@text\u003d\u0027Broadband\u0027]\u0027 (tried for 10 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat pages.BasePage.waitForElementToBeClickable(BasePage.java:21)\n\tat pages.Dashboard.clickOnBroadband(Dashboard.java:41)\n\tat steps.DashboardSteps.clicks_on_broadband(DashboardSteps.java:38)\n\tat ✽.And clicks on broadband(Sample.feature:9)\nCaused by: org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027Purushothams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:cc9:e9e5:7320:5c15%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.1\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: io.appium.java_client.AppiumDriver\nCapabilities [{app\u003dapp/Paytm_net.one97.paytm.apk, appPackage\u003dnet.one97.paytm, deviceScreenSize\u003d1440x2560, networkConnectionEnabled\u003dtrue, clearSystemFiles\u003dtrue, warnings\u003d{}, appWaitPackage\u003dnet.one97.paytm, appWaitActivity\u003dnet.one97.paytm.AJRJarvisSplash, databaseEnabled\u003dfalse, deviceName\u003d192.168.56.101:5555, platform\u003dLINUX, deviceUDID\u003d192.168.56.101:5555, appActivity\u003dnet.one97.paytm.AJRJarvisSplash, desired\u003d{app\u003dapp/Paytm_net.one97.paytm.apk, appium-version\u003d1.7.1, clearSystemFiles\u003dtrue, newCommandTimeout\u003d120, platformName\u003dAndroid, deviceName\u003dGoogle_Nexus_5X}, appium-version\u003d1.7.1, newCommandTimeout\u003d120, platformVersion\u003d6.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, deviceModel\u003dSamsung, platformName\u003dAndroid, deviceManufacturer\u003dGenymotion}]\nSession ID: 208c3175-bc38-4eea-88fd-9b94bd2884f4\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.TextView[@text\u003d\u0027Broadband\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:89)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:513)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:140)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:673)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:669)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\n\tat pages.BasePage.waitForElementToBeClickable(BasePage.java:21)\n\tat pages.Dashboard.clickOnBroadband(Dashboard.java:41)\n\tat steps.DashboardSteps.clicks_on_broadband(DashboardSteps.java:38)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.after({
  "duration": 3858782939,
  "status": "passed"
});
});