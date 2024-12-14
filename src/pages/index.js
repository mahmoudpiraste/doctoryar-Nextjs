import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useAuth } from "@/context/AuthContext";
import PatentList from '../../components/layout/patentlist';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const { user } = useAuth();

  return (
    <>
    <div className="container-main position-relative bg-white d-flex p-0">
     
         <div className="content">



            {/* Header */}
         {/* <div className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0 ">
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="bi bi-list"></i></h2>
                </a>
                <a href="#" className="sidebar-toggler flex-shrink-0">
                <i className="bi bi-list"></i>
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="جست و جو"/>
                </form>
                <div className="navbar-nav align-items-center mx-auto">
                    <div className="nav-item dropdown ">
                        <a href="#" className="nav-link " data-bs-toggle="dropdown">
                        <i className="bi bi-envelope-fill "></i>
                            <span className="d-none d-lg-inline-flex" style={{fontSize:12}}>پیام ها</span>
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
                            <img className="rounded-circle me-lg-2" src="/woman.png" alt="" style={{width: 40, height: 40}}/>
                            <span className="d-none d-lg-inline-flex mt-3" style={{fontSize:12}}>
                            { user == null? (<p>واردشوید</p>):(

                                    <p> سلام,  { user.firstName } { user.lastName } </p>
                                        )
                                }
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">My Profile</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a href="#" className="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
           </div> */}


            {/* <!-- Sale & Revenue Start --> */}
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="bi bi-pie-chart-fill text-primary fs-2"></i>
                            <div className="ms-3">
                                <p className="mb-2 fw-bold">تعداد مراجعین امروز</p>
                                <h6 className="mb-0">214نفر</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="bi bi-graph-up fs-2 text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2 fw-bold">درآمد امروز</p>
                                <h6 className="mb-0">45.550.000 تومان</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="bi bi-credit-card fs-3 text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2 fw-bold">پرداخت حضوری</p>
                                <h6 className="mb-0">34.120.000 تومان</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="bi bi-paypal fs-2 text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2 fw-bold">پرداخت آنلاین</p>
                                <h6 className="mb-0">11.330.000 تومان</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Sale & Revenue End --> */}


            {/* <!-- Sales Chart Start --> */}
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0 " >هفته اخیر</h6>
                                <a href="">مشاهده همه</a>
                            </div>
                            <BarChart
      series={[
        { data: [35, 44, 24, 34,35, 44, 24, 34] },
        { data: [51, 6, 49, 30,51, 6, 49, 30] },
       
      ]}
      height={140}
      xAxis={[{ data: [ 'شنبه', 'یکشنبه','دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
                        </div>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0 ">آمار مراجعین</h6>
                                <a href="">مشاهده همه</a>
                            </div>
                           
                            <PieChart
  series={[
    {
      data: [
        { id: 0, value: 380, label: '  مراجعین زیبایی' },
        { id: 1, value: 180, label: 'مراجعین دندان' },
        { id: 2, value: 140, label: 'مراجعین عمومی' },
      ],
    },
  ]}
  width={450}
  height={140}
/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Sales Chart End --> */}


            {/* <!-- Recent Sales Start --> */}

            <PatentList/>
            
            {/* <!-- Recent Sales End --> */}


            {/* <!-- Widgets Start --> */}
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 bg-light rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="mb-0">پیام ها</h6>
                                <a href="">مشاهده همه</a>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img className="rounded-circle flex-shrink-0" src="/woman.png" alt="" style={{width: 40, height: 40}}/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">ریحان محمدی</h6>
                                        <small>10 دقیقه قبل</small>
                                    </div>
                                    <span>از اینکه با ما ارتباط گرفتید...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img className="rounded-circle flex-shrink-0" src="/man.png" alt="" style={{width: 40, height: 40}}/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">دکتر رضا علی مرادی</h6>
                                        <small>15 دقیقه قبل</small>
                                    </div>
                                    <span>سلام مراجعه بعدی شما در تاریخ...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img className="rounded-circle flex-shrink-0" src="/woman.png" alt="" style={{width: 40, height: 40}}/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">ریحان محمدی</h6>
                                        <small>35 دقیقه قبل</small>
                                    </div>
                                    <span>از اینکه با ما ارتباط گرفتید...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img className="rounded-circle flex-shrink-0" src="/man.png" alt="" style={{width: 40, height: 40}}/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">دکتر رضا علی مرادی</h6>
                                        <small>55 دقیقه قبل</small>
                                    </div>
                                    <span>سلام مراجعه بعدی شما در تاریخ...</span>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 bg-light rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">تقویم</h6>
                                <a href="">مشاهده رزروهای امروز</a>
                            </div>
                            <div id="calender">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                 <DateCalendar />
                               </LocalizationProvider>
                              </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 bg-light rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">یادداشت</h6>
                                <a href="">مشاهده همه</a>
                            </div>
                            <div className="d-flex mb-2">
                                <input className="form-control bg-transparent" type="text" placeholder="چیزی بنویسید . . . "/>
                                <button type="button" className="btn btn-primary ms-2">افزودن</button>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>تلفن به خانم صادقی ساعت 18</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>رفتن به داروخانه</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox" checked/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span><del>تلفن به آقای رضایی</del></span>
                                        <button className="btn btn-sm text-primary"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>ثبت درخواست تعویض</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Widgets End --> */}


            {/* <!-- Footer Start --> */}
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light rounded-top p-4">
                    <div className="row">
                        <div className="col-12  text-center ">
                            &copy; <a href="#">مجموعه ای هوشمند همراه با دکتریار</a>, تمامی حقوق محفوظ است. 
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </div>
        {/* <!-- Content End --> */}

       


       


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top fs-3" >^</a>
    </div>
    </>
  )
}
