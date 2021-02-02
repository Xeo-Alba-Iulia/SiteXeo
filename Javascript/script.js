/*************************************** | Window loaded event | ****************************************/

window.addEventListener('load', function() 
{
    ResizeSponsorsRobot(document.body.clientWidth);

});

/*************************************** | Window resizes event | ****************************************/

window.addEventListener('resize', function() 
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





/*************************************** | JQuerry | ****************************************/

$(function() 
{
    SponsorsRobotAnimation();
})