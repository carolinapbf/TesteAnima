package br.com.carolina.runners;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features ="C:\\Users\\Pedro\\eclipse-workspace\\TesteAnima\\src\\test\\resources\\feature",
		glue="br.com.carolina.steps",
		plugin = {"pretty","html:target/report-html","json:target/report.json"},
		monochrome=true,
		snippets = SnippetType.CAMELCASE,
		dryRun=false,
		strict= false
		)
public class Runner {
	

}
