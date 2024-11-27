if(window.innerWidth < window.innerHeight)
{
    // document.body.style.fontSize = "5vh";
    document.querySelector("#page").style.width = "95vw"; //content width
    document.body.style.fontSize = "5.3vw"; //basic text size
    for (let re = 0; re < document.getElementsByClassName("translate").length; re++) {
        // const element = document.getElementsByClassName("translate")[re];
        document.getElementsByClassName("translate")[re].style.fontSize = "3.5vw";
    }
    document.getElementById("toptitle").style.fontSize = "15vw";
    document.getElementById("copyright").style.fontSize = "2.5vw";
}