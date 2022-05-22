function preload(){

}
function setup() {
    canvas=createCanvas(600,400);
    canvas.position(110,250)
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
    }
    
    function draw() {
   image(video,150,100,300,200)
   tint(tint_color)
   fill('green')
   rect(50,40,500,20)
   rect(50,340,500,20)
   rect(40,40,20,320)
   rect(540,40,20,320)
   fill("red")
   circle(50,50,30)
   circle(550,50,30)
   circle(50,350,30)
   circle(550,350,30)
    }
    function take_snapshot(){
       save('student_name.png')
    }
    function filter_tint(){
        tint_color=document.getElementById('color_name').value;

    }