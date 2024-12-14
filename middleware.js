// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export default async function middleware(req) {
//     const { pathname } = req.nextUrl; // مسیر فعلی
//     const cookies = req.headers.get('cookie'); // دریافت کوکی‌ها
//     let login_token = null;

//     if (cookies) {
//         // پارس کردن کوکی‌ها و پیدا کردن توکن
//         const parsedCookies = Object.fromEntries(cookies.split('; ').map(c => c.split('=')));
//         login_token = parsedCookies.token; // دریافت توکن از کوکی‌ها
//     }

//     console.log('Token:', login_token);

//     // اگر توکن وجود ندارد و مسیر فعلی مسیر ورود نیست، ریدایرکت به صفحه ورود
//     if (!login_token && pathname !== '/pages/auth/login') {
//         return NextResponse.redirect(new URL('/pages/auth/login', req.url));
//     }

//     // اگر توکن وجود دارد و مسیر فعلی مسیر ورود است، ریدایرکت به صفحه اصلی
//     if (login_token && pathname === '/pages/auth/login') {
//         try {
//             // بررسی معتبر بودن توکن
//             jwt.verify(login_token, process.env.JWT_SECRET);
//             return NextResponse.redirect(new URL('/', req.url));
//         } catch (err) {
//             console.log('Invalid token:', err);
//             // اگر توکن معتبر نیست، ادامه روند عادی
//             return NextResponse.next();
//         }
//     }

//     return NextResponse.next();
// }
