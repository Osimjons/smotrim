import styles from './PersonDetailInfo.module.css';

export const PersonDetailInfo = ({ person }) => {
  const imageUrl = person?.pictures?.[0]?.sizes?.find(
    (size) => size.preset === 'o'
  )?.url;

  const personInfo = person?.body;

  return (
    <div>
      <div className={styles.modalHeader}>
        <img className={styles.modalImg} src={imageUrl} alt={person?.name} />
        <h2
          className={styles.modalTitle}
        >{`${person?.name} ${person?.surname} `}</h2>
      </div>
      {personInfo && <div dangerouslySetInnerHTML={{ __html: personInfo }} />}
    </div>
  );
};
