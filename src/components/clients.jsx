import { clients } from "../utils/constants";
import { styles } from "../utils/style";
import ClientCard from "./client-card";

const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map(client => (
            <ClientCard key={client.id} logo={client.logo}/>
          ))}
        </div>
    </section>
  )
}

export default Clients;