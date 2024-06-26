//USEUNIT Main
function Test1()
{
  //Log.AppendFolder("Step 1. Click on Login\r\n", "");
  Log.Message("Step 1. Click on Login link.", "");
 // Events.EventControl1.AttachToTestComplete();
 //Events.EventControl1.AttachToTestComplete()
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("www.w3schools.com");
  Aliases.browser.Page_LandingW3Schools.Link_Login.Click();
  //Simulates one or several keypresses.
  Aliases.browser.Page_Login_W3Schools.Txtbox_Email.Keys(Project.Variables.Username);
  //Enters text in the text box.
  Aliases.browser.Page_Login_W3Schools.Txtbox_Email.SetText("prateek");
//  //Runs a script routine.
 
//  //Runs a keyword test.
//  KeywordTests.Test2.Run();
 Log.PopLogFolder();
  //Log.AppendFolder(" Step 2.  Verify Property");
  //Checks whether the 'Text' property of the Aliases.browser.Page_Login_W3Schools.Txtbox_Email object equals Project.Variables.MyName.
  aqObject.CheckProperty(Aliases.browser.Page_Login_W3Schools.Txtbox_Email, "Text", cmpEqual, Project.Variables.MyName);
  //Checks whether the 'textContent' property of the Aliases.browser.Page_Login_W3Schools.Title_LogIn object equals Project.Variables.LogInTitle.
  aqObject.CheckProperty(Aliases.browser.Page_Login_W3Schools.Title_LogIn, "textContent", cmpEqual, "Log in", false);
  aqObject.CheckProperty(Aliases.browser.Page_Login_W3Schools.Title_LogIn, "textContent", cmpEqual, "Log In", true);
  Log.PopLogFolder();
 
  
  Log.Picture(Aliases.npp);
  
}