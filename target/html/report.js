$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myFeature.feature");
formatter.feature({
  "line": 1,
  "name": "This is my feature file",
  "description": "",
  "id": "this-is-my-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "This is my scenario",
  "description": "",
  "id": "this-is-my-feature-file;this-is-my-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the site  of course",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button of course",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I check I am on the correct page  of course",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.navigate_to_the_site()"
});
formatter.result({
  "duration": 179050274,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_the_button()"
});
formatter.result({
  "duration": 93553,
  "status": "passed"
});
formatter.match({
  "location": "Steps.correct_page()"
});
formatter.result({
  "duration": 88421,
  "status": "passed"
});
});