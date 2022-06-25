import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8083",
})

export const uploadFile = (data) => {
    console.log(data)
    return axios.post("http://localhost:8083/upload/", data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

}
