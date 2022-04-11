<div align="center">
    <br />
    <p>
        <a href="https://nekopara.com/en/introduction_en"><img src="https://cdn.discordapp.com/attachments/670181225477963776/960575986930434068/nekoparagifs.png" /></a>
    </p>
    <br />
    <p>
        <a href="https://discord.gg/FyrQgpeSnR"><img src="https://img.shields.io/discord/605900262581993472?color=5865F2&logo=discord&logoColor=white" alt="Discord Server" /></a>
        <a href="https://www.npmjs.com/package/nekoparagifs"><img src="https://img.shields.io/npm/v/nekoparagifs.svg?maxAge=3600" alt="npm version" /></a>
        <a href="https://www.npmjs.com/package/nekoparagifs"><img src="https://img.shields.io/npm/dt/nekoparagifs.svg?maxAge=3600" alt="npm downloads" /></a>
    </p>
</div>

> A package to get random NekoPARA GIFs.
## Utilisation and Examples
> To install it, run the following command:
```batch
npm i nekoparagifs
```
> Code example:
```js
const nekoparagifs = require('nekoparagifs');

// Let's initialize the Giffer!
const myGiffer = new nekoparagifs.Giffer();

// Now let's log and get some gifs!
(async () => {
    const hugGif = await myGiffer.getHug().then(result => result).catch(e => console.error(e));
    const patGif = await myGiffer.getPat().then(result => result).catch(e => console.error(e));
    const kissGif = await myGiffer.getKiss().then(result => result).catch(e => console.error(e));
    const cuddleGif = await myGiffer.getCuddle().then(result => result).catch(e => console.error(e));

    // Log them or do whatever you want with them!
    console.log(`HugGif: "${hugGif}"\nPatGif: "${patGif}"\nKissGif: "${kissGif}"\nCuddleGif: "${cuddleGif}"`)
})()
```
## What's New?
> In 0.1.31, we added **memeGifs**! Use them with:
```js
Giffer.getMeme();
```
> We added some new gifs!
## Special thanks
> Special thanks to  [B1rtek](https://www.youtube.com/channel/UCzKinHghI5ITVXt4fndkrRw) for giving me a lot of GIFs for the package!
## Additionnal informations
> If you find a bug or have a suggestion please open an [Issue](https://github.com/TheDogHusky/nekoparagifs/issues) in the [Github](https://github.com/TheDogHusky/nekoparagifs) or send me an email!
> **We are not responsible for what you do with the package!**
> __This package is under GNU General Public License 3.0__