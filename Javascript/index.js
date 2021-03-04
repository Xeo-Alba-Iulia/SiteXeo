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

window.addEventListener("scroll", function() 
{
    BlogAnimation();
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

// If the Blog element is visible it gives the AnimationFadeIn
var BlogActivators = document.getElementsByClassName("BlogAnimation");
var BlogElements = document.getElementsByClassName("BlogPost");
var LastLoadedElement = 0;

function BlogAnimation()
{
    for(i = LastLoadedElement; i < BlogActivators.length; i++)
    {
        var BlogElement = BlogElements[i];

        if(IsVisible(BlogActivators[i]))
        {
            BlogElement.classList.add("AnimationFadeIn2");

            if(BlogElement.childNodes[1].childNodes[1] != null)
            {
                if(BlogElement.childNodes[1].childNodes[1].tagName == "VIDEO")
                {
                    BlogElement.childNodes[1].childNodes[1].autoplay = "true";
                }
            }

            LastLoadedElement = i;
            break;
        }
    }
}
