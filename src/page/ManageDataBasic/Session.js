import "../css/Session.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
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





function Session() {

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

  const SessionGet = () => {
    axios
      .get("https://www.tookcomsci.live/myproject1/session", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setItems(res?.data?.session);
      });
  }

  useEffect(() => {
    SessionGet()
  }, [])



  // ເພີ່ມຂໍ້ມູນພາກສ່ວນ

  const CreateSession = (id) => {

    var axios = require('axios');
    var data = JSON.stringify({
      "session_name": id
    });

    var config = {
      method: 'post',
      url: 'https://www.tookcomsci.live/myproject1/session',
      headers: { 
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        'Content-Type': 'application/json'
      },
      data : data,
    };

    axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log(response?.message);
          if (response.data["status"] === "ok") {
            window.location.href = "/session";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  };

  function SwalAddSession() {
    (async () => {
      const { value: ipAddress } = await Swal.fire({
        title: "ເພີ່ມຂໍ້ມູນພາກສ່ວນ",
        input: "text",
        inputPlaceholder: "ປ້ອນຊື່ພາກສ່ວນ",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ຢືນຢັນ",
        cancelButtonText: "ຍົກເລີກ",
        inputValidator: (value) => {
          if (!value) {
            return "ກະລຸນາປ້ອນຂໍ້ມູນທີ່ທ່ານຕ້ອງການເພີ່ມ!";
          }
        },
      });

      if (ipAddress) {
        // console.log("jj",items[0]?.session_name)
        if(items.some((e)=>e.session_name === ipAddress)){
          Swal.fire(`ເພີ່ມຂໍ້ມູນພາກສ່ວນບໍ່ສຳເລັດ!`, `ຂໍ້ມູນ ${ipAddress} ມີຢູ່ແລ້ວ`, `error`)
        }
        else {
          Swal.fire(`ເພີ່ມຂໍ້ມູນພາກສ່ວນ: ${ipAddress} ສຳເລັດ!`, ``, `success`).then(
            () => {
              // console.log(ipAddress);
              CreateSession(ipAddress);
            }
          );
        }
        
      }

    })();
  }

  


  // ແກໄຂຂໍ້ມູນພາກສ່ວນ

  const UpdateSession= (id,ipAddress) => {
    // console.log("api",id,ipAddress);
    var axios = require("axios");
    var data = JSON.stringify({
        session_ID: id,
        session_name: ipAddress,
    });

    var config = {
      method: "put",
      url: "https://www.tookcomsci.live/myproject1/session",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data["status"] === "ok") {
          window.location.href = "/session";
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async function SwalUpdateSession(data) {
      
    const { value: ipAddress } = await Swal.fire({
      title: "ແກ້ໄຂຂໍ້ມູນພາກສ່ວນ",
      input: "text",
      inputPlaceholder: "ປ້ອນຊື່ພາກສ່ວນ",
      inputValue: data?.session_name,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ຢືນຢັນ",
      cancelButtonText: "ຍົກເລີກ",
      inputValidator: (value) => {
        if (!value) {
          return "ກະລຸນາປ້ອນຂໍ້ມູນທີ່ທ່ານຕ້ອງການເພີ່ມ!";
        }
      },
    });

    if (ipAddress) {
      if(items.some((e)=>e.session_name === ipAddress)){
        Swal.fire(`ແກ້ໄຂຂໍ້ມູນພາກສ່ວນບໍ່ສຳເລັດ!`, `ຂໍ້ມູນ ${ipAddress} ມີຢູ່ແລ້ວ`, `error`)
      }
      else {
        Swal.fire(`ແກ້ໄຂຂໍ້ມູນພາກສ່ວນໄປເປັນ: ${ipAddress} ສຳເລັດ!`, ``, `success`).then(
          () => {
            UpdateSession(data?.session_ID,ipAddress);
            // console.log("Swal",ipAddress,data?.session_ID);
          }
        );
      }
      
    }
}




  // ລົບຂໍ້ມູນພາກສ່ວນ

  const DelSession = (id) => {

    var axios = require('axios');
    var data = JSON.stringify({
        session_name: id
    });

    var config = {
      method: 'delete',
      url: 'https://www.tookcomsci.live/myproject1/session',
      headers: { 
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data["status"] === "ok") {
        window.location.href = "/session";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const MySwalDeleteSession = withReactContent(Swal);




  return (
    <div className="box-modal-Session">
      <div className="box-Session">
        <Menubar />
        <div className="bg-Session">
          <div className="con-search-Session">
            <div className="search-Session">
              <label className="lbl-search">
                <input
                  className="search-inp-Session"
                  type="text"
                  placeholder="ຄົ້ນຫາ..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                ></input>
                <FaSearch className="filt-ic-Session" />
              </label>
              <button className="btn-search-Session">
                ຄົ້ນຫາ
              </button>
            </div>
          </div>
          <div className="tb-Session">
            <div className="con-tbl-Session">
              <p className="p-man-Session">
                ຈັດການຂໍ້ມູນພາກສ່ວນ
                <button
                  className="btn-pherm-Session"
                  onClick={() => SwalAddSession()}
                >
                  <label className="lbl-ic-p-Session">
                    <FaPlusCircle />
                  </label>
                  ເພີ່ມ
                </button>
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
                            >ລະຫັດພາກສ່ວນ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ພາກສ່ວນ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ວັນທີສ້າງ</TableCell>
                            <TableCell
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ແກ້ໄຂ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ລົບ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items&&
                            items
                              ?.filter((val) => {
                                if (searchTerm === "") {
                                  return val;
                                } else if (
                                  val.session_ID.toString()
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase()) ||
                                  val.session_name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return val;
                                }
                              })
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, i) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.session_ID} >
                                <TableCell>{rowsPerPage * page + 1 + i}</TableCell>
                                <TableCell>{row.session_ID}</TableCell>
                                <TableCell>{row.session_name}</TableCell>
                                <TableCell>{row.session_create_date}</TableCell>
                                <TableCell >
                                  <button
                                    onClick={() => {
                                      // setSelectDepartment(row)
                                      SwalUpdateSession(row)
                                      console.log(row)
                                    }}
                                    className="btnnn-Session"
                                  >
                                    <label>
                                      <FaPencilAlt className="up-Session" />
                                    </label>
                                  </button>
                                </TableCell>
                                <TableCell >
                                  <button
                                    className="btnnn-Session"
                                    onClick={() =>
                                      MySwalDeleteSession.fire({
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
                                            'ທ່ານໄດ້ລົບຂໍ້ມູນພາກສ່ວນສຳເລັດແລ້ວ.',
                                            'success'
                                          ).then(() => { DelSession(row.session_name) })
                                        }
                                        else {
                                          Swal.fire(
                                            'ລົບຂໍ້ມູນບໍ່ສຳເລັດ!',
                                            'ທ່ານໄດ້ລົບຂໍ້ມູນພາກສ່ວນບໍ່ສຳເລັດ.',
                                            'error'
                                          )
                                        }
                                      })}
                                  >
                                    <label>
                                      <RiDeleteBin6Line className="del-Session" />
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
    </div>
  );
}

export default Session;