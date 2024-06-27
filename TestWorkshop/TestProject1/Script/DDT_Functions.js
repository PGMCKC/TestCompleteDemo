//this function is to verify the cell value exist
//@fileName:the excel file name
//@sheetName:the sheet name which need to verify
//@columnNameArray:the column name which has the data need to verify
//@columnValue:the cell value which need to verify
//error: if not find the column, will log an error
// if the value is not exist in the column, will log an error

function verifyExcelDataExists(fileName, sheetName, columnNameArray, columnValue, columnNumber) {
    // Creates a driver
    var driver = DDT.ExcelDriver(fileName,sheetName,false);
    var found = false;
    var exists = false;
    if (columnNameArray != null)
    {
        //get the column count
        var count = driver.ColumnCount;
       
        for (var columnCount = 0; columnCount < columnNameArray.length; columnCount++)
        {
            //find the special column index
            while (!driver.EOF())
            {
                for (var i = 0; i < count; i++)
                {
                    if (
                        aqString.StrMatches(columnNameArray[columnCount], driver.ColumnName(i))) {
                        Log.Message("The Column[" + (i + 1) + "] = " + columnNameArray[columnCount] + " is exists.");
                        found = true;
                        break;
                    }
                }
                if (found)
                    break;
                driver.Next();
            }
            //if not find the column, log an error
            if (!found)
                Log.Error("The Column[" + columnNameArray[columnCount] + "] is not exists.")
        }
    }
    //check if the value is exists in the special column
    if ((columnNumber != null) && (columnValue != null))
    {
        while (!driver.EOF())
        {
            if (driver.Value(columnNumber - 1) == columnValue)
            {
                exists = true;
                Log.Message("The '" + columnValue + "' in column[" + columnNumber + "] exists.");    
                break;
            }
            driver.Next();
        }
        //check if the value is exists, if not, log an error
        if (!exists)
            Log.Error("Can not find the '" + columnValue + "' in column[" + columnNumber + "].");
    }
    // Closes the driver
    DDT.CloseDriver(driver.Name);
}