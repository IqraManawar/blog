// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-green-600 text-white py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Plantify</h1>
//         <ul className="flex space-x-4">
//           <li><Link href="/" className="hover:text-green-200">Home</Link></li>
//           <li><Link href="/about" className="hover:text-green-200">About</Link></li>
//           <li><Link href="/contact" className="hover:text-green-200">Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Plantify</h1>
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-green-200">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-200">About</Link></li>
            <li><Link href="/contact" className="hover:text-green-200">Contact</Link></li>
          </ul>
        </div>
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button className="text-white" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-green-700">
        <ul className="space-y-4 px-4 py-2">
          <li><Link href="/" className="block text-white hover:text-green-200">Home</Link></li>
          <li><Link href="/about" className="block text-white hover:text-green-200">About</Link></li>
          <li><Link href="/contact" className="block text-white hover:text-green-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
