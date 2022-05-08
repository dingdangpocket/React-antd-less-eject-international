import axios from "axios"
const other = {
    getData(){
        return axios({
            method:"POST",
            url:"/api/v1/bpi/currentprice.json",
            headers: {
                'Content-Type': 'application/json'
            },
        })
    },
}
export default other;

