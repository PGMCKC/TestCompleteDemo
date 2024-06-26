function EventControl1_OnStartTest(Sender)
{
   if(Aliases.browser.Exists == true)
  {
    //Closes a page open in the browser.
    Aliases.browser.Close();
  }
}