'use strict';

const allCharacters = [
    "Alhaitham",
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

const fs = require('fs');
const https = require('https');
const puppeteer = require('puppeteer');
const { JSDOM } = require("jsdom");

/* ============================================================
    Promise-Based Download Function
============================================================ */

const download = (url, destination) => new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination); // tao file

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

/* ============================================================
    Download All Images
============================================================ */



(async function async() {
    const browser = await puppeteer.launch({headless: false});
    for (let character of allCharacters) {
        let { window } = new JSDOM('https://genshin-impact.fandom.com/wiki/' + character + '/Gallery', {
            runScripts: "dangerously",
        });
        let document = window.document;
        console.log(document.getElementById("#" + character + "_Wish-png > a > img").src);
        const page = await browser.newPage();

        let wishUrl, constellationUrl;
        console.log(character, 'https://genshin-impact.fandom.com/wiki/' + character + '/Gallery');

        await page.goto('https://genshin-impact.fandom.com/wiki/' + character + '/Gallery');
        const images = await page.evaluate(() => {
            wishUrl = document.getElementById("#" + character + "_Wish-png > a > img").src;
            // constellationUrl = document.getElementById("#Rosa_Multiflora_Shape-png > a > img").src;
        });
        await download(wishUrl, "./assets/full-wish/" + character + "-full-wish.png");
        await page.close();
    }
    await browser.close();
})();