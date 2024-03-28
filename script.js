let vid;
let ReversedTime = 20;
let ForwardTime = 20;
document.addEventListener('DOMContentLoaded',init);

function init() {
    document.getElementById('btnPlay').addEventListener('click',Play);
    document.getElementById('btnPaws').addEventListener('click',Pause);
    document.getElementById('btnStop').addEventListener('click',Stop);
    document.getElementById('btnRew').addEventListener('click',Reverse);
    document.getElementById('btnFF').addEventListener('click',Forward);
    vid = document.getElementById('video');
    console.log(vid);
    console.log({vid});
    // let str = vid.canPlayType('video/mp4');
    // console.log(str);
    vid.volume = 0.5;
    let source = vid.children[0].src;
    console.log(source);
    document.getElementById('link').setAttribute('href', source);
    
}
function Play(params) {
    vid.play().then(()=>{
      console.log('video is playing');
    }).catch((err)=>{
      console.log({err});
    })
    console.log(vid.textTracks);
}
function Pause(params) {
    vid.pause();
    console.log(`${vid.currentTime} of ${vid.duration} seconds played`);
    console.log('video is paused. No Promise here');
}
function Stop(params) {
    vid.pause();
    console.log(`current play time ${vid.currentTime}`);
    vid.currentTime = 0;
}
function Reverse(params) {
    vid.currentTime -= ReversedTime;
    
}
function Forward(params) {
    vid.currentTime += ForwardTime;
}
