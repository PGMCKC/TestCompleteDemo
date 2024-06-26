//USEUNIT FindObject

function ClickButton() {

    var PropArray = Project.Variables.Prop1;//"WndCaption"
    var ValuesArray = Project.Variables.Val1;//"OK"
    var PObject = Aliases.npp

    var ObjectFound = FindObject.FindChildM(PropArray, ValuesArray, PObject);
    if (ObjectFound == true) {
      Log.Checkpoint("Button Clicked Successfully");
    }
}

function buttonFound() {
//    TestedApps.npp.Run();
    var PropArray = Project.Variables.Prop1;
    var ValuesArray = Project.Variables.Val1;
    var ObjectName = Project.Variables.ButtonText;
    var PObject = Aliases.npp
    var KeyValue = Project.Variables.ValueText;

    var ObjectFound = FindObject.FindAllChildrenM(PropArray, ValuesArray, PObject, ObjectName, false, false, true, false, KeyValue);
    if (ObjectFound == true) {
      Log.Checkpoint("button found and clicked Successfully")
    }
}