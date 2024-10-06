import { BASE_IMAGE_URL } from '../../constants/constants';
import styles from './Person.module.css';

export const Person = ({ person, onclick }) => {
  const imageUrl = `${BASE_IMAGE_URL}/${person?.picId}/bq/redirect`;

  return (
    <div className={styles.personСard} onClick={() => onclick(person)}>
      {imageUrl && <img src={imageUrl} alt={person?.name} />}
      <div className={styles.names}>
        <span>{person?.name}</span>
        <span>{person?.surname}</span>
      </div>
    </div>
  );
};
