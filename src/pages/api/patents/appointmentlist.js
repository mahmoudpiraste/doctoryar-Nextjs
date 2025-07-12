import axios from "axios";



export default async function handler(req, res) {
    console.log('Handler started');


    if(req.method === 'POST') {

      

        try{
            const resApi = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/appointments/day`, {
             params: {date: req.body.date}
              });
            
            // console.log('Response from API:', resApi);


            // console.log(resApi.data.user);


        


          
           

          


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