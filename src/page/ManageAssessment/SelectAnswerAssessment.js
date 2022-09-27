import "../css/SelectAnswerAssessment.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaFileSignature } from "react-icons/fa";
import React, { useState, useEffect } from 'react'
import Data from "./DataYai.json"
import SaveAnswerAssessment from "./SaveAnswerAssessment.js";
import axios from "axios";

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







function SelectAnswerAssessment() {

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



  





    
  const [contacts, setContacts] = useState(Data);
  const [val,setVal]=useState([]);

  const HeaderAssGet = () => {
      axios.get("http://192.168.0.193:5000/test/myproject1/header_form")
      .then((result) => {
          // console.log(result.data.form)
          setVal(result.data.form);
        });
        
    };

  useEffect(() => {
      HeaderAssGet();
  }, []);



    
    // const [selectTitle, setSelectTitle] = useState("");
    // const getTitle = (e) => {
    //     console.log("My DATA : " ,e);
    //     setSelectTitle(e);
    //   }

    return (
        
        <div className="box-select-ass">
            <Menubar />
            <div className="bg-select-ass">
            <div className="con-search-select-ass">
                <div className="search-select-ass">
                <label className="lbl-search">
                    <input
                    className="search-inp-select-ass"
                    type="text"
                    placeholder="ຄົ້ນຫາ..."
                    ></input>
                    <FaSearch className="filt-ic-select-ass" />
                </label>
                <button className="btn-search-select-ass">
                    ຄົ້ນຫາ
                </button>
                </div>
            </div>
            <div className="tb-select-ass">
                <div className="con-tbl-select-ass">
                <p className="p-man-select-ass">
                    ເລືອກຕອບແບບປະເມີນ
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
                            >ກຳນົດສົ່ງ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຕອບ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {val
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, i) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell>ລໍາດັບ</TableCell>
                                <TableCell>{row.head_name}</TableCell>
                                <TableCell>{row.date_create}</TableCell>
                                <TableCell>{row.head_ID}</TableCell>
                                <TableCell >
                                  <button
                                    onClick={() => {
                                      // getTitle(row); 
                                      alert( row.head_ID)
                                    }}
                                    className="btnnn"
                                  >
                                    <label>
                                      <FaFileSignature className="up-em" />
                                    </label>
                                  </button>
                                </TableCell>
                              </TableRow>
                              );
                           })
                          } 
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={val.length}
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
            {/* <SaveAnswerAssessment dataTitle={selectTitle} /> */}
        </div>
    );
}

export default SelectAnswerAssessment;