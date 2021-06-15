import axios from "axios";

export default class CvService{
    getCvs(){
        return axios.get("http://localhost:8080/api/cv/getall")
    }

    getCvsByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/cv/findAllByJobSeekerId?jobSeekerId=" + jobSeekerId)
    }

    getCvByCvId(cvId){
        return axios.get("http://localhost:8080/api/cv/findByCvId?cvId=" + cvId)
    }

    addCv(cv){
        return axios.post("http://localhost:8080/api/cv/add"+ cv)
    }
}