// import Navbar from '../component/navbar';
// import Footer from '../component/footer';

// export default function About() {
//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto py-12">
//         <h1 className="text-4xl font-bold text-green-800">About Plantify</h1>
//         <p className="mt-4 text-gray-700">Plantify is your go-to source for all things green. We provide high-quality plants and tips to keep your home lively and fresh.</p>
//       </div>
//       <Footer />
//     </div>
//   );
// }
import Navbar from '../component/navbar';
import Footer from '../component/footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800">
          About Plantify
        </h1>
        <p className="mt-4 text-gray-700 text-base sm:text-lg lg:text-xl">
          Plantify is your go-to source for all things green. We provide high-quality plants and tips to keep your home lively and fresh.
        </p>
      </div>
      <Footer />
    </div>
  );
}
