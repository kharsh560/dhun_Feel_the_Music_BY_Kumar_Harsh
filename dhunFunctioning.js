console.log(`Welcome to dhun-Feel_the_Music`);

let songsInfoArr = [
    {
        currentSongName: "Taqdeer Theme Song",
        songFilePath: "DhunWebPageSongs/Taqdeer_Theme_Song1.mp3",
        songCoverFilePath: "taqdeerPoster.webp"
    },
    {
        currentSongName: "Tarse Tarse",
        songFilePath: "DhunWebPageSongs/Tarse_Tarse.mp3",
        songCoverFilePath: "taqdeerPoster.webp"
    },
    {
        currentSongName: "Ho Raha Hai Jo",
        songFilePath: "DhunWebPageSongs/Ho_Raha_Hai_Jo.mp3",
        songCoverFilePath: "taqdeerPoster.webp"
    },
    {
        currentSongName: "Tune Jo Na Kaha",
        songFilePath: "DhunWebPageSongs/Tune_Jo_Na_Kaha.mp3",
        songCoverFilePath: "NewYorkPoster.jpg"
    },
    {
        currentSongName: "Naadan Parinde",
        songFilePath: "DhunWebPageSongs/Nadaan Parindey.mp3",
        songCoverFilePath: "RockstarPoster.jpeg"
    },
    {
        currentSongName: "We Don't Talk Anymore",
        songFilePath: "DhunWebPageSongs/We_Don't_Talk_Anymore.mp3",
        songCoverFilePath: "WeDon'tTalkAnyMore.jpg"
    },
    {
        currentSongName: "Attack",
        songFilePath: "DhunWebPageSongs/Attack.mp3",
        songCoverFilePath: "AttackPoster.jpeg"
    },
    {
        currentSongName: "Tere Hawale",
        songFilePath: "DhunWebPageSongs/Tere_Hawaale.mp3",
        songCoverFilePath: "TereHawalePoster.jpeg"
    },
    {
        currentSongName: "My Life Is Going On",
        songFilePath: "DhunWebPageSongs/My_life_is_going_on.mp3",
        songCoverFilePath: "La-Casa-De-Papel-Money-Heist-My-Life-Is-Going-OnPoster.jpeg"
    },
    {
        currentSongName: "Bella Ciao",
        songFilePath: "DhunWebPageSongs/Bella_Ciao.mp3",
        songCoverFilePath: "BellaCiaoPoster.jpeg"
    },
    {
        currentSongName: "Tum Aankhon Se Batana",
        songFilePath: "DhunWebPageSongs/Aankhon_Se Batana.mp3",
        songCoverFilePath: "AankhonSeBatanaPoster.jpeg"
    },
    {
        currentSongName: "Teri Deewani",
        songFilePath: "DhunWebPageSongs/Teri_Deewani.mp3",
        songCoverFilePath: "TeriDeewaniPoster.jpeg"
    },
    {
        currentSongName: "Mumma",
        songFilePath: "DhunWebPageSongs/Mumma.mp3",
        songCoverFilePath: "MummaSongPoster.jpeg"
    }
]

// ############################### Code for audio Element variable declaration ###############################

let song = new Audio(); // Its the {audio element} => Ye toh kar hee sakte hain!!!
console.log(song.src); // it will give us empty string

// ############################### Code for backward Button ###############################

document.getElementById("backward").addEventListener("click", function () {
    if (song.src == '') {
        alert("First of all Play the song, please! Then only THIS buttons will work!! COMMON SENSE, isn't it?");
    }
})

// ############################### Code for playPause Button ###############################

document.getElementById("playPause").addEventListener("click", function () {
    // song.pause();
    // document.getElementById("playPause").src = 'play-solid.svg';
    if (song.src == '') {
        alert("First of all Play the song, please! Then only THIS buttons will work!! COMMON SENSE, isn't it?");
    }
    else if (song.paused || song.currentTime <= 0) {   //here the condition {song.src != ''} was true, hence the compiler went out of this if-else code
        song.play();
        document.getElementById("playPause").src = 'pause-solid.svg';
    }
    else  {
        song.pause();
        document.getElementById("playPause").src = 'play-solid.svg';
    }

})

// ############################### Code for forward Button ###############################

document.getElementById("forward").addEventListener("click", function () {
    if (song.src == '') {
        alert("First of all Play the song, please! Then only THIS buttons will work!! COMMON SENSE, isn't it?");
    }
})

// ############################### Code for Playing the song ###############################

if (song.src == '') {
    for (let i = 0; i < 13; i++) {
        document.getElementById(`${i}`).addEventListener("click", function () {
            song.src = songsInfoArr[i].songFilePath;
            song.play();
            document.getElementById("playPause").src = 'pause-solid.svg';
        })
    }
}
else if (song.src != '') {
    for (let i = 0; i < 13; i++) {
        document.getElementById(`${i}`).addEventListener("click", function () {
            song.src = songsInfoArr[i].songFilePath;
            song.play();
            document.getElementById("playPause").src = 'pause-solid.svg';
        })
    }
}

// ############################### Code for seekBar ###############################

song.addEventListener("timeupdate", ()=>{   //timeUpdate works upon audio element
    console.log("timeUpdate");
    let progress = parseInt((song.currentTime/song.duration)*100);
    // console.log(progress);
    document.getElementById("myProgressBar").value = progress;
})




