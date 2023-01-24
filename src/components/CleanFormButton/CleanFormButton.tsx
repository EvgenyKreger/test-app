import React, {FC} from 'react';
import styles from './CleanFormButton.module.scss'

interface CleanFormButtonType {
    cleanHandler: () => void
    title: string
}

const CleanFormButton: FC<CleanFormButtonType> = ({title, cleanHandler}) => {
    return (
        <div className={styles.main} onClick={() => cleanHandler()}>
            {title}
        </div>
    );
};

export default CleanFormButton;