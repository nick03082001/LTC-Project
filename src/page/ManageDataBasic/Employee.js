import "../css/Employee.css";
import Menubar from "../components/Menubar.js";
import EmCreate from "./EmCreate.js";
import EmUpdate from "./EmUpdate.js";
import { FaSearch, FaPencilAlt, FaPlusCircle, FaFilter } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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



function Employee() {

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

  // Serial number table
  const [serial, setSerial] = React.useState([]);

  const handleChangeSerial = (event, newserial) => {
    setSerial(newserial);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://www.tookcomsci.live/myproject1/employee", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setItems(res?.data?.employee);
      });
  }, []);

  const DelEmployee = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("token")
    );

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://www.tookcomsci.live/myproject1/employee?emp_ID="+id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result["status"] === "ok") {
          axios
            .get("https://www.tookcomsci.live/myproject1/employee", {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
              },
            })
            .then((res) => {
              setItems(res?.data?.employee);
            });
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getRecord = (e) => {
    // console.log("My DATA : ", e);
    setOpenModalUp(true);
    setSelectData(e);
  };

  const [openModal, setOpenModal] = useState(false);
  const [openModalUp, setOpenModalUp] = useState(false);
  const [selectData, setSelectData] = useState("");
  const MySwal = withReactContent(Swal);

  return (
    <div className="box-modal-em">
      <div className="box-em">
        <Menubar />

        <div className="bg-em">
          <div className="con-search-em">
            <div className="search-em">
              <label className="lbl-search">
                <input
                  className="search-inp-em"
                  type="text"
                  placeholder="ຄົ້ນຫາ..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                ></input>
                <FaSearch className="filt-ic-em" />
              </label>
              {/* <button className="btn-search-em">ຄົ້ນຫາ</button> */}
              <label className="ic-filter-toggle" htmlFor="toggle-filter">
                  <FaFilter className="icon-prosition"/>
              </label>
            </div>
            <input type="checkbox" id="toggle-filter" className='checkb-filter'/>
            <div className="div-filter">
                <button className="btn-select-depart">
                  <label className="ic-filter" htmlFor="toggle-filter-depart">ເລືອກພະແນກ</label>
                </button>
                <input type="checkbox" id="toggle-filter-depart" className='checkb-filtera' />
                <button className="btn-select-province">
                  <label className="ic-filter" htmlFor="toggle-filter-province">ເລືອກແຂວງ</label>
                </button>
                <input type="checkbox" id="toggle-filter-province" className='checkb-filterb' />
              </div>
          </div>
          <div className="tb-em">
            <div className="con-tbl-em">
              <p className="p-man-em">
                ຈັດການຂໍ້ມູນພະນັກງານ
                <button
                  className="btn-pherm"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <label className="lbl-ic-p">
                    <FaPlusCircle />
                  </label>
                  ເພີ່ມ
                </button>
                {openModal && <EmCreate closeModal={setOpenModal} />}
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
                            >ຮູບພະນັກງານ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຊື່</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ນາມສະກຸນ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ເພດ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ເບີໂທ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ພະແນກ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ພາກສ່ວນ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຕໍາແໜ່ງ</TableCell>
                            <TableCell
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ແກ້ໄຂ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ລົບ</TableCell>
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
                            val.gender
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            val.emp_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            val.emp_surname
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            val.emp_tel
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                              val.session_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            val.pos_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            val.dep_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                              
                          ) {
                            return val;
                          }
                        })
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, i) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.emp_ID} >
                                <TableCell>{(rowsPerPage*page)+1+i}</TableCell>
                                <TableCell>{row.emp_ID}</TableCell>
                                <TableCell>
                                  <Avatar src={row.profilepic} />
                                </TableCell>
                                <TableCell>{row.emp_name}</TableCell>
                                <TableCell>{row.emp_surname}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                                <TableCell>{row.emp_tel}</TableCell>
                                <TableCell>{row.dep_name}</TableCell>
                                <TableCell>{row.session_name}</TableCell>
                                <TableCell>{row.pos_name}</TableCell>
                                <TableCell >
                                  <button
                                    onClick={
                                      () => getRecord(row)
                                    }
                                    className="btnnn"
                                  >
                                    <label>
                                      <FaPencilAlt className="up-em" />
                                    </label>
                                  </button>
                                </TableCell>
                                <TableCell >
                                  <button
                                    className="btnnn"
                                    onClick={() =>
                                      MySwal.fire({
                                        title: "ຢືນຢັນການລົບ",
                                        html: "ຂໍ້ມູນທີ່ທ່ານລົບຈະບໍ່ສາມາດກູ້ຄືນໄດ້.<br /> ທ່ານແນ່ໃຈທີ່ຈະລົບ ຫຼື ບໍ່?",
                                        icon: "warning",
                                        iconColor: "red",
                                        showCancelButton: true,
                                        confirmButtonColor: "#3085d6",
                                        cancelButtonColor: "#d33",
                                        confirmButtonText: "ຢືນຢັນ",
                                        cancelButtonText: "ຍົກເລີກ",
                                      }).then((result) => {
                                        if (result.isConfirmed) {
                                          Swal.fire(
                                            "ລົບຂໍ້ມູນສຳເລັດ!",
                                            "ທ່ານໄດ້ລົບຂໍ້ມູນພະນັກງານສຳເລັດແລ້ວ.",
                                            "success"
                                          ).then(() => {
                                            DelEmployee(row.emp_ID);
                                          });
                                        } else {
                                          Swal.fire(
                                            "ລົບຂໍ້ມູນບໍ່ສຳເລັດ!",
                                            "ທ່ານໄດ້ລົບຂໍ້ມູນພະນັກງານບໍ່ສຳເລັດ.",
                                            "error"
                                          );
                                        }
                                      })
                                    }
                                  >
                                    <label>
                                      <RiDeleteBin6Line className="del-em" />
                                    </label>
                                  </button>
                                </TableCell>
                              </TableRow>
                            );
                          })}
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
      <EmUpdate
        closeModalUp={setOpenModalUp}
        data={selectData}
        isOpen={openModalUp}
      />
    </div>
  );
}

export default Employee;
