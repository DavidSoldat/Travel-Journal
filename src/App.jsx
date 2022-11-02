import Nav from './components/Nav';
import LocationCard from './components/LocationCard';
import data from './assets/data';

function App() {
  const items = data.map(item => <LocationCard {...item} key={item.id}/>)
  return (
    <div className='App'>
      <Nav />
      <section className='p-7 md:py-0'>
        {items}
      </section>
    </div>
  );
}

export default App;
