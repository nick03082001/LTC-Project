import "../css/User.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaPencilAlt } from "react-icons/fa";
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

function User() {

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

  const UserGet = () => {
    axios
      .get("https://tookcomsci.live/myproject1/user", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setItems(res?.data?.user);
      });
  }

  
  useEffect(() => {
    UserGet()
  }, [])



  // ແກ້ໄຂລະຫັດຜ່ານຜູ້ໃຊ້

  const UpdateUsername= (formValues) => {
    var axios = require("axios");
    var data = JSON.stringify({
      username: formValues.username,
      password: formValues.password
    });

    var config = {
      method: "put",
      url: "https://tookcomsci.live/myproject1/user",
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
          window.location.href = "/user";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  
              
  function SwalUpdateUser(data) {
    (async () => {

      const { value: formValues } = await Swal.fire({
        title: 'ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້',
        html:
          `<input id="swal-input1" class="swal2-input" value=${data?.username} readonly/>
          <input id="swal-input2" class="swal2-input" placeholder="ປ້ອນລະຫັດຜ່ານ" minLength={8} required/>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ຢືນຢັນ',
        cancelButtonText: 'ຍົກເລີກ',
        focusConfirm: false,
        preConfirm: () => {
          return {
            username: document.getElementById('swal-input1').value,
            password: document.getElementById('swal-input2').value
          }
        }
      })

      if (formValues) {
        Swal.fire(`ແກ້ໄຂລະຫັດຜ່ານຂອງຜູ້ໃຊ້: ${formValues.username} ສຳເລັດ!`, ``, `success`).then(
          () => {
            console.log(formValues);
            UpdateUsername(formValues)
          }
        );
        
      }

    })()

  }





  // ລົບຂໍ້ມູນພາກສ່ວນ

  const DelUser= (id) => {

    var axios = require('axios');
    var data = JSON.stringify({
        username: id
    });

    var config = {
      method: 'delete',
      url: 'https://tookcomsci.live/myproject1/user',
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
        window.location.href = "/user";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const MySwalDeleteUser = withReactContent(Swal);

  return (
    <div className="box-modal-user">
      <div className="box-user">
        <Menubar />
        <div className="bg-user">
          <div className="con-search-user">
            <div className="search-user">
              <label className="lbl-search">
                <input
                  className="search-inp-user"
                  type="text"
                  placeholder="ຄົ້ນຫາ..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                ></input>
                <FaSearch className="filt-ic-user" />
              </label>
              <button className="btn-search-user">
                ຄົ້ນຫາ
              </button>
            </div>
          </div>
          <div className="tb-user">
            <div className="con-tbl-user">
              <p className="p-man-user">
                ຈັດການຂໍ້ມູນຜູ້ໃຊ້
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
                            >ຊື່ຜູ້ໃຊ້</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຊື່ພະນັກງານ</TableCell>
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
                                  val.username
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase()) ||
                                  val.emp_name
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
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.username}>
                                <TableCell>{rowsPerPage * page + 1 + i}</TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.emp_name}</TableCell>
                                <TableCell>{row.pos_name}</TableCell>
                                <TableCell >
                                  <button
                                    onClick={() => {
                                      SwalUpdateUser(row)
                                      console.log('row', row)
                                    }}
                                    className="btnnn-user"
                                  >
                                    <label>
                                      <FaPencilAlt className="up-user" />
                                    </label>
                                  </button>
                                </TableCell>
                                <TableCell >
                                  <button
                                    className="btnnn-user"
                                    onClick={() =>
                                      MySwalDeleteUser.fire({
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
                                            'ທ່ານໄດ້ລົບຂໍ້ມູນຜູ້ໃຊ້ສຳເລັດແລ້ວ.',
                                            'success'
                                          ).then(() => { DelUser(row.username) })
                                        }
                                        else {
                                          Swal.fire(
                                            'ລົບຂໍ້ມູນບໍ່ສຳເລັດ!',
                                            'ທ່ານໄດ້ລົບຂໍ້ມູນຜູ້ໃຊ້ບໍ່ສຳເລັດ.',
                                            'error'
                                          )
                                        }
                                      })}
                                  >
                                    <label>
                                      <RiDeleteBin6Line className="del-user" />
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

export default User;