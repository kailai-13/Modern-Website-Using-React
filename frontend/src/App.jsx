import styles from "./styles"
import { Navbar,Hero,
  Stats,
 
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer } from "./components"

import Bussiness from "./components/Business"


function App() {


  return (
    <div className='bg-black w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         < Navbar/>
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
     
      <div className={` bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Bussiness/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
     
    </div>
  )
}

export default App
