import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ count, page, onChange }) => {
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= count) {
            onChange(null, newPage);
        }
    };

    const renderPageButtons = () => {
        const pages = [];
        for (let i = 1; i <= count; i++) {
            pages.push(
                <button
                    key={i}
                    className={`${styles.button} ${i === page ? styles.activeButton : styles.inactiveButton}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className=' flex justify-center flex-wrap items-center overflow-x-auto'>
            {renderPageButtons()}
        </div>
    );
};

export default Pagination;