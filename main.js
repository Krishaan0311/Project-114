function preload() {
    
  }
  
  function setup() {
      canvas = createCanvas(260 , 260);
      canvas.center();
      
  }
  
  function modelLoaded() {
      console.log('PoseNet is inialized');
  }

  function gotPoses(results) {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x -10;
      noseY = results[0].pose.nose.y -10;
      console.log("nose x = " + noseX);
      console.log("nose y = " + noseY);
    }
 }
  
     function draw() {
    image(video, 0, 0, 260, 260);
  }
  
  function take_snapshot() {
      save('FilterImage.png');
  }