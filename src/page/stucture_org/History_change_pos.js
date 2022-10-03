import "../css/History_change_pos.css";
import Menubar from "../components/Menubar.js";
import { FaSearch} from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";

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



function History_change_pos() {

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
  
  
  
// ໂຊຂໍ້ມູນ

const [searchTerm, setSearchTerm] = useState("");
const [items, setItems] = useState([]);

const HistoryMovingGet = () => {
  axios
    .get("http://192.168.0.174:3000/myproject1/moving", {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
    .then((res) => {
      setItems(res?.data?.moving);
    });
}


useEffect(() => {
  HistoryMovingGet()
}, [])

  
  
  



    return (
        <div className="box-modal-change-pos-history">
        <div className="box-change-pos-history">
            <Menubar />
            <div className="bg-change-pos-history">
            <div className="con-search-change-pos-history">
                <div className="search-change-pos-history">
                <label className="lbl-search">
                    <input
                    className="search-inp-change-pos-history"
                    type="text"
                    placeholder="ຄົ້ນຫາ..."
                    ></input>
                    <FaSearch className="filt-ic-change-pos-history" />
                </label>
                <button className="btn-search-change-pos-history">
                    ຄົ້ນຫາ
                </button>
                </div>
            </div>
            <div className="tb-change-pos-history">
                <div className="con-tbl-change-pos-history">
                <p className="p-man-change-pos-history">
                    ປະຫວັດການຍ້າຍຕຳແໜ່ງ
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
                            >ລະຫັດພະນັກງານ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຊື່</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ນາມສະກຸນ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ພາກສ່ວນໃໝ່</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ພະແນກໃໝ່</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຕໍາແໜ່ງໃໝ່</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ພາກສ່ວນເກົ່າ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ພະແນກເກົ່າ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຕໍາແໜ່ງເກົ່າ</TableCell>
                            <TableCell
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold',minWidth: "90px"}}
                            >ວັນທີຍ້າຍ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ເອກະສານອ້າງອີງ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items &&
                            items
                              ?.filter((val) => {
                                if (searchTerm === "") {
                                  return val;
                                } else if (
                                  val.emp_ID
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase()) ||
                                  val.emp_name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase()) ||
                                  val.emp_surname
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return val;
                                }
                              })
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, i) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell>{rowsPerPage * page + 1 +i}</TableCell>
                                <TableCell>{row.emp_ID}</TableCell>
                                <TableCell>{row.emp_name}</TableCell>
                                <TableCell>{row.emp_surname}</TableCell>
                                <TableCell>{row.session_name}</TableCell>
                                <TableCell>{row.dep_name}</TableCell>
                                <TableCell>{row.pos_name}</TableCell>
                                <TableCell>{row.session_name_new}</TableCell>
                                <TableCell>{row.dep_name_new}</TableCell>
                                <TableCell>{row.pos_name_new}</TableCell>
                                <TableCell >{row.moving_date}</TableCell>
                                <TableCell>
                                  <button
                                    // onClick={() => SwalUpdateDepart()}
                                    className="btnnn-change-pos"
                                  >
                                    <label>
                                      <AiOutlineFileSearch className="ic-change-pos-history" />
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

export default History_change_pos;