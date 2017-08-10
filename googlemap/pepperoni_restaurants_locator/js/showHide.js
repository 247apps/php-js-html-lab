function showHide(divObjId)
    {
        var divObject;
        var spanObject;
		divObject = document.getElementById("div"+divObjId);
		spanObject = document.getElementById("spanSign"+divObjId);
		    
		    if(divObject.style.display == "")
		    	{
		    	divObject.style.display = "none";
		    	}
		    else
			{
			 divObject.style.display = "";
    			}
    }
	
function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

