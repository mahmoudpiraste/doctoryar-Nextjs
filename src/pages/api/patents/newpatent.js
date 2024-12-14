import axios from "axios";

import cookie from "cookie";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';


export default async function handler(req, res) {
    // console.log('Handler started');
    // const router = useRouter();

    if(req.method === 'POST') {

        if (!req.cookies.token) {
            console.log("token not find")
            
        }
        console.log('POST request received');

   
        try{
            const resApi = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/patients`, {
                first_name: req.body.mypateintname,
                last_name: req.body.mypateintlastname,
                phone: req.body.mypateintphone,
                email: req.body.mypateintnameemail,
                insurance_type: req.body.mypateintinsurance,
                insurance_number: req.body.mypateintinsnum,
                national_id: req.body.mypateintnationalid,
            }, {
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                },
            });
            
            //   console.log('Response from API:', req.body.mypateintname);

            console.log('Response from API:', resApi);


            console.log(resApi.data);


        


          
           

          


            res.status(200).json({ data: resApi.data });


        }catch(err){
            console.log('Error:', err);
            
          
            res.status(422).json({message: {'err': (err) } })
        }




    }else{
        // console.log('Method not allowed');

        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` })
    }
}