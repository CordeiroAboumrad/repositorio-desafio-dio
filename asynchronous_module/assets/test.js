import fetch from "node-fetch";
const BASE_URL = "https://thatcopy.pw/catapi/rest/";
// const BASE_URL = "https://thatcopy.github.io/catAPI/imgs/jpg/"


const getCatApi =  async () => {
    // const head = {
    //     method: 'GET',
    //     mode: 'no-cors'
    // }
    const data = await fetch(BASE_URL)
    .then((result) => result.json())
    .then((res) => console.log(res.webpurl))
    .catch((error) => console.log(error.message))
    return data.webpurl;
}

const image = async () => {
    console.log(await getCatApi())
}

image()
