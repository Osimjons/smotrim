import { useState } from 'react';

import { Modal } from '../Modal/Modal';

import { useGetPersonInfoQuery, useGetPersonsQuery } from '../../store';
import { PersonDetailInfo } from '../PersonDetailInfo/PersonDetailInfo';
import { Slider } from '../Slider/Slider';

import styles from './PersonCarousel.module.css';

import { PersonList } from '../PersonList/PersonList';
import { LoadingOrError } from '../LoadingOrError/LoadingOrError';

export const Persons = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isError, isLoading } = useGetPersonsQuery();
  const persons = data?.data.content[11].content || [];

  const { data: personDetailsInfo } = useGetPersonInfoQuery(
    selectedPerson?.id,
    {
      skip: !selectedPerson,
    }
  );

  if (isLoading || isError)
    return <LoadingOrError loading={isLoading} error={isError} />;

  const openModal = (person) => {
    if (person && person.id) {
      setSelectedPerson(person);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  return (
    <>
      <div className={styles.personsContainer}>
        <h2>Персоны</h2>
        <div className={styles.persons}>
          <Slider>
            <PersonList persons={persons} getPersonInfo={openModal} />
          </Slider>
        </div>
      </div>

      {isModalOpen && personDetailsInfo && (
        <Modal onclick={closeModal}>
          <PersonDetailInfo person={personDetailsInfo.data} />
        </Modal>
      )}
    </>
  );
};
