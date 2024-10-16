import styles from './card.module.scss';
import Image from 'next/image';
import { CardType } from '../../../../interfaces/card_type';

export default function Card({title, data,imageUrl,type }: {title:string,data:string,imageUrl:any,type:CardType }) {
    const getCardStyle = (type:CardType):string => {
        switch(type){
            case CardType.Danger:
                return styles.danger;
            case CardType.Warning:
                return styles.warning;
            case CardType.Info:
                return styles.info;
            case CardType.Success:
                return styles.success;
            default:
                return styles.default;
        }
    };
    return (       
        
        <div className={styles.card}>    
            <div className={getCardStyle(type)}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h4><b>{title}</b></h4>
                    </div>
                   <div className={styles.content}>
                        <Image src={imageUrl} alt="Image" width={100} height={100} />
                        <p>{data}</p>   
                    </div>             
                </div>
            </div>
        </div>        
    );
}