function FindChildM(PropArray, ValuesArray, PObject) {


    var PropNArray = new Array(PropArray);
    var ValuesNArray = new Array(ValuesArray);

    Sys.Refresh();
    var w = PObject.FindChild(PropNArray, ValuesNArray, 2);

    // Processes the search results
    if (w.Exists != false) {

        // Log.Message("Object Found successfully");
        Log.Checkpoint("Button Found successfully");
        Log.Message("Button found successfully " + w.WndCaption)
        return true;

    } else
        Log.Error("The object was not found.");
}

/*Author: Prateek Goyal
Date: 25/06/2024
FunctionName: FindAllChildrenM
Description: This function found the no. of objects under Parent object.
Version: 1.0*/
function FindAllChildrenM(PropArray, ValuesArray, PObject, ObjectName, Click, ClickR, Keys, SetText, KeyValue) {
    var PropNArray = new Array(PropArray);
    var ValuesNArray = new Array(ValuesArray);

    // Find all enabled buttons in the Replace dialog
    var objectN = PObject.FindAllChildren(PropArray, ValuesArray, 5);

    // Log the search results
    if (objectN.length > 0) {
        Log.Checkpoint("Total " + objectN.length + " object(s) found");
        for (var i = 0; i < objectN.length; i++) {
            Log.Message("Object Found successfully")
              Log.LockEvents();
              if(Click == true && buttons[i].WndCaption == ObjectName){
                objectN[i].Click();
                return true;
              }
             if(ClickR == true && buttons[i].WndCaption == ObjectName){
                objectN[i].Click();  
                return true;
             }
             if(Keys == true){
                objectN[i].Keys("^a"+"[Del]");
                objectN[i].Keys(KeyValue);
                return true;
             }
             if(SetText == true){
                objectN[i].SetText(KeyValue);
                return true;
             }
             Log.UnlockEvents();    
        }
        return true;
    } else
        Log.Error("No enabled buttons were found.");
}

function Find() {
    var PropArray, ValuesArray, p, obj;

    // Creates arrays of property names and values
    PropArray = new Array("WndCaption", "Visible");
    ValuesArray = new Array("Font st&yle:", true);

    // Searches for the object
    p = Sys.Process("Notepad");
    obj = p.Find(PropArray, ValuesArray, 1000);

    // Processes the search results
    if (obj.Exists)
        Log.Message(obj.FullName);
    else
        Log.Error("The object was not found.");
}