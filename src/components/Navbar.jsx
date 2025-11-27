// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useAuth } from "./AuthProvider";
// import { useRouter } from "next/navigation";
// // import Link from "next/link";

// export default function Navbar() {
//   const { user, logoutUser } = useAuth();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   // console.log(user);
//   const handleLogout = async () => {
//     try {
//       await logoutUser();
//       router.push("/auth/login");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <nav className="sticky top-0 bg-white border-b z-50">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* <Link href="/" className="text-xl font-bold">
//           MyLogo
//         </Link>
//         <img src="/logo.jpg" alt="" /> */}
//         <Link href="/" className="flex items-center gap-2">
//           <img
//             src="/logo.jpg"
//             alt="Logo"
//             className="w-20 h-20 object-cover rounded-full" // adjust size as needed
//           />
//         </Link>

//         <div className="hidden md:flex gap-6 items-center font-semibold text-xl">
//           {user ? (
//             <>
//               <Link href="/">Home</Link>
//               <Link href="/products">products</Link>
//               <div className="py-1">
//                 <Link href="/add-product">Add Product</Link>
//               </div>

//               <div className="py-1">
//                 <Link href="/dashboard">Manage Products</Link>
//               </div>
//             </>
//           ) : (
//             <>
//               <Link href="/">Home</Link>
//               <Link href="/products">products</Link>
//             </>
//           )}
//           {/* <Link href="/services">Services</Link>
//           <Link href="/contact">Contact</Link> */}
//         </div>

//         <div className="flex items-center gap-3">
//           {!user ? (
//             <>
//               <Link href="/auth/login">Login</Link>
//               <Link href="/auth/register" className="border px-3 py-1 rounded">
//                 Register
//               </Link>
//             </>
//           ) : (
//             <div className="relative">
//               <button
//                 onClick={() => setOpen((s) => !s)}
//                 className="flex items-center gap-2 border px-3 py-1 rounded"
//               >
//                 {user.photoURL ? (
//                   <img
//                     src={user.photoURL}
//                     alt="User Photo"
//                     width={32}
//                     height={32}
//                     className="rounded-full"
//                   />
//                 ) : (
//                   user.email
//                 )}
//                 <span>▾</span>
//               </button>

//               {open && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow">
//                   <div className="p-2 text-sm">
//                     <div className="py-1">
//                       <Link href="/profile">Profile</Link>
//                     </div>

//                     <div className="py-1">
//                       <Link href="/add-product">Add Product</Link>
//                     </div>

//                     <div className="py-1">
//                       <Link href="/dashboard">Manage Products</Link>
//                     </div>

//                     <div className="py-1">
//                       <button
//                         onClick={handleLogout}
//                         className="w-full text-left"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Mobile menu toggle (very basic) */}
//           <div className="md:hidden">
//             {/* you can add a mobile menu here */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.push("/auth/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-20 h-20 object-cover rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-semibold text-xl">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>

          {user && (
            <>
              <Link href="/add-product">Add Product</Link>
              <Link href="/dashboard">Manage Products</Link>
            </>
          )}
        </div>

        {/* Right section Login / Profile */}
        <div className="flex items-center gap-3">

          {!user ? (
            <>
              <Link href="/auth/login">Login</Link>
              <Link href="/auth/register" className="border px-3 py-1 rounded">
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpen((s) => !s)}
                className="flex items-center gap-2 border px-3 py-1 rounded"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} width={32} height={32} className="rounded-full" />
                ) : (
                  user.email
                )}
                <span>▾</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow">
                  <div className="p-2 text-sm">
                    <Link href="/profile" className="block py-1">Profile</Link>
                    <Link href="/add-product" className="block py-1">Add Product</Link>
                    <Link href="/dashboard" className="block py-1">Manage Products</Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left py-1"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-gray-100 p-4 space-y-3 text-lg font-semibold">
          <Link href="/" className="block">Home</Link>
          <Link href="/products" className="block">Products</Link>

          {user && (
            <>
              <Link href="/add-product" className="block">Add Product</Link>
              <Link href="/dashboard" className="block">Manage Products</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
