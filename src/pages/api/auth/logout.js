import axios from "axios";
// import { handleError } from "lib/helper"

import cookie from "cookie";
import { toast } from "react-toastify";


export default async function handler(req, res) {
    // console.log('Handler started');

    if(req.method === 'POST') {

        if (!req.cookies.token) {
            res.status(403).json({ message: 'ورود ناموفق دوباره تلاش کنید'})
            return
        }

        try{
            const resApi = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/logout`,{},{
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                  }
            });

            
            // console.log('Response from API:', resApi);


            // console.log(resApi.data.user);


        



           res.setHeader('set-cookie',cookie.serialize('token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: new Date(0),
            path: '/'
           }));

          
           
        // console.log("Admin",resApi.data.user)
          


            res.status(200).json({ message: 'کاربر از سیستم خارج شد' });


        }catch(err){
          
            
          
            res.status(422).json({message: {'err': (err) } })
        }




    }else{


        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}