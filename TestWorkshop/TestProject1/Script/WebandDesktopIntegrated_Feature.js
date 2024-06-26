//USEUNIT Main
function Test1()
{
  Log.AppendFolder("Step 1. Click on Login\r\n", "");
  Log.Message("Step 1. Click on Login link.", "");
  if(Aliases.browser.Exists == true)
  {
    //Closes a page open in the browser.
    Aliases.browser.Page_Login_W3Schools.Close();
  }
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("www.w3schools.com");
  Aliases.browser.Page_LandingW3Schools.Link_Login.Click();
  
  //Simulates one or several keypresses.
  Aliases.browser.Page_Login_W3Schools.Txtbox_Email.Keys(Project.Variables.Username);
  Aliases.browser.Page_Login_W3Schools.Txtbox_Email.Keys("Goyal")
  Delay(5000);
  
  //Enters text in the text box.
  Aliases.browser.Page_Login_W3Schools.Txtbox_Email.SetText(Project.Variables.MyName);
//  //Runs a script routine.
//  Main();
//  
//  //Runs a keyword test.
//  KeywordTests.Test2.Run();
  
  Log.PopLogFolder();
}



