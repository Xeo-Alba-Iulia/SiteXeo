/*************************************** | Window loaded event | ****************************************/

window.addEventListener("load", function() 
{
    ResizeSponsorsRobot(document.body.clientWidth);

});

/*************************************** | Window resizes event | ****************************************/

window.addEventListener("resize", function() 
{
    SiteWidth = document.body.clientWidth;

    ResizeSponsorsRobot(SiteWidth);
});

// Changes the width of the viewbox and the container of the Sponsors Robot Animation
function ResizeSponsorsRobot(SiteWidth)
{
    SponsorsRobotSVG = document.getElementById("SponsorsRobotSVG");
    SponsorsRobotContainer = document.getElementById("SponsorsRobotContainer");

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

/*************************************** | Window scroll event | ****************************************/

var CurrentActiveMenu = "HomeLink";

window.addEventListener("scroll", function() 
{
    UpdateNavigationBarActive();


});

// Updates the active item in the Navigation bar depending on wich section of the site is on the screen
function UpdateNavigationBarActive()
{
    var HomeElement = document.getElementById("HomeElement");
    var AboutUsElement = document.getElementById("AboutUsElement");
    var SponsorsElement = document.getElementById("SponsorsElement");
    var BlogElement = document.getElementById("BlogElement");
    var ContactElement = document.getElementById("ContactElement");
    var ActiveElement = document.getElementById(CurrentActiveMenu);

    if(CurrentActiveMenu != "HomeLink" && IsVisible(HomeElement))
    {
        UpdateCurrentActive(ActiveElement, "HomeLink");
    }
    else if(CurrentActiveMenu != "AboutUsLink" && IsVisible(AboutUsElement))
    {
        UpdateCurrentActive(ActiveElement, "AboutUsLink");
    }
    else if(CurrentActiveMenu != "SponsorsLink" && IsVisible(SponsorsElement))
    {
        UpdateCurrentActive(ActiveElement, "SponsorsLink");
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


