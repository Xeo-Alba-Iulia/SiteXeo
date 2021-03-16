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

window.addEventListener("scroll", function() 
{
    LoadIframes();
});

function LoadIframes()
{
    
}

var FacebookSRC = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTeamXeoFTC%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=282142349930508";
var DiscordSRC = "https://discord.com/widget?id=724282611165560965&theme=dark";
var YouTubeSRC = "https://www.youtube.com/embed/Hy8iqii9ATs";
var GoogleMapsSRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1384.1122123589803!2d23.562773457992414!3d46.066566068664045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474ea7dc7a06f241%3A0x4c54d423d78bd172!2zQ29sZWdpdWwgTmHIm2lvbmFsIEhvcmVhIENsb8iZY2EgyJlpIENyaciZYW4!5e0!3m2!1sro!2sro!4v1615225814275!5m2!1sro!2sro";