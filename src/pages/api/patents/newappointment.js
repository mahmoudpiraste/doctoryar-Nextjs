import axios from "axios";


export default async function handler(req, res) {
    // console.log('Handler started');
    // const router = useRouter();

    if(req.method === 'POST') {

        // if (!req.cookies.token) {
        //     console.log("token not find")
        //     // router.push('/pages/auth/login')
        // }
        console.log('POST request received');

   
        try{
            const resApi = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/appointments`, {
                patient_id: req.body.mypateintId,
                appointment_date: req.body.selectedDate,
                payment_method: req.body.mypateintPay,
                name: req.body.mypateintName,
                
            }, {
                headers: {
                    Authorization: `Bearer ${req.cookies.token}`,
                },
            });
            
              console.log('Response from API:', req.body.mypateintname);

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