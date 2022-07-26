//variables for characterBanners
var fiveCharOneWin = [
    "Kaedehara Kazuha"
];
var fiveCharTwoWin = [
    "Klee"
];
var fourCharWin = [
    "Shikanoin Heizhou",
    "Ningguang",
    "Thoma"
];
var fiveCharLose = [
    "Jean",
    "Diluc",
    "Keqing",
    "Qiqi",
    "Mona"
];
var fourCharLose = [
    "Sayu",
    "Sucrose",
    "Chongyun",
    "Diona",
    "Rosaria",
    "Beidou",
    "Fishcl",
    "Kujou Sara",
    "Kuki Shinobu",
    "Razor",
    "Gorou",
    "Noelle",
    "Yun Jin",
    "Barbara",
    "Xinqiu",
    "Bennett",
    "Xiangling",
    "Xinyan",
    "Yanfei",
    "Favovius Bow",
    "Rust",
    "Sacrificial Bow",
    "The Stringless",
    "Eye of Perception",
    "Favonius Codex",
    "Sacrificial Fragments",
    "The Widsith",
    "Favonius Greatsword",
    "Rainslasher",
    "Sacrificial Greatsword",
    "The Bell",
    "Dragon's Bane",
    "Favonius Lance",
    "Favonius Sword",
    "Lion's Roar",
    "Sacrificial Sword",
    "The Flute"
];
var threePool = [
    "Raven Bow",
    "Sharpshooter's Oath",
    "Slingshot",
    "Emerald Orb",
    "Magic Guide",
    "Thrilling Tales of Dragon Slayers",
    "Bloodtainted Greatsword",
    "Debate Club",
    "Ferrous Shadow",
    "Black Tassel",
    "Cool Steel",
    "Harbinger of Dawn",
    "Skyrider Sword"
];
//variables for weaponBanner
var fiveWeapWin = [
    "Freedom-Sworn",
    "Lost Prayer to the Sacred Winds"
];
var fourWeapWin = [
    "The Alley Flash",
    "Mitternachts Waltz",
    "Rain Slasher",
    "Favonius Lance",
    "The Widsith"
];
var fiveWeapLose = [
    "Amo's Bow",
    "Skyward Harp",
    "Skyward Atlas",
    "Skyward Pride",
    "Wolf's Gravestone",
    "Primordial Jade Winged-Spear",
    "Skyward Spine",
    "Aquila Favonia",
    "Skyward Blade"
];
var fourWeapLose = [
    "Sayu",
    "Sucrose",
    "Chongyun",
    "Diona",
    "Rosaria",
    "Beidou",
    "Fishcl",
    "Kujou Sara",
    "Kuki Shinobu",
    "Razor",
    "Gorou",
    "Ningguang",
    "Noelle",
    "Yun Jin",
    "Barbara",
    "Xinqiu",
    "Bennett",
    "Thoma",
    "Xiangling",
    "Xinyan",
    "Yanfei",
    "Favovius Bow",
    "Rust",
    "Sacrificial Bow",
    "The Stringless",
    "Eye of Perception",
    "Favonius Codex",
    "Sacrificial Fragments",
    "Favonius Greatsword",
    "Sacrificial Greatsword",
    "The Bell",
    "Dragon's Bane",
    "Favonius Sword",
    "Lion's Roar",
    "Sacrificial Sword",
    "The Flute"
];
//pity variables
var fiveStarPity = localStorage.getItem('fiveStarPity');
var fourStarPity = localStorage.getItem('fourStarPity');
var clickSound = new Audio('./assets/audios/click_sound.mp3');
var videoContainer = document.getElementById('videoContainer');
var video = document.getElementById('video');
var resultContainer = document.getElementById('resultContainer');
var inventory = [];
//function for getting one item at a time
function getRandom(item) {
    return item[Math.floor(Math.random() * item.length)];
}
//disabling summon button for 2s
function disabledBtn() {
    var summonButton = document.getElementById('summonButton');
    summonButton.disabled = true;
    summonButton.classList.add('disabled');
    setTimeout(function() {
        summonButton.disabled = false;
        summonButton.classList.remove('disabled');
    }, 350);
}
//to update any new result coming inside inventory;
function pushinventory(items) {
    var duplicate = false;
    inventory.forEach(element => {
        if(items == element[0]) {
            element[1]++;
            duplicate = true;
        }
    });
    if(!duplicate) {
        inventory.push([items, 1]);
    }
    itemsName();
}
function itemsName() {
    var cardBg = document.getElementById('cardBackground');
    var dateToday = new Date().toLocaleString();
    inventory.forEach(element => {
        if(element[0] == "Raven Bow") {
            cardBg.src = './assets/images/card/main/threeStar/ravenbow.png';
        } else if(element[0] == "Sharpshooter's Oath") {
            cardBg.src = './assets/images/card/main/threeStar/sharpshootersoath.png';
        } else if(element[0] == "Slingshot") {
            cardBg.src = './assets/images/card/main/threeStar/slingshot.png';
        } else if(element[0] == "Emerald Orb") {
            cardBg.src = './assets/images/card/main/threeStar/emeraldorb.png';
        } else if(element[0] == "Magic Guide") {
            cardBg.src = './assets/images/card/main/threeStar/magicguide.png';
        } else if(element[0] == "Thrilling Tales of Dragon Slayers") {
            cardBg.src = './assets/images/card/main/threeStar/thrillingtalesofdragonslayers.png';
        } else if(element[0] == "Bloodtainted Greatsword") {
            cardBg.src = './assets/images/card/main/threeStar/bloodtaintedsword.png';
        } else if(element[0] == "Debate Club") {
            cardBg.src = './assets/images/card/main/threeStar/debateclub.png';
        } else if(element[0] == "Ferrous Shadow") {
            cardBg.src = './assets/images/card/main/threeStar/ferrousshadow.png';
        } else if(element[0] == "Black Tassel") {
            cardBg.src = './assets/images/card/main/threeStar/blacktassel.png';
        } else if(element[0] == "Cool Steel") {
            cardBg.src = './assets/images/card/main/threeStar/coolsteel.png';
        } else if(element[0] == "Harbinger of Dawn") {
            cardBg.src = './assets/images/card/main/threeStar/harbingerofdawn.png';
        } else if(element[0] == "Skyrider Sword") {
            cardBg.src = './assets/images/card/main/threeStar/skyridersword.png';
        } else {
            return;
        }
    })
}
//eventListener for video ending
video.addEventListener('ended', e => {
    videoContainer.style.display = 'none';
    video.src = '';
    resultContainer.style.display = 'block';
});
//if selectedBanner is kazuha
function kazuha() {
    var result = [];
    var isFeaturedFive = localStorage.getItem('isFeaturedFive');
    var isFeaturedFour = localStorage.getItem('isFeaturedFour');
    var flip = Math.random();
    if(fiveStarPity == 89) {
        if(flip <= 1) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            fourStarPity = 0;
            localStorage.setItem('fourStarPity', 0);
        }
    } else if(fiveStarPity == 88) {
        if(flip <= .941) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .52) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 87) {
        if(flip <= .883) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 86) {
        if(flip <= .824) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 85) {
        if(flip <= .766) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 84) {
        if(flip <= .707) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 83) {
        if(flip <= .649) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 82) {
        if(flip <= .590) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 81) {
        if(flip <= .532) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 80) {
        if(flip <= .473) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 79) {
        if(flip <= .415) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= 1) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 78) {
        if(flip <= .356) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .52) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 77) {
        if(flip <= .298) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 76) {
        if(flip <= .239) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 75) {
        if(flip <= .181) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 74) {
        if(flip <= .122) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 73) {
        if(flip <= .064) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                video.src = './assets/videos/four.mp4';
                videoContainer.style.display = 'block';
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity <= 72){
        if(flip <= .006) {
            fiveStarPity = -1;
            video.src = './assets/videos/five.mp4';
            videoContainer.style.display = 'block';
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharOneWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharOneWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(fourStarPity == 9) {
                if(flip <= 1) {
                    fourStarPity = -1;
                    video.src = './assets/videos/four.mp4';
                    videoContainer.style.display = 'block';
                    localStorage.setItem('fourStarPity', -1);
                    if(isFeaturedFour == 0) {
                        if(flip > 0.5) {
                            result.push(getRandom(fourCharWin));
                            localStorage.setItem('isFeaturedFour', 0);
                        } else {
                            result.push(getRandom(fourCharLose));
                            localStorage.setItem('isFeaturedFour', 1);
                        }
                    } else {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    }
                } else {
                    result.push(getRandom(threePool));
                }
            } else if(fourStarPity == 8) {
                if(flip <= .52) {
                    fourStarPity = -1;
                    video.src = './assets/videos/four.mp4';
                    videoContainer.style.display = 'block';
                    localStorage.setItem('fourStarPity', -1);
                    if(isFeaturedFour == 0) {
                        if(flip > 0.5) {
                            result.push(getRandom(fourCharWin));
                            localStorage.setItem('isFeaturedFour', 0);
                        } else {
                            result.push(getRandom(fourCharLose));
                            localStorage.setItem('isFeaturedFour', 1);
                        }
                    } else {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    }
                } else {
                    result.push(getRandom(threePool));
                }
            } else {
                if(flip <= .051) {
                    fourStarPity = -1;
                    video.src = './assets/videos/four.mp4';
                    videoContainer.style.display = 'block';
                    localStorage.setItem('fourStarPity', -1);
                    if(isFeaturedFour == 0) {
                        if(flip > 0.5) {
                            result.push(getRandom(fourCharWin));
                            localStorage.setItem('isFeaturedFour', 0);
                        } else {
                            result.push(getRandom(fourCharLose));
                            localStorage.setItem('isFeaturedFour', 1);
                        }
                    } else {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    }
                } else {
                    result.push(getRandom(threePool));
                    video.src = './assets/videos/three.mp4';
                    videoContainer.style.display = 'block';
                }
            }
        }
    }
    pushinventory(result[0]);
    ++fiveStarPity;
    localStorage.setItem('fiveStarPity', fiveStarPity);
    ++fourStarPity;
    localStorage.setItem('fourStarPity', fourStarPity);
    disabledBtn();
    clickSound.play();
    clickSound.currentTime = 0;
};








