function setup() {
    canvas = createCanvas(400, 400)
      canvas.position(50, 100)
      video = createCapture(VIDEO)
      video.hide()
    }

    

function draw(){
    image(video, 50, 50, 290, 305)
   //rect( x, y, w, h)
   fill("green")
   rect( 50, 15, 300, 30)
   rect( 50, 360, 300, 30)
   rect( 10, 30, 35, 325)
   rect( 345, 30, 35, 325)

    //circle( x, y, radius)
    fill( "red" )
    stroke("black")
   circle( 30, 30, 50)
   circle( 360, 30, 50)
   circle( 30, 370, 50)
   circle( 360, 370, 50)

}

function take_snapshot()
{
    save("selfie.png")
}