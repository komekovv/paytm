import React from 'react'
import { styles } from '../utils/style';
import Button from './button';

const CTA = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow bg-dark-gradient`}>
        <div className='flex-1 flex flex-col'>
            <h2 className={`${styles.heading2}`}>
                Hyzmatlary barlap gormek!
            </h2>
            <p className={`${styles.paragraph} max-w-[550px]`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem veniam quas repudiandae
                 tempore deserunt 
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button/>
        </div>
    </div>
  )
}

export default CTA;