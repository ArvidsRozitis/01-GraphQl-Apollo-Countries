import styles from "./Search.module.scss"

interface SearchProps {
  setFilterBy: (str: string) => void;
}

const Search = ({setFilterBy}: SearchProps) => {
  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchBox}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="search"  className={styles.searchInput} 
          onChange={(e) => {
            setFilterBy(e.currentTarget.value)
          }} />
          <div className={styles.inputIconContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Search;
