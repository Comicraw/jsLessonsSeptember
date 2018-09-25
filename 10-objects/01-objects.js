var netflix = {
    id: 9,
    name: "Super Store",
    season1: {
        seasonInfo: {
            episodeInfo: [
                { episode: 1, episodeName: "Pilot" },
                { episode: 2, episodeName: "Magazine Profile" },
                { episode: 3, episodeName: "Shots and Salsa" },
                { episode: 4, episodeName: "Mannequin" },
                { episode: 5, episodeName: "Shoplifter" },
                { episode: 6, episodeName: "Secret Shopper" },
                { episode: 7, episodeName: "Color Wars" },
                { episode: 8, episodeName: "Wedding Day Sale" },
                { episode: 9, episodeName: "All-Nighter" },
                { episode: 10, episodeName: "Demotion" },
                { episode: 11, episodeName: "Labor" }
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log(`Tonight we are going to watch episode ${netflix.season1.seasonInfo.episodeInfo[4].episode} of ${netflix.name} called ${netflix.season1.seasonInfo.episodeInfo[4].episodeName}.`)
// let = 'season 1';
// let episodeInfo = {episode: 1, episodeName: 'Pilot'}

console.log('All data: ' + netflix);

// console.log('id:', netflix.id);
console.log(netflix.season1.seasonInfo)
console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName)

// use . for objects and []brackets when it was an array
//going 1 indent in you can use .
//if going 2 indents in you can use 2 . or 1 . and  1 [] or 2 []

//challenge
//pick an episode to show.
//using dot notation, walk through the netflix object and print of both the episode and the episode name

//json object below, be aware these exist
var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}

//space jam object below
let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevel: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// console.log(spaceJam.toonSquad.bird)
//tweety

// console.log(Object.keys(spaceJam))
// [ 'toonSquad', 'monstars', 'nbaPlayers' ]

// console.log(Object.keys(spaceJam.toonSquad))
// [ 'human',
//   'rabbit1',
//   'rabbit2',
//   'duck',
//   'tDevel',
//   'bird',
//   'cat',
//   'pig' ]

// console.log(Object.keys(spaceJam.toonSquad.duck))
// [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

// console.log(Object.values(spaceJam.toonSquad))
// [ 'Michael Jordan',
//   'Bugs Bunny',
//   'Lola Bunny',
//   'Daffy Duck',
//   'Tasmanian Devil',
//   'Tweety',
//   'Sylvester',
//   'Porky Pig' ]

// console.log(Object.keys(spaceJam.toonSquad).toString());
// human,rabbit1,rabbit2,duck,tDevel,bird,cat,pig

//square bracket notation -- like . notation, a method for grabbing object values

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

// console.log(garden['size']);
// 10

// console.log(garden.vegetable);
// zucchini

// let key = 'vegetable'

console.log(garden['vegetable']);
// zucchini

let baking = {}
baking.banana = 'banana bread is yummy!';
baking['zucchini'] = 'better make some zucchini bread!';

console.log(Object.keys(baking));
// [ 'banana', 'zucchini' ]

console.log(Object.values(baking));
// [ 'banana bread is yummy!', 'better make some zucchini bread!' ]

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: {
        units: 'inches'
    }
}

let key = 'water';

// console.log(Object.keys(garden))
// [ 'vegetable', 'flower', 'fruit', 'water', 'sun', 'size' ]

Object.keys(garden).forEach(g => {
    if (key === g) {
        console.log(garden[key])
    }
})