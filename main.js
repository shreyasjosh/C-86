var canvas= new fabric.Canvas('myCanvas')
var player_X= 10 
var player_Y= 10
var blockimgwidth= 30
var blockimgheight= 30
var player_object= ""
var blockimgobject= ""

function player_update(){
fabric.Image.fromURL("player.png", function (Img){
    player_object=Img;
    player_object.scaleToWidth(150)
    player_object.scaleToHeight(140)
    player_object.set({ 
        top:player_Y,
        left:player_X
        });
        canvas.add(player_object)
});


}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        blockimgobject=Img;
        blockimgobject.scaleToWidth(blockimgwidth)
        blockimgobject.scaleToHeight(blockimgheight)
        blockimgobject.set({ 
            top:player_Y,
            left:player_X
            });
            canvas.add(blockimgobject)
    });
    
    
    }

window.addEventListener("keydown", my_Keydown);
 function my_Keydown(e){
     keypresed= e.keyCode;
     console.log(keypresed)
     if (e.shiftKey==true && keypresed=='80'){
         blockimgwidth=blockimgwidth+10
         blockimgheight= blockimgheight+10
         document.getElementById("current_width").innerHTML=blockimgwidth
         document.getElementById("current_height").innerHTML=blockimgheight

     }
     if (e.shiftKey==true && keypresed=='77'){
        blockimgwidth=blockimgwidth-10
        blockimgheight= blockimgheight-10
        document.getElementById("current_width").innerHTML=blockimgwidth
        document.getElementById("current_height").innerHTML=blockimgheight

    }
    if (keypresed=='38'){
        up()
    }
    if (keypresed=='40'){
        down()
    }
    if (keypresed=='37'){
        left()
    }
    if (keypresed=='39'){
        right()
    }

if (keypresed=='87'){
    new_image('wall.jpg')
}
if (keypresed=='71'){
    new_image('ground.png')
}
if (keypresed=='76'){
    new_image('light_green.png')
}
if (keypresed=='84'){
    new_image('trunk.jpg')
}
if (keypresed=='82'){
    new_image('roof.jpg')
}
if (keypresed=='89'){
    new_image('yellow_wall.png')
}
if (keypresed=='68'){
    new_image('dark_green.png')
}
if (keypresed=='85'){
    new_image('unique.png')
}
if (keypresed=='67'){
    new_image('cloud.jpg')
}
 }
 

