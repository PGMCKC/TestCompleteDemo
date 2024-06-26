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
    //Enters text in the text box.
    Aliases.browser.Page_Login_W3Schools.Txtbox_Email.SetText("prateek");
    //Unable to convert the Go To Label operation (Label name: test1).
    //Runs a script routine.
   Main.MainF();
  //No use of code
  
   /*
    //Runs a keyword test.
    KeywordTests.Test2.Run();
    Log.PopLogFolder();
    //Checks whether the 'Text' property of the Aliases.browser.Page_Login_W3Schools.Txtbox_Email object equals Project.Variables.MyName.
    aqObject.CheckProperty(Aliases.browser.Page_Login_W3Schools.Txtbox_Email, "Text", cmpEqual, Project.Variables.MyName);
    //Unable to convert the Label operation (Label name: test1).
    Checks whether the 'textContent' property of the Aliases.browser.Page_Login_W3Schools.Title_LogIn object equals Project.Variables.LogInTitle.*/
    
    aqObject.CheckProperty(Aliases.browser.Page_Login_W3Schools.Title_LogIn, "textContent", cmpEqual, Project.Variables.LogInTitle, false);
    //Stops running the project tests and posts the specified error string to the log.
    Runner.Stop();
  
}