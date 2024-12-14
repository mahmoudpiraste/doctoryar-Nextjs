import axios from "axios";
// import { handleError } from "lib/helper"

import cookie from "cookie";
import { toast } from "react-toastify";


export default async function handler(req, res) {
    // console.log('Handler started');

    if(req.method === 'POST') {

        // console.log('POST request received');

       // res.status(200).json({ message: 'ok' })

        try{
            const resApi = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,{
                email: req.body.email,
                 password: req.body.password,
            });

            
            // console.log('Response from API:', resApi);


            // console.log(resApi.data.user);


        



           res.setHeader('set-cookie', cookie.serialize('token', resApi.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 7,
            path: '/'
           }));

          
           
        // console.log("Admin",resApi.data.user)
          


            res.status(200).json({ data: resApi.data });


        }catch(err){
            // console.log('Error:', err);
            
          
            res.status(422).json({message: {'err': (err) } })
        }




    }else{
        // console.log('Method not allowed');

        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}