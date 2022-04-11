const { Giffer } = require('./index');

const myGiffer = new Giffer();

// Testings
(async () => {
    const hugGif = await myGiffer.getHug().then(result => result).catch(e => console.error(e));
    const patGif = await myGiffer.getPat().then(result => result).catch(e => console.error(e));
    const kissGif = await myGiffer.getKiss().then(result => result).catch(e => console.error(e));
    const cuddleGif = await myGiffer.getCuddle().then(result => result).catch(e => console.error(e));
    const memeGif = await myGiffer.getMeme().then(result => result).catch(e => console.error(e));

    console.log(hugGif);
    console.log(patGif);
    console.log(kissGif);
    console.log(cuddleGif);
    console.log(memeGif);
})()