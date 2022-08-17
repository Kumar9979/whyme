import axios from "axios"
import {api} from "./api"

export const jsonApi = ()=>{
    return api.get()
}