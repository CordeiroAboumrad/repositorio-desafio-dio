const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
// const BASE_URL = 'https://thatcopy.github.io/catAPI/imgs/jpg/'
const catBtn = document.getElementById('change-cat')

const getCatApi =  async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        console.log(json);
        return json.webpurl;
    } catch(e) {
        console.log(e.message)
    }
}


const loadImg = async() => {
    const catImg = document.getElementById('cat')
    catImg.src = await getCatApi();
}

catBtn.addEventListener('click', loadImg)

loadImg();
