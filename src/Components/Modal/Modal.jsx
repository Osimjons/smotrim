import styles from './Modal.module.css';

export const Modal = ({ children, onclick }) => {
  return (
    <div className={styles.modal} onClick={onclick}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onclick}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
