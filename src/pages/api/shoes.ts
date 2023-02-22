import { shoeDataList } from "@/data/shoeData";
import type { NextApiRequest, NextApiResponse } from "next";




export default async function handler(
        req : NextApiRequest,
        res : NextApiResponse
){
    const {method} = req;
    if(method==='GET'){
        res.json(shoeDataList);
    }
    
}



