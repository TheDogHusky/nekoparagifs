"use-strict";

/**
 * @author ClassyCrafter
 * @description A package to get random for NekoPARA Universe
 * @version 0.1.21
 * @license GNU-3.0
 */



const hugGifs = [
    "https://c.tenor.com/znURt9fG-KcAAAAC/anime-hug-anime-nekopara.gif",
    "https://c.tenor.com/EpmODUIRch8AAAAd/nekopara-chocola.gif", 
    "https://c.tenor.com/zjf8LpsFdBkAAAAM/chocola-vanilla.gif", 
    "https://c.tenor.com/NE54PXHDQ8sAAAAM/chocola-vanilla.gif",
    "https://3.bp.blogspot.com/-EYQHZ13o2tU/XjikYgxj4TI/AAAAAAAByDA/ZMC6F0NHBg0KLy_hI6e_f0hnfUriH6etgCKgBGAsYHg/s1600/Nekopara%2B-%2BEpisode%2B4%2B-%2BCacao%2BVanilla%2BHug%2BChocola.gif",
    "https://acegif.com/wp-content/gif/anime-hug-55.gif",
    "https://4.bp.blogspot.com/-TqHxZicsex0/XjDOc2XCvJI/AAAAAAABxnY/1er3fpNUWaghUdTYnNxpsXvgtuj7mayMACKgBGAsYHg/s1600/Nekopara%2B-%2BEpisode%2B3%2B-%2BChocola%2BHugs%2BStray.gif",
    "https://c.tenor.com/WvWIdHc4RcMAAAAC/cinnamon-maple.gif",
    "https://c.tenor.com/er-bRdahGsoAAAAC/chocola-kashou.gif",
    "https://c.tenor.com/eWN-9473eYMAAAAC/chocola-cacao.gif",
    "https://c.tenor.com/6nZ5yOA-av4AAAAC/cacao-shigure.gif",
    "https://c.tenor.com/Dib7E_QAgm4AAAAC/chocola-vanilla.gif",
    "https://c.tenor.com/X9jHE2ReNFMAAAAC/chocola-cacao.gif",
    "https://c.tenor.com/ABL6eJAYkYEAAAAC/chocola-cacao.gif",
    "https://c.tenor.com/a8IKk6mINHMAAAAC/cacao-chocola.gif",
    "https://c.tenor.com/ut7VdsSFjEMAAAAC/chocola-vanilla.gif",
    "https://c.tenor.com/R0ghzmd8qX8AAAAC/shigure-maple.gif",
    "https://c.tenor.com/Q1oaZM8mbfQAAAAC/chiyo-cacao.gif",
    "https://c.tenor.com/udA2QWUHst8AAAAC/chocola-vanilla.gif",
    "https://c.tenor.com/cqrKEII-huIAAAAC/coconut-azuki.gif"
];
const patGifs = [
    "https://c.tenor.com/ChgNSdlEaQcAAAAC/anime-neko-para.gif",
    "https://c.tenor.com/NzEh-4b8THwAAAAC/anime-neko.gif",
    "https://c.tenor.com/GwQNOunzrCsAAAAM/chocola-vanilla.gif",
    "https://storage.qoo-static.com/album/dfb/f99/b3383cf874eaa3985cb2c02b4b.gif",
    "https://media1.tenor.com/images/eea25cfcb9ff84c061b68ef6a36388f6/tenor.gif",
    "https://media1.tenor.com/images/483d3111c21c0506a67525fbbc9b10ce/tenor.gif",
    "https://c.tenor.com/taRnvkLdm-oAAAAC/cacao-azuki.gif",
    "https://media1.tenor.com/images/7a3becca07d971f7c381cadafbad689c/tenor.gif",
    "https://media1.tenor.com/images/ec58606b91025fd6fc674db2866de980/tenor.gif",
    "https://media1.tenor.com/images/9f926bf32120bcf3fbebadfecd9a0619/tenor.gif"
];
const kissGifs = [
    "https://c.tenor.com/3Y9B4si5mR4AAAAC/maple-cinnamon.gif",
    "https://media1.tenor.com/images/b1726d7c03317421fb504faa2deb674f/tenor.gif"
]
const cuddleGifs = [
    "https://media1.tenor.com/images/b9a38b215d3fc3ba3439f681fbf24bee/tenor.gif",
    "https://media1.tenor.com/images/22b7f1a86b6a882dfc854c959007ea0f/tenor.gif",
    "https://media1.tenor.com/images/5b33195c19399b897307dd030066babe/tenor.gif",
    "https://media1.tenor.com/images/00e36bd813f89de78db14ec7999440c0/tenor.gif",
    "https://media1.tenor.com/images/a35dcf44a727518cf4c148587f71bbd8/tenor.gif",
    "https://media1.tenor.com/images/8223cf0223023dce3ac7f28c2885874b/tenor.gif",
    "https://media1.tenor.com/images/e590d20645d330dabb99e14121822470/tenor.gif",
    "https://media1.tenor.com/images/d240ea9d07e513e696892a764a8a8acf/tenor.gif",
    "https://media1.tenor.com/images/5aa0da336b4d96c4ba836ea0d8cd4984/tenor.gif"
]

/**
 * Represents a giffer, to interact with all the gifs!
 */
class Giffer {
    /**
     * No options required
     */
    constructor() {

    };
    /**
     * Get a random hug gif
     * @returns {Promise} The result of the random gif as a promise
     */
    getHug() {
        const p = new Promise(async (resolve, reject) => {
            try {
                const rnumber = Math.floor(Math.random() * hugGifs.length);
                const returned = hugGifs[rnumber];
                resolve(returned);
            } catch(err) {
                reject(err);
            };
        });
        return p;
    };
    /**
     * Get a random pat gif
     * @returns {Promise} The result of the random gif as a promise
     */
    getPat() {
        const p = new Promise(async (resolve, reject) => {
            try {
                const rnumber = Math.floor(Math.random() * patGifs.length);
                const returned = patGifs[rnumber];
                resolve(returned);
            } catch(err) {
                reject(err);
            };
        });
        return p;
    };
    /**
     * Get a random kiss gif
     * @returns {Promise} The result of the random gif as a promise
     */
    getKiss() {
        const p = new Promise(async (resolve, reject) => {
            try {
                const rnumber = Math.floor(Math.random() * kissGifs.length);
                const returned = kissGifs[rnumber];
                resolve(returned);
            } catch(err) {
                reject(err);
            };
        });
        return p;
    };
    /**
     * Get a random cuddle gif
     * @returns {Promise} The result of the random gif as a promise
     */
    getCuddle() {
        const p = new Promise(async (resolve, reject) => {
            try {
                const rnumber = Math.floor(Math.random() * cuddleGifs.length);
                const returned = cuddleGifs[rnumber];
                resolve(returned);
            } catch(err) {
                reject(err);
            };
        });
        return p;
    };
};

module.exports.Giffer = Giffer;