//if selectedBanner is klee
function klee() {
    var isFeaturedFive = localStorage.getItem('isFeaturedFive');
    var isFeaturedFour = localStorage.getItem('isFeaturedFour');
    var flip = Math.random();
    if(fiveStarPity == 89) {
        if(flip <= 1) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            fourStarPity = 0;
            localStorage.setItem('fourStarPity', 0);
        }
    } else if(fiveStarPity == 88) {
        if(flip <= .941) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .52) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 87) {
        if(flip <= .883) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 86) {
        if(flip <= .824) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 85) {
        if(flip <= .766) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 84) {
        if(flip <= .707) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 83) {
        if(flip <= .649) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 82) {
        if(flip <= .590) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 81) {
        if(flip <= .532) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 80) {
        if(flip <= .473) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 79) {
        if(flip <= .415) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= 1) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 78) {
        if(flip <= .356) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .52) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 77) {
        if(flip <= .298) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 76) {
        if(flip <= .239) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 75) {
        if(flip <= .181) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 74) {
        if(flip <= .122) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity == 73) {
        if(flip <= .064) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(flip <= .051) {
                fourStarPity = -1;
                localStorage.setItem('fourStarPity', -1);
                if(isFeaturedFour == 0) {
                    if(flip > 0.5) {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    } else {
                        result.push(getRandom(fourCharLose));
                        localStorage.setItem('isFeaturedFour', 1);
                    }
                } else {
                    result.push(getRandom(fourCharWin));
                    localStorage.setItem('isFeaturedFour', 0);
                }
            } else {
                result.push(getRandom(threePool));
            }
        }
    } else if(fiveStarPity <= 72){
        if(flip <= .006) {
            fiveStarPity = -1;
            localStorage.setItem('fiveStarPity', -1);
            if(isFeaturedFive == 1) {
                result.push(getRandom(fiveCharTwoWin));
                localStorage.setItem('isFeaturedFive', 0);
            } else {
                if(flip > 0.5) {
                    result.push(getRandom(fiveCharTwoWin));
                    localStorage.setItem('isFeaturedFive', 0);
                } else {
                    localStorage.setItem('isFeaturedFive', 1);
                    result.push(getRandom(fiveCharLose));
                }
            }
        } else {
            if(fourStarPity == 9) {
                if(flip <= 1) {
                    fourStarPity = -1;
                    localStorage.setItem('fourStarPity', -1);
                    if(isFeaturedFour == 0) {
                        if(flip > 0.5) {
                            result.push(getRandom(fourCharWin));
                            localStorage.setItem('isFeaturedFour', 0);
                        } else {
                            result.push(getRandom(fourCharLose));
                            localStorage.setItem('isFeaturedFour', 1);
                        }
                    } else {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    }
                } else {
                    result.push(getRandom(threePool));
                }
            } else if(fourStarPity == 8) {
                if(flip <= .52) {
                    fourStarPity = -1;
                    localStorage.setItem('fourStarPity', -1);
                    if(isFeaturedFour == 0) {
                        if(flip > 0.5) {
                            result.push(getRandom(fourCharWin));
                            localStorage.setItem('isFeaturedFour', 0);
                        } else {
                            result.push(getRandom(fourCharLose));
                            localStorage.setItem('isFeaturedFour', 1);
                        }
                    } else {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    }
                } else {
                    result.push(getRandom(threePool));
                }
            } else {
                if(flip <= .051) {
                    fourStarPity = -1;
                    localStorage.setItem('fourStarPity', -1);
                    if(isFeaturedFour == 0) {
                        if(flip > 0.5) {
                            result.push(getRandom(fourCharWin));
                            localStorage.setItem('isFeaturedFour', 0);
                        } else {
                            result.push(getRandom(fourCharLose));
                            localStorage.setItem('isFeaturedFour', 1);
                        }
                    } else {
                        result.push(getRandom(fourCharWin));
                        localStorage.setItem('isFeaturedFour', 0);
                    }
                } else {
                    result.push(getRandom(threePool));
                }
            }
        }
    }
    pushinventory(result[i]);
    ++fiveStarPity;
    localStorage.setItem('fiveStarPity', fiveStarPity);
    ++fourStarPity;
    localStorage.setItem('fourStarPity', fourStarPity);
    disabledBtn();
    clickSound.play();
    clickSound.currentTime = 0;
}
//if selectedBanner is weapon
function weapon() {
    disabledBtn();
}
