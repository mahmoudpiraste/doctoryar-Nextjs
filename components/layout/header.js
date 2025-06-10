/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/router';



function Header () {
   
    //for username
    const { user, logout} = useAuth();

    //for active navlink
    const router = useRouter();


    return(
        
       <>
        <div className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0 main-header-m ">
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="bi bi-list"></i></h2>
                </a>
                <a href="#" className="sidebar-toggler flex-shrink-0">
                <i className="bi bi-list"></i>
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="جست و جو"/>
                </form>
                <div className="navbar-nav align-items-center  header-ch1">
                    <div className="nav-item dropdown ">
                        <a href="#" className="nav-link " data-bs-toggle="dropdown">
                        <i className="bi bi-envelope-fill "></i>
                            <span className="d-none d-lg-inline-flex " style={{fontSize:12}}>پیام ها</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="/woman.png" alt="" style={{width: 40, height: 40}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: 40, height: 40}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: 40, height: 40}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link " data-bs-toggle="dropdown">
                        <i className="bi bi-bell-fill"></i>
                            <span className="d-none d-lg-inline-flex" style={{fontSize:12}}>نوتیفیکیشن ها</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link  d-lg-inline-flex" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2 mt-2 mx-1" src="/user.png" alt="" style={{width: 30, height: 30}}/>
                            <span className="d-none d-lg-inline-flex mt-3" style={{fontSize:12}}>
                            { user == null? (<p>واردشوید</p>):(

                                    <p> سلام,  { user.firstName } { user.lastName } </p>
                                        )
                                }
                            </span>
                        </a>
                      
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link  d-lg-inline-flex" data-bs-toggle="dropdown">
                            <span className="d-none d-lg-inline-flex mt-3" style={{fontSize:12}}>
                            { user == null? (<p>واردشوید</p>):(

                                    <a onClick={logout} className="nav-link mb-3 bg-primary bg-gradient text-white rounded" > خروج از سیستم </a>
                                        )
                                }
                            </span>
                        </a>
                     
                    </div>
                </div>
           </div>




           
        {/* sideBar */}
        <div className="menu-dash">
            
            <div className="menu-opn">
              

                <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-light navbar-light">
                <Link href="/" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary fw-bold" style={{fontSize:18, marginBottom:-12}}>کلینیک دکتر مفیدی</h3>
                    <span style={{fontSize:10}}>پیشخوان دکتریار</span>
                </Link>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative ">
                        {/* <img className="rounded-circle" src="/aparat-2.png" alt="" style={{width: 40, height: 40}}/> */}
                        <img className="rounded-circle border  " src="/user.png"  alt="avatar" style={{width: 40, height: 40}} />

                        <div className="bg-success rounded-circle  border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0 fw-bold">
                           { user == null? (<p>واردشوید</p>):(

                            <p> { user.firstName } { user.lastName } </p>
                           )
                           }
                             </h6>
                        <span>منشی</span>
                    </div>
                </div>
                <div className="navbar-nav w-100 ">
                    <Link href="/" className={`nav-item nav-link ${router.pathname === '/' ? 'active' : ''}`}>
                 
                             <i className="bi bi-fingerprint"></i>  داشبورد </Link>
                    <Link href="/pages/appointmentlist" className={`nav-item nav-link ${router.pathname === '/pages/appointmentlist' ? 'active' : ''}`}>
                 
                             <i className="bi bi-fingerprint"></i>  مشاهده نوبت ها </Link>
                   
                    
                    
                 
                             <span className="mx-3 fw-bold">پذیرش بیمار</span>   
                    <Link href="/pages/newpatent" className={`nav-item nav-link ${router.pathname === '/pages/newpatent' ? 'active' : ''}`}  >
                             <i className="bi bi-fingerprint"></i>  تعریف مراجعه‌کننده جدید</Link>

                    <Link href="/pages/newappointment" className={`nav-item nav-link ${router.pathname === '/pages/newappointment' ? 'active' : ''}`} >
                             <i className="bi bi-fingerprint"></i>  نوبت دهی </Link>

                    <Link href="/" className="nav-item nav-link  ">
                             <i className="bi bi-fingerprint"></i>  سوابق پزشکی </Link>

                             <span className="mx-4 fw-bold">عملیات</span> 
              
                    <Link href="/" className="nav-item nav-link  ">
                 
                             <i className="bi bi-fingerprint"></i>  تعریف منشی جدید</Link>
                            
                   
                </div>
            </nav>
            </div>
                
        

           </div>
        </div>
        
        {/* header */}
       
          

        {/* <div className="footer-dashboard"><p className="p-footer">DoctorYar betaVersion 0.0.1.0 </p></div> */}
        
        </>
    )
}

export default Header;