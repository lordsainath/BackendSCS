const RandomCatImg = require('random-cat-img');

const getRandomCat =  async ()=>{
    const data = await RandomCatImg();
    console.log(data)
    console.log(data.message)
}


// Another way to create a function

// (async () => {
//     const data = await RandomCatImg();
//     console.log(data.message); // https://cdn.sefinek.net/images/animals/cat/cat-1362565-min.jpg
// })();


getRandomCat()