
import Navbar from '../component/navbar';
import PlantCard from '../component/plantCard';
import Footer from '../component/footer';

const plants = [
  {
    name: 'Fiddle Leaf Fig',
    description: 'A beautiful indoor plant with large green leaves.',
    image: '/plants/plant1.jpg',
  },
  {
    name: 'Snake Plant',
    description: 'Low maintenance and perfect for any corner.',
    image: '/plants/plant2.jpg',
  },
  {
    name: 'Peace Lily',
    description: 'Elegant white flowers and air-purifying properties.',
    image: '/plants/plant3.jpg',
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Our Plants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant, index) => (
            <PlantCard 
             key={index} 
             name={plant.name} 
             description={plant.description} 
             image={plant.image} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
