import axios from "axios";

import cookie from "cookie";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';

export default async function handler(req, res) {
    // console.log('Handler started');
    // const router = useRouter();

    if(req.method === 'GET') {

        if (!req.cookies.token) {
            console.log("token not find")
            // router.push('/pages/auth/login')
        }
        // console.log('GET request received');

   

        try{
            const resApi = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/appointments/day`, {
             date: req.body.date
              });
            
            // console.log('Response from API:', resApi);


            // console.log(resApi.data.user);


        


          
           

          


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