import styles from "../styles"
import { arrowUp } from "../assets"

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-cyan-300 to-cyan-400 p-[4px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexCenter} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gray-100">Get</span>
            <span className="text-gray-100"> Started</span>
          </p>
        </div>
        <img src={arrowUp} alt="image" className="w-[23px] h-[23px] object-contain" />
        
      </div>
    </div>
  )
}

export default GetStarted