import axios from "axios";

export default class TechOrProgrammingLangService{
    getAllByCvId(cvId){
        return axios.get("http://localhost:8080/api/technologiesandprogramminglanguage/findByCvId?id=" + cvId)
    }

    addTechOrProgrammingLangService(techOrProgrammingLangService){
        return axios.post("http://localhost:8080/api/technologiesandprogramminglanguage/add", techOrProgrammingLangService)
    }
}
