import { card } from "../assets";
import { layout, styles } from "../utils/style";
import Button from "./button";

const Contract = () => {
  return (
    <section id="product" className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>
                Birnace ansat adimde <br  className="sm:block hidden"/>kontrakt baglasmak
            </h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum perferendis soluta quae? Corporis iusto unde facere consequatur quos ea eaque?
            </p>
            <Button styles={`mt-10`}/>
        </div>
        <div className={`${layout.sectionImage}`}>
            <img src={card} alt="card" className="w-full h-full"/>
        </div>
    </section>
  )
}

export default Contract;