import type { NextApiRequest, NextApiResponse } from "next";


import { SHOE_CATEGORY } from "@/data/shoesCategories";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const ignoreCase = (str:string) => str.toLowerCase();
   const { method } = req;
   const {id} = req.query;
   if(method==='GET'){

     const category = SHOE_CATEGORY.find((category) => ignoreCase(category.title) ===  ignoreCase(id as string) ? category.category : null);
     if (category){
        res.json(category)
     }else {
            res.status(404).json({message: `Category with id of ${id} not found`})
     }

   }
}

