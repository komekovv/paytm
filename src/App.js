import { Home, Navbar, Statistics, Contract, Billing, CTA, Testimonials, Clients, Footer } from './components';
import {styles} from './utils/style';
import './assets/icons/bootstrap-icons.min.css'
import Business from './components/business';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navbar */}
      <div className={`${styles.paddingX}  ${styles.flexCenter}`} >
        <div className={`${styles.container} `}>
          <Navbar />
        </div>
      </div>

      {/* Home */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      <div className={` bg-primary ${styles.paddingX}  ${styles.flexCenter}`} >
        <div className={`${styles.container} `}>
          <Statistics />
          <Contract />
          <Billing />
          <Business />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App;