
import { v4  as uuidv4 } from 'uuid';
import product1 from '../../public/images/product1.png';
import product2 from '../../public/images/product2.png';
import product3 from '../../public/images/product3.png';
import product4 from '../../public/images/product4.png';
import product5 from '../../public/images/product5.png';
import product6 from '../../public/images/product6.png';
import product7 from '../../public/images/product7.png';
import product8 from '../../public/images/product8.png';
import product9 from '../../public/images/product9.png';
import product10 from '../../public/images/product10.png';
    
import product11 from '../../public/images/product11.png';
import product12 from '../../public/images/product12.png';



const randomRatingFrom4to5 = () => Math.random() * (5 - 4) + 4; 

export const shoeDataList = [
    {
        id :  uuidv4(),
        name : 'Nike Air Max 270',
        price : 120,
        img : product1,
        rating : randomRatingFrom4to5(),

    }, {
        id :  uuidv4(),
        name : "Nik Adapt BB",
        price : 250,
        img : product2,
        rating : randomRatingFrom4to5(),
    }, 
    {
        id :  uuidv4(),
        name : "Nike Martine Air",
        price : 120,
        img : product3,
        rating: randomRatingFrom4to5(),

    }, 
    {
        id :  uuidv4(),
        name : "Nike Martine Rose",
        price : 120,
        img : product4,
        rating : randomRatingFrom4to5(),

    }, {
        id :  uuidv4(),
        name : "Nike Air Force 1",
        price : 120,
        img : product5,
        rating : randomRatingFrom4to5(),

    }, {
        id :  uuidv4(),
        name : "Nike Air Max 90 SE",
        price : 120,
        img : product6,
        rating : randomRatingFrom4to5(),
    }, {
        id :  uuidv4(),
        name : "Nike SB Dunk Low",
        price : 120,
        img : product7,
        rating: randomRatingFrom4to5(),
    }, {
        id :  uuidv4(),
        name : "Nike air Force 1 Mid 07",
        price : 120,
        img : product8,
        rating : randomRatingFrom4to5(),

    }, {
        id :  uuidv4(),
        name : "Air Jordan 1 Zoom",
        price : 120,
        img : product9,
        rating: randomRatingFrom4to5(),
    }, {
        id :  uuidv4(),
        name : "Air Jordan 1 Retro High OG",
        price : 120,
        img : product10,
        rating: randomRatingFrom4to5(),

    },{
        id :  uuidv4(),
        name : "Nike Air Max 90 SE",
        price : 120,
        img : product11,
        rating: randomRatingFrom4to5(),

    }, {
        id :  uuidv4(),
        name : "Nike Air Max 90 SE",
        price : 120,
        img : product12,
        rating: randomRatingFrom4to5(),

    }
]