package com_cucumber.MavenCucumberPrototype;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		 	plugin = {"pretty", "json:target/document.json", "html:target/html/"},
			features = {"src/test/resource"}
			)
public class RunnerTest {

}
