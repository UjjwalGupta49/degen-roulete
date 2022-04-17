import styles from './BioElement.module.css';
import Image from 'next/image'
import React from 'react';

export const BioElement = (props) => {
    return (
        <div className={styles.footerContainer}>
            <Image alt="bio Logo"  src={props.logo[0]} width="35px" height="35px" layout='fixed' />
            <a
                className={styles.footerText}
                href={props.link[0]}
                target="_blank"
                rel="noreferrer"
            >{`built by Ujjwal Gupta`}</a>
            <Image alt="bio Logo"  src={props.logo[1]} width="35px" height="35px" />
            <a
                className={styles.footerText}
                href={props.link[1]}
                target="_blank"
                rel="noreferrer"
            >{`built by Ujjwal Gupta`}</a>
        </div>
    );
}

// export default BioElement;
