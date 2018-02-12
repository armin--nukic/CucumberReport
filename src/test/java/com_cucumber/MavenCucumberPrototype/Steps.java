package com_cucumber.MavenCucumberPrototype;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class Steps {

	@Given("^I navigate to the site  of course$")
	public void navigate_to_the_site() throws Throwable {
		 System.out.println("Given step was executed");
		
	}

	@When("^I click on the button of course$")
	public void click_on_the_button() throws Throwable {
		 System.out.println("When step was executed");
	}

	@Then("^I check I am on the correct page  of course$")
	public void correct_page() throws Throwable {
		 System.out.println("Then  step was executed");
	}
}
