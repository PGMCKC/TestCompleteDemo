﻿//This function is used to verify the Image that is shown in the object.
//@parentObj: [Required] Alias object in which to find the image
//@iconName: [Required] This is the name of the image capture as region 
//@mouseCursor: [Optional] Whether to capture mouse cursor to include in comparison. [true, false], default = false
//@pixelTolerance: [Optional] Number of unmathched pixel to ignore. Default is 0.

function verifyImageIconExistence(parentObj, iconName, mouseCursor, pixelTolerance)
{ 
  //Setting default value for mouseCursor
  if(mouseCursor == null)
  {
    mouseCursor = false;
  }
  
  //Setting default value for pixelTolerance
  if(pixelTolerance == null)
  {
    pixelTolerance = 0;
  }
  
 //This variable will hold the rectangular area of the icon  
  var iconImageRect;
  //Get the parent object picture
  parentObj.Refresh();
  var parentPicture = parentObj.Picture(0, 0, -1, -1, mouseCursor);
  
  var picture = Regions.GetPicture(iconName);
  
  //Try to find in the node image the checked state image.
  //If found the checked image rect is returned.
  iconImageRect = Regions.FindRegion(picture, parentPicture, 0, 0, false, false, 0);
  
  //If the parent window has needed icon    
  if(iconImageRect != null)
  {
    Log.Checkpoint("Successfully Found the image");
    Log.Picture(parentObj.Picture(iconImageRect.Left, iconImageRect.Top, iconImageRect.Width, iconImageRect.Height, mouseCursor), "Identified Picture.")
//    if(Click == true){
//      Click(iconImageRect);
//    }
    return true;
    
  }  
  else
  {
    return false;  
  }
}