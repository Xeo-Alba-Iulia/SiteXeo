/* Urmeaza JS Pajitean Doamne fereste */


/* Window loaded main function */
window.addEventListener('load', function() 
{
    UpdateNavbarMenu();
})


/* Window resizes main function */
window.addEventListener('resize', function() 
{
    UpdateNavbarMenu();
    
})

// Switches between the phone and pc menus based on the width of the page
CurrentMenu = "PC";
PCMenu = document.getElementById("NavbarMenu").outerHTML;
PhoneMenu = document.getElementById("NavbarMenuPhone").outerHTML;
document.getElementById("NavbarMenu").outerHTML = "";
document.getElementById("NavbarMenuPhone").outerHTML = "";
NavbarContainer = document.getElementById("NavbarContainer");
NavbarContainerInner = NavbarContainer.innerHTML;

function UpdateNavbarMenu()
{
    if(window.matchMedia("(max-width: 1000px)").matches)
    {
        CurrentMenu = "Phone";
        NavbarContainer.innerHTML = NavbarContainerInner + PhoneMenu;
    }
    else
    {
        CurrentMenu = "PC";
        NavbarContainer.innerHTML = NavbarContainerInner + PCMenu;
    }
}