let cnvs = document.getElementById('color-generation');
let pick = document.getElementById("picker");
cnvs.width = 1920;
cnvs.height = 1080;
let ctx = cnvs.getContext("2d");
ctx.beginPath();
ctx.fillStyle = pick.value;
ctx.fillRect(0,0,1920,1080);
ctx.stroke();
updateDownload();

function updateDownload(){
    let download_button = document.getElementById("dloadbutton");
    const img = cnvs.toDataURL('image/png');
    download_button.href = img;
}


function changecolor() {
    updateDownload();
    
//     ctx.fillStyle = pick.value; 
//     // console.log("color is now");
//     // console.log(pick.value);

}


pick.addEventListener('input', function(event) {
   
        // console.log("WOWW")
        ctx.fillStyle = pick.value;
        ctx.fillRect(0,0,1920,1080);
        ctx.stroke();
        updateDownload();
    
});