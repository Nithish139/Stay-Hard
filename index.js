
for(var i=0; i<document.querySelectorAll("button").length; i++)
{
    document.querySelectorAll("button")[i].addEventListener("mouseover",mouseOverButton);
    document.querySelectorAll("button")[i].addEventListener("mouseout",mouseOutButton);
}

for(var i=0; i<document.querySelectorAll(".Nav>li>button").length; i++)
{
    document.querySelectorAll(".Nav>li>button")[i].addEventListener("mouseover",mouseOverNav);
    document.querySelectorAll(".Nav>li>button")[i].addEventListener("mouseout",mouseOutNav);
    document.querySelectorAll(".Nav>li>button")[i].addEventListener("click", function(){ 
        clickNav(this);
    });
}

function mouseOverNav()
{
    this.style.color = "yellow";
    this.style.background = "none";
}

function mouseOutNav()
{
    this.style.color = "white";
    this.style.background = "none";
}

function clickNav(key)
{
    if(key.textContent == "Home")
        scrollIntoView(".First_Look_Img");
    else if(key.textContent == "Programs")
        scrollIntoView(".Features");
    else if(key.textContent == "Sneek Peek")
        scrollIntoView(".Sneek_Peak");
    else if(key.textContent == "About")
        scrollIntoView(".First_Look_Msg");
}

function mouseOverButton()
{
    this.style.color = "yellow";
    this.style.background = "red";
}

function mouseOutButton()
{
    this.style.color = "white";
    this.style.background = "#df4b1f";
}

function scrollIntoView(selector) 
{
    document.querySelector(selector).scrollIntoView({behavior: "smooth", block : "center"});
}

