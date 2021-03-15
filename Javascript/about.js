/* 
    This file contains all the locally used stuff, a second layer. 
    
    Page.html -> - script.js (code used across all pages like the Navbar active update or Vertically align items in parent)
                 - Page.js (code that is specific for that page and that page only wich is not included in the other pages)
*/

var CurrentActiveMenu = "AboutLink";

function UpdateNavigationBarActive()
{
    var AboutElement = document.getElementById("AboutElement");
    var AchievementsElement = document.getElementById("AchievementsElement");
    var TeamElement = document.getElementById("TeamElement");
    var ActiveElement = document.getElementById(CurrentActiveMenu);

    if(CurrentActiveMenu != "AboutLink" && IsVisible(AboutElement))
    {
        UpdateCurrentActive(ActiveElement, "AboutLink");
    }
    else if(CurrentActiveMenu != "AchievementsLink" && IsVisible(AchievementsElement))
    {
        UpdateCurrentActive(ActiveElement, "AchievementsLink");
    }
    else if(CurrentActiveMenu != "TeamLink" && IsVisible(TeamElement))
    {
        UpdateCurrentActive(ActiveElement, "TeamLink");
    } 
}
