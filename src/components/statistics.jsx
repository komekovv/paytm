import { styles } from '../utils/style';
import { statistics } from '../utils/constants';

const Statistics = () => {
  return (
    <div className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
      {statistics.map(stats => (
        <div key={stats.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-montserrat font-semibold xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stats.value}</h4>
          <p className='font-montserrat font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[20px] text-gradient uppercase ml-3'>{stats.title}</p>
        </div>
      )) }
    </div>
  )
}

export default Statistics;