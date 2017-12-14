window.onload=function () {
  let sImg=document.getElementsByClassName('sImg')[0];
  let bImg=document.getElementsByClassName('bImg')[0];
  let opacity=document.getElementsByClassName('opacity')[0];
  let imgs=document.getElementById('imgs');
  console.log(imgs);
  let mask=document.getElementsByClassName('mask')[0];
  // console.log(mask);
  let mH=mask.offsetHeight;
  let mW=mask.offsetWidth;
  // console.log(mH,mW);

    opacity.onmousemove=function (e) {
        // bImg.style.display='block';
        // mask.style.display='block';
        let scale=imgs.offsetWidth/sImg.offsetWidth;
        let ox=e.offsetX-mW/2,
            oy=e.offsetY-mH/2;
        // console.log(imgs.style.width=opacity.offsetWidth*opacity.offsetWidth/mask.offsetWidth);
        imgs.style.width=opacity.offsetWidth*opacity.offsetWidth/mW+'px';
        imgs.style.height=opacity.offsetHeight*opacity.offsetHeight/mH+'px';

        if (ox>=sImg.offsetWidth-mW){
            ox=sImg.offsetWidth-mW;
        }
        if (ox<=0){
            ox=0;
        }
        if (oy>=sImg.offsetHeight-mH){
            oy=sImg.offsetHeight-mH;
        }
        if (oy<=0){
            oy=0;
        }
        mask.style.left=ox+'px';
        mask.style.top=oy+'px';
        imgs.style.left=-(ox*scale)+'px';
        imgs.style.top=-(oy*scale)+'px';
        console.log(imgs.offsetWidth)

    };
    // opacity.onmouseout=function () {
    //     bImg.style.display='none';
    //     // mask.style.display='none';
    // }
};