'use strict';

const allCharacters = [
    "Alhaitham",
    "Albedo",
    "Aloy",
    "Amber",
    "Arataki Itto",
    "Baizhu",
    "Barbara",
    "Beidou",
    "Bennett",
    "Candace",
    "Charlotte",
    "Chongyun",
    "Collei",
    "Cyno",
    "Dehya",
    "Diluc",
    "Diona",
    "Dori",
    "Eula",
    "Faruzan",
    "Fischl",
    "Freminet",
    "Furina",
    "Ganyu",
    "Gorou",
    "Hu Tao",
    "Jean",
    "Kaedehara Kazuha",
    "Kaeya",
    "Kamisato Ayaka",
    "Kamisato Ayato",
    "Kaveh",
    "Keqing",
    "Kirara",
    "Klee",
    "Kujou Sara",
    "Kuki Shinobu",
    "Layla",
    "Lisa",
    "Lynette",
    "Lyney",
    "Mika",
    "Mona",
    "Nahida",
    "Navia",
    "Neuvillette",
    "Nilou",
    "Ningguang",
    "Noelle",
    "Qiqi",
    "Raiden Shogun",
    "Razor",
    "Rosaria",
    "Sangonomiya Kokomi",
    "Sayu",
    "Shenhe",
    "Shikanoin Heizou",
    "Sucrose",
    "Tartaglia",
    "Thoma",
    "Tighnari",
    "Traveler",
    "Venti",
    "Wanderer",
    "Wriothesley",
    "Xiangling",
    "Xiao",
    "Xingqiu",
    "Xinyan",
    "Yae Miko",
    "Yanfei",
    "Yaoyao",
    "Yelan",
    "Yoimiya",
    "Yun Jin",
    "Zhongli"
];

var statsByCharacter = {
    "Traveler": {
        "constellation": "Viator"
    },
    "Albedo": {
        "constellation": "Princeps Cretaceus"
    },
    "Alhaitham": {
        "constellation": "Vultur Volans"
    },
    "Aloy": {
        "constellation": "Nora Fortis"
    },
    "Amber": {
        "constellation": "Lepus"
    },
    "Arataki Itto": {
        "constellation": "Taurus Iracundus"
    },
    "Baizhu": {
        "constellation": "Lagenaria"
    },
    "Barbara": {
        "constellation": "Crater"
    },
    "Beidou": {
        "constellation": "Victor Mare"
    },
    "Bennett": {
        "constellation": "Rota Calamitas"
    },
    "Candace": {
        "constellation": "Sagitta Scutum"
    },
    "Charlotte": {
        "constellation": "Hualina Veritas"
    },
    "Chevreuse": {
        "constellation": "Sclopetum Ensiferum"
    },
    "Chongyun": {
        "constellation": "Nubis Caesor"
    },
    "Collei": {
        "constellation": "Leptailurus Cervarius"
    },
    "Cyno": {
        "constellation": "Lupus Aureus"
    },
    "Dehya": {
        "constellation": "Mantichora"
    },
    "Diluc": {
        "constellation": "Noctua"
    },
    "Diona": {
        "constellation": "Feles"
    },
    "Dori": {
        "constellation": "Magicae Lucerna"
    },
    "Eula": {
        "constellation": "Aphros Delos"
    },
    "Faruzan": {
        "constellation": "Flosculi Implexi"
    },
    "Fischl": {
        "constellation": "Corvus"
    },
    "Freminet": {
        "constellation": "Automaton"
    },
    "Furina": {
        "constellation": "Animula Choragi"
    },
    "Gaming": {
        "constellation": "Leo Expergiscens"
    },
    "Ganyu": {
        "constellation": "Sinae Unicornis"
    },
    "Gorou": {
        "constellation": "Canis Bellatoris"
    },
    "Hu Tao": {
        "constellation": "Papilio Charontis"
    },
    "Jean": {
        "constellation": "Leo Minor"
    },
    "Kaedehara Kazuha": {
        "constellation": "Acer Palmatum"
    },
    "Kaeya": {
        "constellation": "Pavo Ocellus"
    },
    "Kamisato Ayaka": {
        "constellation": "Grus Nivis"
    },
    "Kamisato Ayato": {
        "constellation": "Cypressus Custos"
    },
    "Kaveh": {
        "constellation": "Paradisaea"
    },
    "Keqing": {
        "constellation": "Trulla Cementarii"
    },
    "Kirara": {
        "constellation": "Arcella"
    },
    "Klee": {
        "constellation": "Trifolium"
    },
    "Kujou Sara": {
        "constellation": "Flabellum"
    },
    "Kuki Shinobu": {
        "constellation": "Tribulatio Demptio"
    },
    "Layla": {
        "constellation": "Luscinia"
    },
    "Lisa": {
        "constellation": "Tempus Fugit"
    },
    "Lumine": {
        "constellation": "Viatrix"
    },
    "Lynette": {
        "constellation": "Felis Alba"
    },
    "Lyney": {
        "constellation": "Felis Fuscus"
    },
    "Mika": {
        "constellation": "Palumbus"
    },
    "Mona": {
        "constellation": "Astrolabos"
    },
    "Nahida": {
        "constellation": "Sapientia Oromasdis"
    },
    "Navia": {
        "constellation": "Rosa Multiflora"
    },
    "Neuvillette": {
        "constellation": "Leviathan Judicator"
    },
    "Nilou": {
        "constellation": "Lotos Somno"
    },
    "Ningguang": {
        "constellation": "Opus Aequilibrium"
    },
    "Noelle": {
        "constellation": "Parma Cordis"
    },
    "Qiqi": {
        "constellation": "Pristina Nola"
    },
    "Raiden Shogun": {
        "constellation": "Imperatrix Umbrosa"
    },
    "Razor": {
        "constellation": "Lupus Minor"
    },
    "Rosaria": {
        "constellation": "Spinea Corona"
    },
    "Sangonomiya Kokomi": {
        "constellation": "Dracaena Somnolenta"
    },
    "Sayu": {
        "constellation": "Nyctereutes Minor"
    },
    "Shenhe": {
        "constellation": "Crista Doloris"
    },
    "Shikanoin Heizou": {
        "constellation": "Cervus Minor"
    },
    "Sucrose": {
        "constellation": "Ampulla"
    },
    "Tartaglia": {
        "constellation": "Monoceros Caeli"
    },
    "Thoma": {
        "constellation": "Rubeum Scutum"
    },
    "Tighnari": {
        "constellation": "Vulpes Zerda"
    },
    "Venti": {
        "constellation": "Carmen Dei"
    },
    "Wanderer": {
        "constellation": "Peregrinus"
    },
    "Wriothesley": {
        "constellation": "Cerberus"
    },
    "Xiangling": {
        "constellation": "Trulla"
    },
    "Xianyun": {
        "constellation": "Grus Serena"
    },
    "Xiao": {
        "constellation": "Alatus Nemeseos"
    },
    "Xingqiu": {
        "constellation": "Fabulae Textile"
    },
    "Xinyan": {
        "constellation": "Fila Ignium"
    },
    "Yae Miko": {
        "constellation": "Divina Vulpes"
    },
    "Yanfei": {
        "constellation": "Bestia Iustitia"
    },
    "Yaoyao": {
        "constellation": "Osmanthus"
    },
    "Yelan": {
        "constellation": "Umbrabilis Orchis"
    },
    "Yoimiya": {
        "constellation": "Carassius Auratus"
    },
    "Yun Jin": {
        "constellation": "Opera Grandis"
    },
    "Zhongli": {
        "constellation": "Lapis Dei"
    }
}

