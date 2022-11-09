import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBBtn, MDBInputGroup,} from 'mdb-react-ui-kit';
import { BsSearch } from "react-icons/bs";
import './Teble.css';
import Adduser from '../component/Adduser';
import Deleteuser from '../component/Deleteuser';
import DataTable from "react-data-table-component";
import Data from "./Data";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import Suspend from '../component/Suspend';
import DeatillPost from '../component/DeatillPost';

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];

  for (let i = 1; i < pages; i++) {
    results.push(i);
  }

  return results;
}
const[users,setUsers]= useState ([]);
useEffect (()=>{
  fetch("http://localhost:3001/users").then(res => res.json())
  .then(
    (result) =>{
      setUsers(result);
    }
  )
})  

const columns = [
  {
    name: "#",
    selector: (row) => row.{users.map(users => (user.id)) },
    sortable: true
  },
  {
    name: "Image",
    selector: (row) => <img src={row.image} width="89%" height="" />,
    sortable: true
  },
  {
    name: "Username",
    selector: (row) => row.username,
    sortable: true,
    right: true
  },
  {
    name: "Password",
    selector: (row) => row.password,
    sortable: true,
    right: true
  },

  {
    name: "Firstname",
    selector: (row) => row.firstname,
    sortable: true,
    right: true
  },

  {
    name: "Lastname",
    selector: (row) => row.lastname,
    sortable: true,
    right: true
  },

  {
    name: "Birthday",
    selector: (row) => row.birthday,
    sortable: true,
    right: true
  },

  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
    right: true
  },

  {
    name: "Sex",
    selector: (row) => row.sex,
    sortable: true,
    right: true
  },
  {
    name: "E-mail",
    selector: (row) => row.email,
    sortable: true,
    right: true
  },
  {
    name: "Tel",
    selector: (row) => row.tel,
    sortable: true,
    right: true
  },
  {
    name: "Address",
    selector: (row) => row.address,
    sortable: true,
    right: true
  },
  {
    name: "More",
    selector: (row) => row.more,
    sortable: true,
    right: true
  },
  {
    name: "Home",
    selector: (row) => row.home,
    sortable: true,
    right: true
  }

];

// RDT exposes the following internal pagination properties
const BootyPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage, // available but not used here
  currentPage
}) => {
  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1);
  };

  const handlePageNumber = (e) => {
    onChangePage(Number(e.target.value));
  };

  const pages = getNumberOfPages(rowCount, rowsPerPage);
  const pageItems = toPages(pages);
  const nextDisabled = currentPage === pageItems.length;
  const previosDisabled = currentPage === 1;

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleBackButtonClick}
            disabled={previosDisabled}
            aria-disabled={previosDisabled}
            aria-label="previous page"
          >
            Previous
          </button>
        </li>
        {pageItems.map((page) => {
          const className =
            page === currentPage ? "page-item active" : "page-item";

          return (
            <li key={page} className={className}>
              <button
                className="page-link"
                onClick={handlePageNumber}
                value={page}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  <div className="form-check">
    <input
      htmlFor="booty-check"
      type="checkbox"
      className="form-check-input"
      ref={ref}
      onClick={onClick}
      {...rest}
    />
    <label className="form-check-label" id="booty-check" />
  </div>
));

export default function Table() {
  return (
    <div >
       <MDBInputGroup tag="form"  className='search'>
           <DeatillPost /><Suspend /><Deleteuser /> <Adduser />
            <input className='form-control' aria-label="Search" type='Search' />
            <MDBBtn outline ><BsSearch /></MDBBtn>
          </MDBInputGroup>
          <div className='table'>
        <DataTable
           title="All Data"
          columns={columns}
          data={Data}
          defaultSortFieldID={1}
          pagination
          paginationComponent={BootyPagination}
          selectableRows={BootyCheckbox}
        />
        </div>
      </div>
    
  );
}
