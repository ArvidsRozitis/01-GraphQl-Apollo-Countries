import styles from "./ExtendedLoading.module.scss";

const ExtendedLoading = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.extendedInfoWrapper}>
          <h3 className={styles.heading}>Capital: Loading...</h3>
          <h3 className={styles.heading}>Currency: Loading...</h3>
          <div className={styles.languagesContainer}>
            <label className={styles.heading}>Languages:</label>
            <div className={styles.language}>loading...</div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <span>Loading...</span>
        </div>
      </div>
    </>
  );
};

export default ExtendedLoading;
