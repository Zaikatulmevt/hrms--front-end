import axios from "axios"

export default class Employer{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employer/getall")
    }

    // addEmployer(employer){
    //     return axios.post("http://localhost:8080/api/employer/add", employer)
    // }
}