/* 
    This file contains all the locally used stuff, a second layer. 
    
    Page.html -> - script.js (code used across all pages like the Navbar active update or Vertically align items in parent)
                 - Page.js (code that is specific for that page and that page only wich is not included in the other pages)
*/

// Updates the active item in the Navigation bar depending on wich section of the site is on the screen

var CurrentActiveMenu = "PhoneEmailLink";

function UpdateNavigationBarActive()
{
    var PhoneEmailElement = document.getElementById("PhoneEmailElement");
    var SocialMediaElement = document.getElementById("SocialMediaElement");
    var LocationElement = document.getElementById("LocationElement");
    var ActiveElement = document.getElementById(CurrentActiveMenu);

    if(CurrentActiveMenu != "PhoneEmailLink" && IsVisible(PhoneEmailElement))
    {
        UpdateCurrentActive(ActiveElement, "PhoneEmailLink");
    }
    else if(CurrentActiveMenu != "SocialMediaLink" && IsVisible(SocialMediaElement))
    {
        UpdateCurrentActive(ActiveElement, "SocialMediaLink");
    }
    else if(CurrentActiveMenu != "LocationLink" && IsVisible(LocationElement))
    {
        UpdateCurrentActive(ActiveElement, "LocationLink");
    } 
}

function EmailHoverEffect(Action)
{
    var EmailIcon = document.getElementById("EmailIcon2");

    if(Action == "over")
    {
        EmailIcon.classList.remove("fa-envelope");
        EmailIcon.classList.add("fa-envelope-open");
        EmailIcon.style.marginTop = "-1px";
    }
    if(Action == "out")
    {
        EmailIcon.classList.remove("fa-envelope-open");
        EmailIcon.classList.add("fa-envelope");
        EmailIcon.style.marginTop = "3px";
    }
}

function PhoneHoverEffect(Action)
{
    var PhoneIcon = document.getElementById("PhoneIcon2");

    if(Action == "over")
    {
        PhoneIcon.classList.remove("fa-phone-alt");
        PhoneIcon.classList.add("fa-phone-volume");
    }
    if(Action == "out")
    {
        PhoneIcon.classList.remove("fa-phone-volume");
        PhoneIcon.classList.add("fa-phone-alt");
    }
}

