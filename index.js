var i=0;
while(i!=(document.querySelectorAll(".drum").length))
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var key = this.innerHTML;
        play(key);
        buttonanimation(key);

    });
    i++;
}
    document.addEventListener("keydown",function(event){
        play(event.key);
        buttonanimation(event.key);

    });
    function play(key)
    {
          
          switch(key)
          {
              case "w":
                  var a1 = new Audio("sounds/tom-1.mp3");
                  a1.play();
                  break;
            case "a":
                  var a2 = new Audio("sounds/tom-2.mp3");
                  a2.play();
                  break;
            case "s":
                    var a3 = new Audio("sounds/tom-3.mp3");
                    a3.play();
                    break;
            case "d":
                    var a4 = new Audio("sounds/tom-4.mp3");
                    a4.play();
                    break;
            case "j":
                    var a5 = new Audio("sounds/snare.mp3");
                    a5.play();
                    break;
            case "k":
                   var a6 = new Audio("sounds/crash.mp3");
                     a6.play();
                    break;
            case "l": 
                    var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;
          }
    
    }

function buttonanimation(key)
{
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){document.querySelector("." + key).classList.remove("pressed");},200);
}
