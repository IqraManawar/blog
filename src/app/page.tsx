// "use client"
// import { useRouter } from "next/navigation";

// export default function Home() {
//     const router = useRouter();

//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen bg-green-100">
//     <h1 className="text-4xl font-bold text-green-800">Welcome to Plantify</h1>
//     <p className="text-lg text-green-700 mt-4">
//       Discover beautiful plants to bring nature into your home.
//     </p>
//     <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={()=>router.push('./home')}>
//       Explore Plants
//     </button>
//   </main>
//   );
// }
"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-100 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-green-800 text-center">
        Welcome to Plantify
      </h1>
      <p className="text-lg sm:text-xl text-green-700 mt-4 text-center">
        Discover beautiful plants to bring nature into your home.
      </p>
      <button
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={() => router.push('./home')}
      >
        Explore Plants
      </button>
    </main>
  );
}
