
import Products from '../components/Products/Products';

const Home = () => {
    
  return (
    <div>
        <h2 className='home-heading'>Welcome to Redux Store</h2>
        <section>
            <h3 className='sub-head'>Products</h3>
            <Products /> 
        </section>
    </div>
  )
}

export default Home;