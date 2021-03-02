/* 
    This file contains all the locally used stuff, a second layer. 
    
    Page.html -> - script.js (code used across all pages like the Navbar active update or Vertically align items in parent)
                 - Page.js (code that is specific for that page and that page only wich is not included in the other pages)
*/

// Changes the width of the viewbox and the container of the Sponsors Robot Animation
window.addEventListener("resize", function() 
{
    var SiteWidth = document.body.clientWidth;
    var SiteHeight = document.body.clientHeight;

    ResizeSponsorsRobot(SiteWidth);
});

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


// Updates the active item in the Navigation bar depending on wich section of the site is on the screen

var CurrentActiveMenu = "HomeLink";

function UpdateNavigationBarActive()
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