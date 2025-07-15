// import Navbar from '../component/navbar';
// import Footer from '../component/footer';

// export default function Contact() {
//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto py-12">
//         <h1 className="text-4xl font-bold text-green-800">Contact Us</h1>
//         <form className="mt-8 max-w-lg mx-auto bg-white p-6 shadow-md rounded">
//           <div className="mb-4">
//             <label className="block text-gray-700">Name</label>
//             <input type="text" className="w-full p-2 border rounded" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input type="email" className="w-full p-2 border rounded" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Message</label>
//             <textarea className="w-full p-2 border rounded rows-4"></textarea>
//           </div>
//           <button className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// }
import Navbar from '../component/navbar';
import Footer from '../component/footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-green-800 text-center sm:text-left">Contact Us</h1>
        <form className="mt-8 max-w-lg mx-auto bg-white p-6 shadow-md rounded">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 rows-4"></textarea>
          </div>
          <button className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
