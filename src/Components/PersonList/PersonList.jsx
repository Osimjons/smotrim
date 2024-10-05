import { forwardRef } from 'react';
import { Person } from '../Person/Person';
import styles from './PersonList.module.css';

export const PersonList = forwardRef(({ persons, getPersonInfo }, ref) => {
  const handleClick = (person) => {
    getPersonInfo(person);
  };

  return (
    <div className={styles.container} ref={ref}>
      {persons?.map((person) => (
        <Person key={person.id} person={person} onclick={handleClick} />
      ))}
    </div>
  );
});
PersonList.displayName = 'PersonList';
