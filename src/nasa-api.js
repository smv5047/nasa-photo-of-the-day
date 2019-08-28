import axios from "axios";

function getNasaImages(setter) {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=itRQxuvJNep1SF6dQaj115JTOV2iiyOkFeHRg9O8")
        .then(res =>setter(res.data))
        .catch(err => console.log(err))
}

export default getNasaImages