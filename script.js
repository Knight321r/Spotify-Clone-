console.log("Welcome to Spotify")

let songindex = 0;
let audioElement = new Audio('1.mp3');  
let masterplay = document.getElementById('masterplay');
let myprogress = document.getElementById('progress');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songItem')); 


let songs = [
    {songname: "Faded", filepath: "1.mp3", coverpath: "im1.jpg"  },
    {songname: "NCS", filepath: "2.mp3", coverpath: "im2.jpg"  },
    {songname: "NCS", filepath: "3.mp3", coverpath: "im3.jpg"  },
    {songname: "NCS", filepath: "4.mp3", coverpath: "im4.jpg"  },
    {songname: "NCS", filepath: "5.mp3", coverpath: "im5.jpg"  },
    {songname: "NCS", filepath: "6.mp3", coverpath: "im6.jpg"  },
    {songname: "NCS", filepath: "7.mp3", coverpath: "im7.jpg"  },
    {songname: "NCS", filepath: "8.mp3", coverpath: "im8.jpg"  },
]   
//myfun(item, index, array)

songitems.forEach((element, i)=>{
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

//audioelement.play

//play, pause, click etc
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play(); 
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause(); 
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

//events listening
audioElement.addEventListener('timeupdate', ()=>{
    //updating seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogress.value = progress;
})

myprogress.addEventListener('change', ()=>{
    audioElement.currentTime = ((myprogress.value * audioElement.duration) / 100);
})

const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        //  console.log(e.target);
        makeallplay();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = '4.mp3';
        //audioElement.currentTime = 0;
        audioElement.play();
        //masterplay.classList.remove('fa-play');
        //masterplay.classList.add('fa-pause');
    })
})
