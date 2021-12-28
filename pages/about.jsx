import React from 'react';

import{
    Md4KPlus,
    MdWysiwyg,
    MdWrapText,
    MdAccountBox
} from 'react-icons/md';
import Navbar from '../components/Navbar';

import styles from '../styles/About.module.scss';

const about = () => {
    return (
        <div className={styles.page}>
            <Navbar/>
            <div className={styles.grid}>
                <div className={styles.maingriditem}></div>
                <div className={styles.secondarytop}></div>
                <div className={styles.secondarybottom}></div>
            </div>
            <div className={styles.flexbox}>
                <div className={styles.flexchild}>
                    <MdWrapText className={styles.icon} />
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos perspiciatis tempora sint autem magnam, assumenda earum omnis unde maiores officiis sapiente quo ipsum, vero quaerat, optio dolor similique distinctio.</p>
                </div>
                <div className={styles.flexchild}>
                    <MdWysiwyg className={styles.icon} />
                    <p className={styles.text}>Commodi accusantium veritatis quibusdam! Recusandae eius rem a numquam labore dolorum laboriosam necessitatibus odio nostrum unde iure aut, eligendi dignissimos iste vero, nisi nemo. Similique inventore cumque autem neque facere.</p>
                </div>
                <div className={styles.flexchild}>
                    <Md4KPlus className={styles.icon}/>
                    <p className={styles.text}>Cupiditate ea architecto totam quis praesentium atque autem sint tenetur dolor minima nisi ipsa, tempora quaerat adipisci facere beatae, quod placeat ipsum excepturi reprehenderit veritatis esse nobis aspernatur similique? Corrupti.</p>
                </div>
                <div className={styles.flexchild}>
                    <MdAccountBox className={styles.icon} />
                    <p className={styles.text}>Hic doloremque dolore maiores molestias iusto mollitia commodi id natus consectetur voluptatibus deserunt eius dolorum assumenda blanditiis impedit, soluta ab expedita, accusamus, molestiae nihil facere itaque! Accusamus animi repellat voluptatum?</p>
                </div>
            </div>
            
        </div>
    )
}

export default about
