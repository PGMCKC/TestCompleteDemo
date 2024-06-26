function EventControl1_OnUnexpectedWindow(Sender, Window, LogParams)
{
  if(Aliases.npp.Exists==true){
    Sys.Process("npp").Terminate();
  }
}