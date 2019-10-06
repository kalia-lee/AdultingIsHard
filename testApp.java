package testAdultIsHard;


import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.*;

import org.openqa.selenium.chrome.ChromeOptions;


public class testApp {
	
	
	
	public static void main(String[] args) throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\tanya\\chromedriver_win32\\chromedriver.exe");
		
		
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--verbose");
		options.addArguments("--whitelisted-ips=''");
		
		
		// Initializing browser
		WebDriver driver = new ChromeDriver(options);
	
		
		// Open web application
		driver.get("http://localhost:5000/dashboard");
		
		
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		
		// get the actual value of the title
		String actualTitle = "";
		String expectedTitle = "Adulting is hard";
        actualTitle = driver.getTitle();
        System.out.println(actualTitle);
        int count1 = 0;
        int count2 = 0;
      
        
        /*
         * compare the actual tit of the page with the expected one and print
         * the result as "Passed" or "Failed"
         */
        if (actualTitle.contentEquals(expectedTitle)){
            System.out.println("Title - Test Passed!");
            count1++;
     
        } else {
            System.out.println("Test Failed");
            count2++;
        }
       
       
        
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        //driver.navigate().to("http://localhost:5000/assets");
       
        WebElement Vehicle = driver.findElement(By.xpath("//*[@id=\"menu\"]/ul/li[3]/a"));
        Vehicle.click();
        
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        Thread.sleep(2000);
        
        WebElement Car = driver.findElement(By.xpath("/html/body/button[1]"));
        Car.click();
        Thread.sleep(1000);
        Car.click();
        System.out.println("Car - Test Passed!");
        count1++;
        
        WebElement Boat = driver.findElement(By.xpath("/html/body/button[2]"));
        Boat.click();
        Thread.sleep(1000);
        Boat.click();
        System.out.println("Boat - Test Passed!");
        count1++;
        
        
        WebElement Home = driver.findElement(By.xpath("/html/body/button[3]"));
        Home.click();
        Thread.sleep(1000);
        Home.click();
        System.out.println("Home - Test Passed!");
        count1++;
        
        System.out.println("Number of tests passed: " + count1);
        System.out.println("Number of tests failed: " + count2);
        
        driver.close();
		
	}

}
