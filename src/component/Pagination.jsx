import React from "react";

function Pagination({ postPerPage, totalPost, paginate }) {
    console.log('postPerPage', postPerPage)
    console.log('totalPost', totalPost)
    console.log('paginate', paginate)
    console.log('totalPost / postPerPage', totalPost / postPerPage)
    
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
      console.log('i', i)
    pageNumbers.push(i);
  }
  console.log('pageNumbers', pageNumbers)

  return (
    <nav>
      <ul className="pagination">
          {pageNumbers.map(number => (
              <li key={number} className="page-item">
                <a onClick={() => paginate(number)} href='#!' className="page-link">
                    {number}
                </a>
              </li>
          ))}
      </ul>
    </nav>
  );
}

export default Pagination;
