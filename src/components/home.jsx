import { styles } from '../utils/style';
import { robot } from '../assets';
import Button from './button';

const Home = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} relative`}>
        {/* Animation image */}
        <div className={`flex-1 ${styles.flexStart} md:my-0 my-10`}>
            <img src={robot} alt="robot" className='w-full h-full relative z-10 rounded-lg'/>
        </div>

        {/* Information */}
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-4 sm:px-16 px-6`}>
            {/* Discount Information */}
            <div className={`flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient`}>
                <i className='bi-balloon-fill text-white text-xl'/>
                <p className={`${styles.paragraph} ml-2`}> 
                    <span className='text-white font-semibold'>20%</span> Aksiýa <span className='text-white'>1 Aýlyk </span> Hasap Üçin
                </p>
            </div>

            {/* Title */}
            <div className={`w-full`}>
                <h1 className={`${styles.heading1}`}>
                    Täze Nesil  <br /> <span className='text-gradient'>Töleg Usuly</span> 
                </h1>
            </div>

            {/* Description */}
            <p className={`${styles.paragraph} mt-5  max-w-[550px]`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laudantium, culpa animi placeat nobis itaque nulla. 
                Omnis facilis odio sapiente neque?
            </p>

            {/* Getting Started */}
            <Button styles={'mt-2'}/>

            {/* Gradient Background */}
            <div className='absolute z-0 w-[40%] h-[35%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
            <div className='absolute z-0 w-[50%] h-[55%] right-20 bottom-20 blue__gradient' />

        </div>

        
    </section>
  )
}

export default Home;