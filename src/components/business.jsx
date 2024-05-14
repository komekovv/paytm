import { features } from "../utils/constants";
import { layout, styles } from "../utils/style";
import Button from "./button";
import FeatureCard from "./feature-card";

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>
                Biznes osduring, <br className="sm:block hidden"/> pul mesele dal. 
            </h2>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat harum 
                eligendi itaque velit earum. Fugiat, facere. Nobis accusamus tenetur at!
            </p>
            <Button styles={'mt-10'}/>
        </div>
        <div className={`${layout.sectionImage} flex-col `}>
            {features.map((feature, idx) => (
                <FeatureCard key={feature.id} {...feature} idx={idx}/>
            ))}
        </div>
    </section>
  )
}

export default Business;