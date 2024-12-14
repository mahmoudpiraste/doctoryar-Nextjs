import axios from "axios";
// import { handleError } from "lib/helper"

import cookie from "cookie";
import { toast } from "react-toastify";


export default async function handler(req, res) {
    // console.log('Handler started');
    
    if(req.method === 'POST') {
        
        // console.log('Token:', req.cookies.token);  // لاگ برای بررسی توکن
        
        if (!req.cookies.token) {
            res.status(403).json({ message: 'ورود ناموفق دوباره تلاش کنید'})
            return
        }

        try{
            const resApi = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/checkLogin`,{},{
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                  }
            });

            
            // console.log('Response from API:', resApi.data);


            res.status(200).json({ user: resApi.data.user });


        }catch(err){
          
            
          
            res.status(422).json({message: {'err': (err) } })
        }




    }else{


        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}