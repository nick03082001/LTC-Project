import "../css/Change_position.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaExchangeAlt, FaHistory, FaPencilAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
import Modal from "react-modal";
Modal.setAppElement("#root");


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

function Change_Pos() {

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




// Modal ການຍ້າຍຕຳແໜ່ງ

const [isOpenChage, setIsOpenChage] = useState(false);

function ModalChage() {
  setIsOpenChage(!isOpenChage);
  // console.log(isOpenChage)
}



// ໂຊຂໍ້ມູນ

const [searchTerm, setSearchTerm] = useState("");
const [items, setItems] = useState([]);

const MovingGet = () => {
  axios
    .get("http://192.168.0.174:3000/myproject1/employee", {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
    .then((res) => {
      setItems(res?.data?.employee);
    });
}


useEffect(() => {
  MovingGet()
}, [])


// ໂຊຂໍ້ມູນ api combobox

const [dep_name, setDepartment] = useState([]);
const [pos_name, setPosition] = useState([]);
const [session_name, setSession] = useState([]);

React.useEffect(() => {

  axios
    .get("http://192.168.0.174:3000/myproject1/session", {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
    .then((res) => {
      setSession(res?.data?.session);
    });

  axios
    .get("http://192.168.0.174:3000/myproject1/department", {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
    .then((res) => {
      setDepartment(res?.data?.department);
    });

  axios
    .get("http://192.168.0.174:3000/myproject1/position", {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
    .then((res) => {
      setPosition(res?.data?.position);
    });
}, []);


const [selectData, setSelectData] = useState("");




// ບັນທຶກການຍ້າຍຕຳແໜ່ງ

const [selectEmId, setSelectEmId] = useState("");
const [selectSession, setSelectSession] = useState("");
const [selectPosition, setselectPosition] = useState("");
const [selectDepartment, setselectDepartment] = useState("");

React.useEffect(() => {
  setSelectSession(selectData.session_name);
  setselectDepartment(selectData.dep_name);
  setselectPosition(selectData.pos_name);
  setSelectEmId(selectData.emp_ID);
}, [selectData]);

const ChagePosition = () => {

  var axios = require('axios');
  var data = JSON.stringify({
    "emp_ID": selectEmId,
    "dep_name": selectDepartment,
    "pos_name": selectPosition,
    "session_name": selectSession
  });

  // console.log(selectEmId)
  // console.log(selectDepartment)
  // console.log(selectPosition)
  // console.log(selectSession)

  var config = {
    method: 'post',
    url: 'http://192.168.0.174:3000/myproject1/moving',
    headers: { 
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      'Content-Type': 'application/json'
    },
    data : data,
  };

  axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data["status"] === "ok") {
          window.location.href = "/organization/moving/position_department";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
};

// sweetalert button

const MySwalDeleteDepart = withReactContent(Swal);


    return (
        <>
        <div className="box-change-pos">
            <Menubar />
            <div className="bg-change-pos">
            <div className="con-search-change-pos">
                <div className="search-change-pos">
                <label className="lbl-search">
                    <input
                    className="search-inp-change-pos"
                    type="text"
                    placeholder="ຄົ້ນຫາ..."
                    ></input>
                    <FaSearch className="filt-ic-change-pos" />
                </label>
                <button className="btn-search-change-pos">
                    ຄົ້ນຫາ
                </button>
                </div>
            </div>
            <div className="tb-change-pos">
                <div className="con-tbl-change-pos">
                <p className="p-man-change-pos">
                    ຈັດການຂໍ້ມູນການຍ້າຍຕຳແໜ່ງ
                </p>
                <p className="p-history-change-pos">
                    <a href='/organization/moving/position_department/history'>
                    <button
                        className="btn-pherm-change-pos"
                        // onClick={() => SwalAddDepart()}
                        >
                        <label className="lbl-ic-p-change-pos">
                            <FaHistory />
                        </label>
                        ເບີ່ງປະຫວັດການຍ້າຍ
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
                            >ພາກສ່ວນ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ພະແນກ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຕໍາແໜ່ງ</TableCell>
                            <TableCell
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຍ້າຍຕຳແໜ່ງ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items&&
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
                                    .includes(searchTerm.toLowerCase()) ||
                                  val.session_name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase()) ||
                                  val.dep_name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase()) ||
                                  val.pos_name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return val;
                                }
                              })
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, i) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.emp_ID}>
                                <TableCell>{rowsPerPage * page + 1 + i}</TableCell>
                                <TableCell>{row.emp_ID}</TableCell>
                                <TableCell><Avatar src={row.profilepic} /></TableCell>
                                <TableCell>{row.emp_name}</TableCell>
                                <TableCell>{row.emp_surname}</TableCell>
                                <TableCell>{row.session_name}</TableCell>
                                <TableCell>{row.dep_name}</TableCell>
                                <TableCell>{row.pos_name}</TableCell>
                                <TableCell >
                                  <button
                                    onClick={()=>{
                                      ModalChage();
                                      setSelectData(row);
                                      // console.log(row)
                                    }}
                                    className="btnnn-change-pos"
                                  >
                                    <label>
                                      <FaExchangeAlt className="up-change-pos" />
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
        <Modal
          isOpen={isOpenChage}
          // onRequestClose={ModalChage}
          contentLabel="My dialog"
          className="modal-profile"
          overlayClassName="myoverlay"
        >
        <p className="p-title-chage-pos">ຍ້າຍຕຳແໜ່ງພະນັກງານ</p>
          <div className="contener-Modal">
            <p className="p-contener">
            <label className="label-input-modal-chag-pos">ລະຫັດພະນັກງານ:</label>
              <input className="input-modal-chage-pos" 
                placeholder="ລະຫັດພະນັກງານ" 
                value={selectData.emp_ID}
                // onChange={(e) => setEID(e.target.value)}
                type="text"
                readOnly/>  
            </p>
            <p className="p-contener">
              <label className="label-input-modal-chag-pos">ຕຳແໜ່ງ:</label>
              <select
                className="input-modal-chage-pos"
                onChange={(e) => setselectPosition(e.target.value)}
                value={selectPosition}
              >
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {pos_name &&
                  pos_name?.map((val) => (
                    <option key={val.pos_name} value={val.pos_name}>
                      {val.pos_name}
                    </option>
                  ))}
              </select>
            </p>
            <p className="p-contener">
              <label className="label-input-modal-chag-pos">ພະແນກ:</label>
              <select
                className="input-modal-chage-pos"
                onChange={(e) => setselectDepartment(e.target.value)}
                value={selectDepartment}
              >
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {dep_name &&
                  dep_name?.map((val) => (
                    <option key={val.dep_name} value={val.dep_name}>
                      {val.dep_name}
                    </option>
                  ))}
              </select>
            </p>
            <p className="p-contener">
              <label className="label-input-modal-chag-pos">ພາກສ່ວນ:</label>
              <select
                className="input-modal-chage-pos"
                value={selectSession}
                onChange={(e) => setSelectSession(e.target.value)}
              >
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {session_name &&
                  session_name?.map((val) => (
                    <option key={val.session_ID} value={val.session_name}>
                      {val.session_name}
                    </option>
                  ))}
              </select>
            </p>
            <p className="p-contener">
              <label className="label-input-modal-chag-pos">ເອກະສານ:</label>
              <input className="input-modal-chage-pos" type="file"></input>
            </p>
          </div>
          <div className="p-button-chage-pos">
            <button 
              onClick={()=>
                MySwalDeleteDepart.fire({
                    title: "ຢືນຢັນການຍ້າຍຕຳແໜ່ງ",
                    icon: "warning",
                    iconColor: "#3085d6",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "ຢືນຢັນ",
                    cancelButtonText: "ຍົກເລີກ",
                  }).then((result) => {
                    if (result.isConfirmed){
                      Swal.fire(`ການຍ້າຍຕຳແໜ່ງພະນັກງານສຳເລັດ!`, ``, `success`)
                      ChagePosition();
                      ModalChage(false);
                    }
                  })}
              className="btn-save-chage-pos"
              >
              ບັນທຶກ
            </button>
            <button
              onClick={() => 
                MySwalDeleteDepart.fire({
                  title: "ຢືນຢັນການຍົກເລີກ",
                  icon: "warning",
                  iconColor: "red",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "ຢືນຢັນ",
                  cancelButtonText: "ຍົກເລີກ",
                }).then((result) => {
                  if (result.isConfirmed) {
                    ModalChage(false);
                  }
                })
                }
              className="btn-cencle-chage-pos"
            >
              ຍົກເລີກ
            </button>
          </div>
        </Modal>
        </>
    );
}

export default Change_Pos;