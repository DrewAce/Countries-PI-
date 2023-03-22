import styles from "./Pagination.module.css";



const Pagination = ({ countries, pagination, perPage, currentPage }) => {


  const pagesCount = countries === 250 ? 26 : Math.ceil(countries / perPage);

  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(pagesCount, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (page) => {
    pagination(page);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={currentPage !== 1 ? styles.pagination_button : styles.disable}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumbers.map((number) => (
        <div key={number}>
          <button
            onClick={() => handleClick(number)}
            className={`${styles.buttonNumber} ${
              currentPage === number ? "is-current" : ""
            }`}
          >
            {number}
          </button>
        </div>
      ))}

      <button
        className={currentPage !== pagesCount ? styles.pagination_button : styles.disable}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === pagesCount}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;