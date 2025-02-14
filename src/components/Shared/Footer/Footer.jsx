const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white">About MatrimonyHub</h2>
          <p className="mt-4 text-gray-400">
            MatrimonyHub is dedicated to helping individuals find their perfect life partner with trust and compatibility.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/how-it-works" className="hover:text-white">How It Works</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <p className="mt-4 text-gray-400">📍 123 Matrimony Street, Love City</p>
          <p className="text-gray-400">📧 support@matrimonyhub.com</p>
          <p className="text-gray-400">📞 +123 456 7890</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold text-white">Follow Us</h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">🌍</a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">📘</a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">📷</a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">🐦</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 border-t border-gray-700 pt-6">
        <p className="text-gray-500">© {new Date().getFullYear()} MatrimonyHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
