

const video=document.getElementById('video');
const canvas=document.getElementById('canvas');
// const snap=document.getElementById('snap');
const errorMsgElement=document.getElementById('errMsg');

const constraints={
    audio: true,
    video:{
      width:0,
      height:0
    }
};

// Access webcam
async function init(){
    try{
         const stream=await navigator.mediaDevices.getUserMedia(constraints);
         handleSuccess(stream);
    }
    catch(e){
         errorMsgElement.innerHTML=`navigator.getUserMedia.error:${e.toString()}`;
    }
}

function handleSuccess(stream)
{
    window.stream=stream;
    video.srcObject=stream;
}

init();

var context=canvas.getContext('2d');

var img=setInterval(function(){
context.drawImage(video,0,0,100,100);
document.getElementById("demo").innerHTML=context.getImagetData(video);
},300000);