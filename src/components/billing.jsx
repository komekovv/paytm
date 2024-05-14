import { apple, bill, google } from "../assets"
import { layout, styles } from "../utils/style"

const Billing = () => {
  return (
    <section id="features" className={`${layout.sectionReverse}`}>
        <div className={`${layout.sectionImageReverse}`}>
            <img src={bill} alt="bill" className="w-full h-full relative z-[5]"/>

            <div className='absolute z-[3] -left-1/2 w-[50%] h-[50%] rounded-full top-0 white__gradient' />
            <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full bottom-0 pink__gradient' />
            
        </div>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>
                Hasap-kitap we fakturialy  <br className="sm:block hidden"/> ansatjak dolandyryn
            </h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde 
                nihil sapiente deleniti inventore, totam odit vel commodi. Consequatur, eaque.
            </p>

            <div className={`flex flex-row flex-wrap sm:mt-10 mt-6`}>
                <img src={google} alt="google" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"/>
                <img src={apple} alt="apple" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"/>
            </div>
        </div>
    </section>
  )
}

export default Billing