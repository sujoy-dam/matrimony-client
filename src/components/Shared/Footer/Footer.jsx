import { Link } from "react-router-dom"

const Footer = () => {
  // bg-fuchsia-500
  return (
    <footer className="border-t bg-base-200 shadow-xl pt-10 pb-5">
      <div className="container mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold">About MatrimonyHub</h2>
          <p className="mt-4">
            MatrimonyHub is dedicated to helping individuals find their perfect life partner with trust and compatibility.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li><Link to="/about_us" className="hover:text-white">About Us</Link></li>
            <li><Link to="/howItWork" className="hover:text-white">How It Works</Link></li>
            <li><Link to="/contact_us" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-4">📍 123 Matrimony Street, Love City</p>
          <p className="">📧 support@matrimonyhub.com</p>
          <p className="">📞 +123 456 7890</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">🌍</a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">📘</a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">📷</a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">🐦</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 border-t border-gray-700 pt-5">
        <p className="text-gray-500">© {new Date().getFullYear()} MatrimonyHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
