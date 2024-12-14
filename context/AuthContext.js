import { handleError } from "@/lib/helper";
import axios from "axios";
import { useRouter } from "next/router";
import { createContext , useContext, useEffect, useState}  from "react";
import { toast } from "react-toastify";
import cookie from "cookie";


const AuthContext = createContext();

export const AuthProvider =  ({ children }) =>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    //for redirect after login
    const router = useRouter();

    //for check user log in or not
    useEffect(() =>{
        checkUserLogedIn()
    },[])

    //for rewrite user from localstorage after refresh page
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);


    //login user
    const login = async ({ email, password}) =>{
        
        try{

            setLoading(true);

            const res = await axios.post('/api/auth/login',{
                email, password
            })

            // console.log('My detail :' , res.data.data.user);
            // console.log('My detail :' , res.data.data.token);
            setUser(res.data.data.user);

            // for store user data in local storage
            localStorage.setItem('user', JSON.stringify(res.data.data.user));


            toast.success('ورود موفق خوش آمدید');

            //redirect
            router.push('/');

        }catch(err){
            toast.error('اطلاعات نادرست و ورود ناموفق' )
            // console.log("error")
        }finally {
            setLoading(false);
        }

    }



   

    //logout user
    const logout = async () =>{
        
        try{

            setLoading(true);

           await axios.post('/api/auth/logout')

          
            setUser(null);

          
            toast.success('از پنل خارج شدید');
            //redirect
            router.push('/pages/auth/login');

        }catch(err){
            toast.error('مشکلی رخ داده است' )
           
        }finally {
            setLoading(false);
        }

    }




     //Check user if login
     const checkUserLogedIn = async () =>{
        
        try{

            setLoading(true);

         const res =  await axios.post('/api/auth/checkuserlogedin')

   
          

        }catch(err){
            setUser(null)
            localStorage.removeItem('user');
            toast.error( 'ابتدا وارد سیستم شوید' )
            router.push('/pages/auth/login')
           
        }finally {
            setLoading(false);
        }

    }





    
    return <AuthContext.Provider value={{user, loading, login, logout}}>
        { children }
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext ;