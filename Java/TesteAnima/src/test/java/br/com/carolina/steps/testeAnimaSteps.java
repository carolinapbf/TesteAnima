package br.com.carolina.steps;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class testeAnimaSteps {

	private WebDriver driver;

	@Dado("^que estou na pagina de cadastro$")
	public void queEstouNaPaginaDeCadastro() throws Throwable {
		System.setProperty("webdriver.gecko.driver",
				"C:\\Users\\Pedro\\Desktop\\Carolina\\geckoDriver\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://automacaocombatista.herokuapp.com/users/new");

	}

	@Quando("^os campos são preenchidos com$")
	public void osCamposSãoPreenchidosCom(DataTable table) throws Throwable {
		Map<String, String> map = table.asMap(String.class, String.class);
		driver.findElement(By.id("user_name")).sendKeys(map.get("Nome"));
		driver.findElement(By.id("user_lastname")).sendKeys(map.get("Ultimo nome"));
		driver.findElement(By.id("user_email")).sendKeys(map.get("email"));
		driver.findElement(By.id("user_address")).sendKeys(map.get("endereço"));
		driver.findElement(By.id("user_university")).sendKeys(map.get("Universidade"));
		driver.findElement(By.id("user_profile")).sendKeys(map.get("Prosissão"));
		driver.findElement(By.id("user_gender")).sendKeys(map.get("Gênero"));
		driver.findElement(By.id("user_age")).sendKeys(map.get("Idade"));

	}

	@Quando("^envio um formulario dados usuario para cadastro$")
	public void envioUmFormularioDadosUsuarioParaCadastro() throws Throwable {
		driver.findElement(By.xpath("//form[@id='new_user']//input[@type='submit']")).click();
	}

	@Então("^visualizo uma mensagem de sucesso \"([^\"]*)\"$")
	public void visualizoUmaMensagemDeSucesso(String arg1) throws Throwable {
		String texto = driver.findElement(By.id("notice")).getText();
		Assert.assertEquals("Usuário Criado com sucesso", texto);
	}
	
	@After()
	public void fecharBrowser() {
		driver.quit();
	}

}
