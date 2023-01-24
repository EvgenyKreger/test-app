import React, {FC} from 'react';
import styles from "./NotFound.module.scss";

interface NotFoundType {
    title: string
}

const NotFound: FC<NotFoundType> = ({title}) => {
    return (
        <div className={styles.notFound}>{title}</div>
    );
};

export default NotFound;