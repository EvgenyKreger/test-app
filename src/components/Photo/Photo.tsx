import React, {FC} from 'react';
import styles from './Photo.module.scss';
import Image from "next/image";
import notPhoto from "@/assets/no-photo.png";

interface PhotoType {
    image: string | null
}

const Photo: FC<PhotoType> = ({image}) => {
    return (
        <div>
            {image ? <img className={styles.image} src={image} alt=""/> :
                <Image className={styles.image} src={notPhoto} alt=""/>
            }
        </div>

    );
};

export default Photo;