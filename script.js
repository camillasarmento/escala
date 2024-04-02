setTimeout(function(){
    document.getElementById('container').style = '-webkit-transform:scale(0) rotate(360deg);';
},3000);

//here I need to scale in and rotate at same time
setTimeout(function(){
    document.getElementById('container').style = '-webkit-animation : kf_scale 1s';
},5000);