import PropTypes from 'prop-types';
import "./pagination.css"

const Pagination = ({
    totalItem,
    itemsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];
    console.log(totalItem);
    console.log(itemsPerPage);
    for (let i = 1; i <= Math.ceil(totalItem / itemsPerPage); i++) {
        pages.push(i);
    }

    return (

        <div className='pagination'>
               {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};
Pagination.propTypes = {
    totalItem: PropTypes.any.isRequired,
    itemsPerPage: PropTypes.any.isRequired,
    setCurrentPage: PropTypes.any.isRequired,
    currentPage: PropTypes.any.isRequired,
};
export default Pagination;