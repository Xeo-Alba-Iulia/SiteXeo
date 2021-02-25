/*************************************** | Global Variables | ****************************************/

var CurrentPage = String(location.href.split("/").slice(-1)).split("#")[0].replace(".html", ""); 

/*************************************** | Window loaded event | ****************************************/

window.addEventListener("load", function() 
{
    ResizeSponsorsRobot(document.body.clientWidth);
    VerticalAlignItems(document.body.clientHeight);
});

/*************************************** | Window resizes event | ****************************************/

window.addEventListener("resize", function() 
{
    var SiteWidth = document.body.clientWidth;
    var SiteHeight = document.body.clientHeight;

    ResizeSponsorsRobot(SiteWidth);
    VerticalAlignItems(SiteHeight);
});

// Changes the width of the viewbox and the container of the Sponsors Robot Animation
function ResizeSponsorsRobot(SiteWidth)
{
    var SponsorsRobotSVG = document.getElementById("SponsorsRobotSVG");
    var SponsorsRobotContainer = document.getElementById("SponsorsRobotContainer");

    if(SiteWidth < 550)
    {
        SponsorsRobotSVG.setAttribute("viewBox", "0 0 500 400");
    }
    else
    {
        SponsorsRobotSVG.setAttribute("viewBox", "0 0 " + SiteWidth + " 400");
    }

    SponsorsRobotContainer.style.width = SiteWidth + "px";

}

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

var CurrentActiveMenu = "HomeLink";

window.addEventListener("scroll", function() 
{
    UpdateNavigationBarActive();
});

// Updates the active item in the Navigation bar depending on wich section of the site is on the screen
function UpdateNavigationBarActive()
{
    if(CurrentPage == "index")
    {
        var HomeElement = document.getElementById("HomeElement");
        var AboutElement = document.getElementById("AboutElement");
        var SponsorsElement = document.getElementById("SponsorsElement");
        var BlogElement = document.getElementById("BlogElement");
        var ContactElement = document.getElementById("ContactElement");
        var ActiveElement = document.getElementById(CurrentActiveMenu);

        if(CurrentActiveMenu != "HomeLink" && IsVisible(HomeElement))
        {
            UpdateCurrentActive(ActiveElement, "HomeLink");
        }
        else if(CurrentActiveMenu != "AboutLink" && IsVisible(AboutElement))
        {
            UpdateCurrentActive(ActiveElement, "AboutLink");
        }
        else if(CurrentActiveMenu != "SponsorsLink" && IsVisible(SponsorsElement))
        {
            UpdateCurrentActive(ActiveElement, "SponsorsLink");
        }
        else if(CurrentActiveMenu != "BlogLink" && IsVisible(BlogElement))
        {
            UpdateCurrentActive(ActiveElement, "BlogLink");
        }
    }
    else if(CurrentPage == "about")
    {
        var HomeElement = document.getElementById("HomeElement");
        var Achievements = document.getElementById("AchievementsElement");
        var TeamElement = document.getElementById("TeamElement");
        var ActiveElement = document.getElementById(CurrentActiveMenu);

        if(CurrentActiveMenu != "HomeLink" && IsVisible(HomeElement))
        {
            UpdateCurrentActive(ActiveElement, "AboutLink");
        }
    }
}

// Helper function for UpdateNavigationBarActive(). Returns true if an element is in the Virewport or false otherwise
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

/*************************************** | JQuerry | ****************************************/

$(function()
{
    SponsorsRobotAnimation();
})


