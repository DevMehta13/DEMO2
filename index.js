for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttoni = this.innerHTML;
        if(buttoni === "w"){
            var audio = new Audio('./sounds/1.mp3');
            audio.play();
        }
        else if(buttoni === "a"){
            var audio = new Audio('./sounds/2.mp3');
            audio.play();
        }
        else if(buttoni === "s"){
            var audio = new Audio('./sounds/3.mp3');
            audio.play();
        }
        else if(buttoni === "d"){
            var audio = new Audio('./sounds/4.mp3');
            audio.play();
        }
        else if(buttoni === "j"){
            var audio = new Audio('./sounds/5.mp3');
            audio.play();
        }
        else if(buttoni === "k"){
            var audio = new Audio('./sounds/6.mp3');
            audio.play();
        }
        else{
            var audio = new Audio('./sounds/7.mp3');
            audio.play();
        }
    });
}

