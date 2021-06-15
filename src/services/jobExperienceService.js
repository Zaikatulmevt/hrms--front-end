import axios from "axios";

export default class JobExperienceService{
    getJobExperienceServicesByCvId(cvId){
        return axios.get("http://localhost:8080/api/jobexperience/findAllByCvIdOrderByFinishDateDesc?cvId=" + cvId)
    }

    addJobExperience(jobExperience){
        return axios.post("http://localhost:8080/api/jobexperience/add", jobExperience)
    }
}