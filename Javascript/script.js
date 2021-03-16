/* 
    This file contains all the globally used stuff, a base layer of some sort. 
    
    Page.html -> - script.js (code used across all pages like the Navbar active update or Vertically align items in parent)
                 - Page.js (code that is specific for that page and that page only wich is not included in the other pages)
*/

/*************************************** | Global Variables | ****************************************/

var CurrentPage = String(location.href.split("/").slice(-1)).split("#")[0].replace(".html", ""); 
var SafariBrowser = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && navigator.userAgent.indexOf('CriOS') == -1 && navigator.userAgent.indexOf('FxiOS') == -1;

/*************************************** | Window loaded event | ****************************************/

window.addEventListener("load", function() 
{
    VerticalAlignItems(document.body.clientHeight);
    SafariModifications();
});

function SafariModifications()
{
    if(SafariBrowser == true)
    {
        ReadMoreIcons = document.getElementsByClassName("ReadMoreIcon");

        for(i = 0; i < ReadMoreIcons.length; i++)
        {
            ReadMoreIcon = ReadMoreIcons[i];
            ReadMoreIcon.style.marginLeft = "55px";
            ReadMoreIcon.style.marginTop = "-21px";
        }
    }
}

/*************************************** | Window resizes event | ****************************************/

window.addEventListener("resize", function() 
{
    var SiteWidth = document.body.clientWidth;
    var SiteHeight = document.body.clientHeight;

    VerticalAlignItems(SiteHeight);
});

// Changes the margin-top of all the elements with the "VerticalAlign" class to be in the middle of the parent element
function VerticalAlignItems(SiteHeight)
{
    var ElementsToAlign = document.getElementsByClassName("VerticalAlign");

    for(i = 0; i < ElementsToAlign.length; i++)
    {
        var ElementHeight = ElementsToAlign[i].clientHeight;
        var ParentElementHeight = ElementsToAlign[i].parentElement.clientHeight;
        
        ElementsToAlign[i].style.marginTop = String(ParentElementHeight / 2 - ElementHeight / 2) + "px";
    }
}

/*************************************** | Window scroll event | ****************************************/

window.addEventListener("scroll", function() 
{
    if(window.matchMedia("(min-width: 767px)").matches || SafariBrowser == false)
    {
        UpdateNavigationBarActive(); // different for every page => function is in each files .js
    }
});

// Helper function for UpdateNavigationBarActive(). Returns true if an element is in the Viewport or false otherwise
function IsVisible(Element) 
{
	var Distance = Element.getBoundingClientRect();
	
	if(Distance.top >= 0 && Distance.left >= 0 && Distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) && Distance.right <= (window.innerWidth || document.documentElement.clientWidth))
	{
		return true;
	}
	else 
	{
		return false;
	}
};

// Helper function for UpdateNavigationBarActive(). It updates the currently active element.
function UpdateCurrentActive(ActiveElement, NewActiveElement)
{
    ActiveElement.classList.remove("ActiveLink");
    ActiveElement.classList.add("AnimationUnderline");
    document.getElementById(NewActiveElement).classList.add("ActiveLink"); 
    CurrentActiveMenu = NewActiveElement;
}


