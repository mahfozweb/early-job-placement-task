"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); //
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

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* DESKTOP PROFILE MENU */}
          <div className="hidden md:block">
            {!user ? (
              <>
                <Link href="/auth/login">Login</Link>
                <Link
                  href="/auth/register"
                  className="border px-3 py-1 rounded"
                >
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
                    <img
                      src={user.photoURL}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    user.email
                  )}
                  <span>▾</span>
                </button>

                {open && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow">
                    <div className="p-2 text-sm">
                      <Link href="/profile" className="block py-1">
                        Profile
                      </Link>

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
          </div>

          {/* MOBILE MENU BUTTON (only one dropdown on mobile) */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-gray-100 p-4 space-y-3 text-lg font-semibold">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/products" className="block">
            Products
          </Link>

          {user && (
            <>
              <Link href="/add-product" className="block">
                Add Product
              </Link>
              <Link href="/dashboard" className="block">
                Manage Products
              </Link>
              <Link href="/profile" className="block">
                Profile
              </Link>

              <button
                className="block text-left w-full py-1 font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}

          {!user && (
            <>
              <Link href="/auth/login" className="block">
                Login
              </Link>
              <Link href="/auth/register" className="block">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
