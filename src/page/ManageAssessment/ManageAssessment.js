import "../css/ManageAssessment.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";
import Swal from 'sweetalert2';
import  { useState, useEffect } from "react";
import withReactContent from 'sweetalert2-react-content';

// Mui test
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Noto Serif Lao',
      textTransform: 'none',
      fontSize: 'clamp(14px, 2.5vw, 16px)',
      fontWeight: '400',
    },
  },
});




function ManageAssessment() {

  // Mui test

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  





    const [items, setItems] = useState([]);

    useEffect(() => {
        AssessmentGet();
        //DepartmentUpdate();
      }, []);
    
      const AssessmentGet = () => {
        var myHeaders = new Headers();
        myHeaders.append("x-api-key", sessionStorage.getItem("token"));
    
        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
        fetch("http://47.250.49.41/myproject1/departments", requestOptions)
          .then((res) => res.json())
          .then((result) => {
            setItems(result);
          });
      };


  const MySwalDeletePosition = withReactContent(Swal);
    
    return (
        
        <div className="box-modal-manage-ass">
        <div className="box-manage-ass">
            <Menubar />
            <div className="bg-manage-ass">
            <div className="con-search-manage-ass">
                <div className="search-manage-ass">
                <label className="lbl-search">
                    <input
                    className="search-inp-manage-ass"
                    type="text"
                    placeholder="ຄົ້ນຫາ..."
                    ></input>
                    <FaSearch className="filt-ic-manage-ass" />
                </label>
                <button className="btn-search-manage-ass">
                    ຄົ້ນຫາ
                </button>
                </div>
            </div>
            <div className="tb-manage-ass">
                <div className="con-tbl-manage-ass">
                <p className="p-man-manage-ass">
                    ຈັດການຂໍ້ມູນແບບປະເມີນ
                </p>
                <p className="p-history-manage-ass">
                    <a href='/assessment/create'>
                    <button
                        className="btn-pherm-manage-ass"
                        // onClick={() => SwalAddDepart()}
                        >
                        <label className="lbl-ic-p-manage-ass">
                            <FaPlusCircle />
                        </label>
                        ສ້າງແບບປະເມີນ
                    </button>
                    </a>
                </p>
                <div>
                <ThemeProvider theme={theme}>
                <Paper sx={{ width: '100%', }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead sx={{backgroundColor: "#51b3f0"}}>
                        <TableRow sx={{backgroundColor: "#51b3f0"}}>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ລໍາດັບ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຊື່ແບບປະເມີນ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ວັນທີສ້າງ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ລົບ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {/* {items
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, i) => {
                            return ( */}
                              <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell>ລໍາດັບ</TableCell>
                                <TableCell>ຊື່ແບບປະເມີນ</TableCell>
                                <TableCell>ວັນທີສ້າງ</TableCell>
                                <TableCell >
                                <button
                                className="btnnn-manage-ass"
                                onClick={() => 
                                  MySwalDeletePosition.fire({
                                    title: 'ຢືນຢັນການລົບ',
                                    html: "ຂໍ້ມູນທີ່ທ່ານລົບຈະບໍ່ສາມາດກູ້ຄືນໄດ້.<br /> ທ່ານແນ່ໃຈທີ່ຈະລົບ ຫຼື ບໍ່?",
                                    icon: 'warning',
                                    iconColor: 'red',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'ຢືນຢັນ',
                                    cancelButtonText: 'ຍົກເລີກ'
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                      Swal.fire(
                                        'ລົບຂໍ້ມູນສຳເລັດ!',
                                        'ທ່ານໄດ້ລົບຂໍ້ມູນແບບປະເມີນສຳເລັດແລ້ວ.',
                                        'success'
                                      ) //.then(() => { DelDepartment(row.dep_name) })
                                    }
                                    else {
                                      Swal.fire(
                                        'ລົບຂໍ້ມູນບໍ່ສຳເລັດ!',
                                        'ທ່ານໄດ້ລົບຂໍ້ມູນແບບປະເມີນບໍ່ສຳເລັດ.',
                                        'error'
                                      )
                                    }
                                  })
                                }
                            >
                                <label>
                                <RiDeleteBin6Line className="del-position" />
                                </label>
                            </button>
                                </TableCell>
                              </TableRow>
                             {/* );
                           })
                          } */}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={items.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
                </ThemeProvider>
              </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ManageAssessment;