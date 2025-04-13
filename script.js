function goToFolders() {
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("folders-screen").classList.remove("hidden");
}

function backToFolders() {
  document.getElementById("folder-content").classList.add("hidden");
  document.getElementById("folders-screen").classList.remove("hidden");
}

function openFolder(folder) {
  const contentArea = document.getElementById("content-area");
  contentArea.innerHTML = ""; // clear previous

  const folders = {
    happy: {
      message: "[you're happy, me happy. good work!! I'm proud of you so muchh. well done hun. keep going. you're amazing<3 they must be proud of you too 👇 ]",
      images: [
        "https://i.ibb.co/ns9pkPGt/bbaaa374063746c8f51659feef99f3c0.jpg",
        "https://i.ibb.co/TDGyXMGM/4ae70a49f191c08dcb09559984b1d400.jpg",
        "https://i.ibb.co/bjMHPLbm/ba289ba86a8a618e757e86d187299cbd.jpg",

"https://i.ibb.co/NdkdSvNk/a557de7a8fd7d17b907c3d49428bd98b.jpg",
    
"https://i.ibb.co/8g427BwT/09ec01589f4a94c3ea9bac011aa7d6a7.jpg"
      ]
    },
    sad: {
      message: "[it's okayy. I've the best thing below that'll help. it's okay though!! tough times don't last forever. I'm here. Don't you worry okii? here are some pics to cheer you up.]",
      images: [
        "https://i.ibb.co/DD0MHMgz/25b72600a86c84b6339dec39cff0e73d.jpg",

"https://i.ibb.co/CZSS6nh/facaeea3f67fb6a084d983c179dff22d.jpg"
      ]
    },
    tired: {
      message: "[you've done a great job. it's not easy to keep giving your best amidst everything. I'm so proud of you, thanking you for working so hard and thank you for existing, you deserve some rest you. you can come here anytime you want because i want you to have a place here, where you don't need to try your best all the time and can rest up a bit heheh<3 hope this will cheer you up a bitt]",
      images: []
    },
    motivation: {
      message: "[you need motivation? you gotta go to paris girl seonghwa is waiting for you at the louvre. and what's bigger motivation than pondphuwin girl look at them girl go get to work siuuu]",
      images: [
        "https://i.ibb.co/fzn7vrxL/a28218d31aab2ac77437b03aa35f2651.jpg",
        "https://i.ibb.co/KjN3dLKT/2322a802d73a1d9e88c8af33ceac2965.jpg",
      
"https://i.ibb.co/8g427BwT/09ec01589f4a94c3ea9bac011aa7d6a7.jpg",
      
"https://i.ibb.co/MDB8ZnrR/ae3c8c9f29262264a51594b458d787db.jpg",
      
"https://i.ibb.co/MyRmRRmT/357655dfa09a7d0c9b66247e1689175c.jpg"
      ]
    },
    energy: {
      message: "[this for you hehehehe]",
      audios: [
        "https://audio.jukehost.co.uk/MSOzrsBZUkdDU58GFKQSFqexuhJ6atBg",
        "https://audio.jukehost.co.uk/EfBXA9Vlv1l2C6L1YQybPVyGpKr5fzvu",
        "https://audio.jukehost.co.uk/0hGFFSTFCM9fi15QwSvgJQMfWgPGWO4Q",
        "https://audio.jukehost.co.uk/E7TbYdEXW6O2K2U1nbi9vBSdibEF1g7O"
      ]
    },
    missme: {
      message: "[aw you miss me. Well I'm busy for others free for you. Text me anytime BWHAHAHAHAHAHHA. actually i miss you too. i mean i wanna act sometimes i dont but i actually do. very much. help me please. why you so far i'll cry i wanna see you uwaaa. pls miss me too and when you do drop a text uwa]",
      images: []
    },
    frustrated: {
      message: "[bhai tui rege gele bhoyanok pls rag kore thakishna nahole ww3 hoye jabe bachao. ke jane bhai tui rag korle tor ma kikore same ghore thake. ami ekbar dekhechi bhai tor frustration. ota dekhei amar hoye geche. thank you. hihi moja korsi. areh rege keno ebaba ke khepalo toke ami tar pindi chotke dibo bole dilum grahhh. areh dekh bhai jodi kono manush (except tor ma) jodi khepiye thake toke take bole madarchod, bokachoda, dhemni magir pocha dim pod mere dim fatiye debo khankir pola guder chola thouachoda banchod besshabani kuttachoda hotocchara magi gaarkhana r defect mal, eta bole move on that simple.]",
      images: []
    },
    bored: {
      message: "[this is your sign to rewatch we are, fish upon the sky, last twilight, high school frenemy and more!]",
      images: [
        "https://i.ibb.co/39D6MGPg/71d318f6dea89c1b9db856c1d314f69a.jpg",
        "https://i.ibb.co/0y2TX63Z/74b2cd2f019747b383c52b9894daf015.jpg",
        
"https://i.ibb.co/Gf8SyYVH/10ce0518d1027e8b639eecb2399d2082.jpg",
        
"https://i.ibb.co/SwmMj5tR/4bf4be7fccd38f613adc0a595f80b2cc.jpg"
      ]
    }
  };

  const folderData = folders[folder];
  contentArea.innerHTML += `<p>${folderData.message}</p>`;

  if (folderData.images) {
    folderData.images.forEach(src => {
      contentArea.innerHTML += `<img src="${src}" alt="pic">`;
    });
  }

  if (folderData.audios) {
    folderData.audios.forEach(src => {
      contentArea.innerHTML += `<audio controls src="${src}"></audio>`;
    });
  }

  document.getElementById("folders-screen").classList.add("hidden");
  document.getElementById("folder-content").classList.remove("hidden");
}