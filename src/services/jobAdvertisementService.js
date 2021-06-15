import axios from "axios"

export default class JobAdvertisement {
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/jobAdvertisements/findAllByActiveTrue")
    }

    findByIdAndActiveTrueOrderByCreatedTimeDesc(id){
        return axios.get("http://localhost:8080/jobAdvertisements/findAllByActiveTrueOrderByCreatedDateDesc?id=" + id)
    }

    findAllByEmployerIdAndActiveTrue(id){
        return axios.get("http://localhost:8080/jobAdvertisements/findAllByEmployer_IdAndActiveTrue?employerId=" + id)
    }

    addJobAdvertisement(jobAdvertisement){
        return axios.post("http://localhost:8080/jobAdvertisements/add", jobAdvertisement)
    }
}
