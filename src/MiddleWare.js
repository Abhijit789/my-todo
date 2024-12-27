import axios from "axios"

const serverURL="http://localhost:7000"
export function getAllItems(){
    const dateURL=`${serverURL}/items`
    return axios.get(dateURL)
}
export function postData(item){
    const dataURL=`${serverURL}/items`
    return axios.post(dataURL,item)
}