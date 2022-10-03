import "./ReportScoreAss.css";
import { FaSearch, FaPlusCircle, FaPencilAlt } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import Menubar from "../components/Menubar.js";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Mui test
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Noto Serif Lao",
      textTransform: "none",
      fontSize: "clamp(14px, 2.5vw, 16px)",
      fontWeight: "400",
    },
  },
});

function ReportScoreAss() {
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

  const ManageAssGet = () => {
    axios
      .get("http://192.168.0.174:3000/myproject1/header_form", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setItems(res?.data?.form);
      });
  };

  useEffect(() => {
    ManageAssGet();
  }, []);

  return (
    <>
      <div className="box-report-score-ass">
        <Menubar />
        <div className="bg-report-score-ass">
          <div className="tb-report-score-ass">
            <div className="con-tbl-report-score-ass">
              <p className="p-man-report-score-ass">ລາຍງານການຕອບ</p>
              <div className="div-control-report-score-ass">
                <div className="filter-data-report-score-ass">
                  <label className="label-filter-report-score-ass">
                    ເລືອກແບບຟອມ:
                  </label>
                  <select
                    className="select-filter-report-score-ass"
                    // onChange={(e) => setselectPosition(e.target.value)}
                    // value={selectPosition}
                  >
                    <option selected disabled>
                      ກະລຸນາເລືອກ
                    </option>
                    {/* {pos_name &&
                      pos_name?.map((val) => (
                        <option key={val.pos_name} value={val.pos_name}>
                          {val.pos_name}
                        </option>
                      ))} */}
                  </select>
                </div>
                <div className="search-report-score-ass">
                  <input
                    className="search-inp-report-score-ass"
                    type="text"
                    placeholder="ຄົ້ນຫາຂໍ້ມູນ"
                  ></input>
                  <FaSearch className="filter-ic-report-score-ass" />
                </div>
              </div>
              <div>
                <ThemeProvider theme={theme}>
                  <Paper sx={{ width: "100%" }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead sx={{ backgroundColor: "#51b3f0" }}>
                          <TableRow sx={{ backgroundColor: "#51b3f0" }}>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ລໍາດັບ
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ລະຫັດພະນັກງານ
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ຊື່
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ນາມສະກຸນ
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ຊື່ແບບປະເມີນ
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ຕອບແລ້ວ
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ວັນທີຕອບ
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ເບີ່ງຂໍ້ມູນ
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {/* {items
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row, i) => {
                              return ( */}
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            //   key={row.head_ID}
                          >
                            <TableCell>{rowsPerPage * page + 1}</TableCell>
                            <TableCell>ລະຫັດພະນັກງານ</TableCell>
                            <TableCell>ຊື່</TableCell>
                            <TableCell>ນາມສະກຸນ</TableCell>
                            <TableCell>ຊື່ແບບປະເມີນ</TableCell>
                            <TableCell>ຕອບແລ້ວຊື່</TableCell>
                            <TableCell>17/10/2022</TableCell>
                            <TableCell>
                              <button
                                onClick={() => {
                                    window.location.href = "/report/ReportScoreAssDetial";
                                  // setSelectDepartment(row)
                                  // SwalUpdateSession(row)
                                  // console.log(row)
                                }}
                                className="btnnn-detail"
                              >
                                <label>
                                  <AiOutlineFileSearch className="ic-detail" />
                                </label>
                              </button>
                            </TableCell>
                          </TableRow>
                          {/* );
                            })} */}
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
    </>
  );
}

export default ReportScoreAss;