const fs = require('fs');
const https = require("https");
const request = require("request");
const puppeteer = require('puppeteer');
const { JSDOM } = require("jsdom");

/* ============================================================
    Promise-Based Download Function
============================================================ */

const download = (url, destination) => new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination); // tao file
    console.log(url, destination);

    https.get(url, response => {
        response.pipe(file); // dua info vao file

        file.on('finish', () => {
            file.close(resolve(true));
        }); // tat file
    }).on('error', error => {
        fs.unlink(destination);

        reject(error.message);
    });
});

/* function download(uri, filename, callback) {
    console.log(JSON.stringify(uri));
    request.head(uri, function(err, res, body) {  
        const file = fs.createWriteStream(filename);
        request(uri)
            .pipe(file)
            .on('close', callback);
    });
};
 */
/* ============================================================
    Download All Images
============================================================ */



(async function async() {
    const browser = await puppeteer.launch({headless: "new"});
    for (let character of allCharacters) {
        /* let { window } = new JSDOM('https://genshin-impact.fandom.com/wiki/' + character + '/Gallery', {
            runScripts: "dangerously",
        });
        let document = window.document;
        console.log(document.getElementById("#" + character + "_Wish-png > a > img").src); */
        if (["Traveler", "Gaming", "Xianyun", "Dainsleif", "Chevreuse"].indexOf(character) > -1) continue;

        const constellation = statsByCharacter[character].constellation.split(" ").join("_");
        character = character.split(" ").join("_");

        const page = await browser.newPage();
        console.log(constellation, 'https://genshin-impact.fandom.com/wiki/' + character + '/Gallery');
        await page.goto('https://genshin-impact.fandom.com/wiki/' + character + '/Gallery', { autoScroll: true, waitUntil: "domcontentloaded" });
        const [wishUrl, constellationUrl, nameCardUrl, sideIconUrl] = await page.evaluate(async(_, __) => {
            /* function delay(time) {
                return new Promise(function(resolve) { 
                    setTimeout(resolve, time)
                });
            }
            await delay(20000); */
            let _wishUrl = document.querySelector("#" + _ + "_Wish-png > a:nth-child(1) > img").getAttribute("data-src").split(".png")[0] + ".png";
            let _constellationUrl = document.querySelector("#" + __ + "_Shape-png > a:nth-child(1) > img").getAttribute("data-src").split(".png")[0] + ".png";
            let _nameCardUrl = document.querySelector("#gallery-1 > div:nth-child(2) > div:nth-child(1) > div > a > img").getAttribute("data-src").split(".png")[0] + ".png";
            let _sideIconUrl = document.querySelector("#" + _ + "_Side_Icon-png > a > img").getAttribute("data-src").split(".png")[0] + ".png";
            return [_wishUrl, _constellationUrl, _nameCardUrl, _sideIconUrl];
        }, character, constellation);
        /* download(wishUrl, "./assets/full-wish/" + character + "-full-wish.png");
        download(constellationUrl, "./assets/constellations/" + character + "-constellation.png");
        download(nameCardUrl, "./assets/name-cards/" + character + "-name-card.png"); */
        download(sideIconUrl, "./assets/side-icons/" + character + "-side-icon.png");
        await page.close();
    }
    await browser.close();
})();