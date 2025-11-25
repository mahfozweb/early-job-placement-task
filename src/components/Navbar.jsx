// import Link from "next/link";
// import React from "react";

// export default function Navbar() {
//   return (
//     <div className="flex  bg-blue-300 px-10 text-white font-bold  text-xl">
//       <div className="flex-1 ">Smart App</div>
//       <div className="flex-1">
//         <ul className="flex text-red justify-center gap-5 p-5 ">
//           <li>
//             <Link className="" href="/home">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>

//           <li>
//             {" "}
//             <Link href="/add-product">Add Product</Link>
//           </li>
//           <li>
//             {" "}
//             <Link href="/add-product">Add Product</Link>
//           </li>
//           <li>
//             <Link href="/auth/login">Login</Link>
//           </li>
//           <li>
//             <Link href="/auth/register">Register</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
// "use client";
// "use client";
// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const user = true; // temporary: assume logged in for testing
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-xl font-bold">
//           <Link href="/">MyShop</Link>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <Link href="/">Home</Link>
//           <Link href="/products">Products</Link>
//           {user && (
//             <>
//               <Link href="/add-product">Add Product</Link>
//               <Link href="/dashboard">Manage Products</Link>
//             </>
//           )}
//         </div>
//         <div className="md:hidden">
//           <button onClick={() => setOpen(!open)}>Menu</button>
//         </div>
//       </div>
//       {open && (
//         <div className="flex flex-col space-y-2 p-4 md:hidden">
//           <Link href="/">Home</Link>
//           <Link href="/products">Products</Link>
//           {user && (
//             <>
//               <Link href="/add-product">Add Product</Link>
//               <Link href="/dashboard">Manage Products</Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

/* //////////////////// */

// src/components/Navbar.jsx
// src/components/Navbar.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  // console.log(user);
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
        <Link href="/" className="text-xl font-bold">
          MyLogo
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {user ? (
            <>
              <Link href="/">Home</Link>
              <Link href="/products">products</Link>
              <div className="py-1">
                <Link href="/add-product">Add Product</Link>
              </div>

              <div className="py-1">
                <Link href="/dashboard">Manage Products</Link>
              </div>
            </>
          ) : (
            <>
              <Link href="/">Home</Link>
              <Link href="/products">products</Link>
            </>
          )}
          {/* <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link> */}
        </div>

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
                {user.displayName ? user.displayName : user.email}
                <span>▾</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow">
                  <div className="p-2 text-sm">
                    <div className="py-1">
                      <Link href="/profile">Profile</Link>
                    </div>

                    <div className="py-1">
                      <Link href="/add-product">Add Product</Link>
                    </div>

                    <div className="py-1">
                      <Link href="/dashboard">Manage Products</Link>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile menu toggle (very basic) */}
          <div className="md:hidden">
            {/* you can add a mobile menu here */}
          </div>
        </div>
      </div>
    </nav>
  );
}
