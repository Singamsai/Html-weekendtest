const button = document.getElementById('next_image');
const randomImage = document.getElementById('images');

async function getRandomimage(){
    const streamResponse = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const textbody = await streamResponse.text();
    const jsondata = JSON.parse(textbody);
    console.log(jsondata);
    randomImage.setAttribute('src', jsondata.message);
}