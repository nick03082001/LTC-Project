import "../css/Position.css";
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





function Position() {

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

  const PositionGet = () => {
    axios
      .get("https://tookcomsci.live/myproject1/position", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setItems(res?.data?.position);
      });
  }

  useEffect(() => {
    PositionGet()
  }, [])



  // ເພີ່ມຂໍ້ມູນຕຳແໜ່ງ

  const CreatePosition = (id) => {

    var axios = require('axios');
    var data = JSON.stringify({
      "pos_name": id
    });

    var config = {
      method: 'post',
      url: 'https://tookcomsci.live/myproject1/position',
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
            window.location.href = "/position";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  };

  function SwalAddPosition() {
    (async () => {
      const { value: ipAddress } = await Swal.fire({
        title: "ເພີ່ມຂໍ້ມູນຕຳແໜ່ງ",
        input: "text",
        inputPlaceholder: "ປ້ອນຊື່ຕຳແໜ່ງ",
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
        Swal.fire(`ເພີ່ມຂໍ້ມູນຕຳແໜ່ງ: ${ipAddress} ສຳເລັດ!`, ``, `success`).then(
          () => {
            // console.log(ipAddress);
            CreatePosition(ipAddress);
          }
        );
      }
    })();
  }

  


  // ແກໄຂຂໍ້ມູນຕຳແໜ່ງ

  const UpdatePosition= (pos_name,id) => {
    var axios = require("axios");
    var data = JSON.stringify({
      pos_ID: id,
      pos_name: pos_name,
    });

    var config = {
      method: "put",
      url: "https://tookcomsci.live/myproject1/position",
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
          window.location.href = "/position";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async function SwalUpdatePosition(data) {
      
    const { value: ipAddress } = await Swal.fire({
      title: "ແກ້ໄຂຂໍ້ມູນຕຳແໜ່ງ",
      input: "text",
      inputPlaceholder: "ປ້ອນຊື່ຕຳແໜ່ງ",
      inputValue: data?.pos_name,
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
      Swal.fire(`ແກ້ໄຂຂໍ້ມູນຕຳແໜ່ງໄປເປັນ: ${ipAddress} ສຳເລັດ!`, ``, `success`).then(
        () => {
          UpdatePosition(ipAddress,data?.pos_ID);
          console.log(ipAddress);
        }
      );
    }
}




  // ລົບຂໍ້ມູນຕຳແໜ່ງ

  const DelPositon = (id) => {

    var axios = require('axios');
    var data = JSON.stringify({
      pos_name: id
    });

    var config = {
      method: 'delete',
      url: 'https://tookcomsci.live/myproject1/position',
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
        window.location.href = "/position";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const MySwalDeletePosition = withReactContent(Swal);




  return (
    <div className="box-modal-position">
      <div className="box-position">
        <Menubar />
        <div className="bg-position">
          <div className="con-search-position">
            <div className="search-position">
              <label className="lbl-search">
                <input
                  className="search-inp-position"
                  type="text"
                  placeholder="ຄົ້ນຫາ..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                ></input>
                <FaSearch className="filt-ic-position" />
              </label>
              <button className="btn-search-position">
                ຄົ້ນຫາ
              </button>
            </div>
          </div>
          <div className="tb-position">
            <div className="con-tbl-position">
              <p className="p-man-position">
                ຈັດການຂໍ້ມູນຕຳແໜ່ງ
                <button
                  className="btn-pherm-position"
                  onClick={() => SwalAddPosition()}
                >
                  <label className="lbl-ic-p-position">
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
                            >ລະຫັດຕຳແໜ່ງ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຕຳແໜ່ງ</TableCell>
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
                                  val.pos_ID.toString()
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
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.pos_ID} >
                                <TableCell>{rowsPerPage * page + 1 + i}</TableCell>
                                <TableCell>{row.pos_ID}</TableCell>
                                <TableCell>{row.pos_name}</TableCell>
                                <TableCell >
                                  <button
                                    onClick={() => {
                                      // setSelectDepartment(row)
                                      SwalUpdatePosition(row)
                                    }}
                                    className="btnnn-position"
                                  >
                                    <label>
                                      <FaPencilAlt className="up-position" />
                                    </label>
                                  </button>
                                </TableCell>
                                <TableCell >
                                  <button
                                    className="btnnn-position"
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
                                            'ທ່ານໄດ້ລົບຂໍ້ມູນຕຳແໜ່ງສຳເລັດແລ້ວ.',
                                            'success'
                                          ).then(() => { DelPositon(row.pos_name) })
                                        }
                                        else {
                                          Swal.fire(
                                            'ລົບຂໍ້ມູນບໍ່ສຳເລັດ!',
                                            'ທ່ານໄດ້ລົບຂໍ້ມູນຕຳແໜ່ງບໍ່ສຳເລັດ.',
                                            'error'
                                          )
                                        }
                                      })}
                                  >
                                    <label>
                                      <RiDeleteBin6Line className="del-position" />
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

export default Position;
