import "../css/department.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";
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




function Department() {

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





  
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [selectDepartment, setSelectDepartment] = useState("");

  React.useEffect(() => {
    axios
      .get("http://47.250.49.41/myproject1/department", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setItems(res?.data?.department);
      });
  }, []);

  const CreateDepartment = (id) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("token"),
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      dep_name: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://47.250.49.41/myproject1/department", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/department";
        }
      })
      .catch((error) => console.log("error", error));
  };



  const DelDepartment = (id) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("token")
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      dep_name: id,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://47.250.49.41/myproject1/department", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result["status"] === "ok") {
          window.location.href = "/department";
        }
      })
      .catch((error) => console.log("error", error));
  };

  const UpdateDepartment = (id) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("token")
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      dep_ID: id,
    });

    var requestOptions = {
      method: "PUT",
      body: raw,
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://47.250.49.41/myproject1/department", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/department";
        }
      })
      .catch((error) => console.log("error", error));
  };


  // ປູ່ມແກ້ໄຂ-ລົບໃຫ້ດືງ api ໃນຟັງຊັນລູ່ມນີ້

  function SwalAddDepart() {
    (async () => {
      const { value: ipAddress } = await Swal.fire({
        title: "ຊື່ພະແນກ",
        input: "text",
        inputPlaceholder: "ປ້ອນຊື່ພະແນກ",
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
        Swal.fire(`ເພີ່ມພະແນກ: ${ipAddress} ສຳເລັດ!`, ``, `success`).then(
          () => {
            console.log(ipAddress);
            CreateDepartment(ipAddress);
          }
        );
      }
    })();
  }

  function SwalUpdateDepart() {
    (async () => {
      const { value: ipAddress } = await Swal.fire({
        title: "ຊື່ພະແນກ",
        input: "text",
        inputValue: selectDepartment,
        inputPlaceholder: "ປ້ອນຊື່ພະແນກ",
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
        Swal.fire(`ແກ້ໄຂພະແນກ: ${ipAddress} ສຳເລັດ!`, ``, `success`).then(
          () => {
            UpdateDepartment(ipAddress);
          }
        );
      }
    })();
  }

  const MySwalDeleteDepart = withReactContent(Swal);

  return (
    <div className="box-modal-depart">
      <div className="box-depart">
        <Menubar />
        <div className="bg-depart">
          <div className="con-search-depart">
            <div className="search-depart">
              <label className="lbl-search">
                <input
                  className="search-inp-depart"
                  type="text"
                  placeholder="ຄົ້ນຫາ..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                ></input>
                <FaSearch className="filt-ic-depart" />
              </label>
              <button className="btn-search-depart">ຄົ້ນຫາ</button>
            </div>
          </div>
          <div className="tb-depart">
            <div className="con-tbl-depart">
              <p className="p-man-depart">
                ຈັດການຂໍ້ມູນພະແນກ
                <button
                  className="btn-pherm-depart"
                  onClick={() => SwalAddDepart()}
                >
                  <label className="lbl-ic-p-depart">
                    <FaPlusCircle />
                  </label>
                  ເພີ່ມ
                </button>
                {/* {openModal && <EmCreate closeModal={setOpenModal} />} */}
              </p>
              <div className="box-tbl-depart">
                <table className="tbl-depart">
                  <thead>
                    <tr>
                      <th>ລໍາດັບ</th>
                      <th>ລະຫັດພະແນກ</th>
                      <th>ຊື່ພະແນກ</th>
                      <th>ວັນເດືອນປີສ້າງພະແນກ</th>
                      <th>ແກ້ໄຂ</th>
                      <th>ລົບ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items
                      ?.filter((val) => {
                        if (searchTerm === "") {
                          return val;
                        } else if (
                          val.dep_name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          val.dep_create_date
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((row) => (
                        <tr key={row.name}>
                          <td className="tbl-row-no-depart"></td>
                          <td>{row.dep_ID}</td>
                          <td>{row.dep_name}</td>
                          <td>{row.dep_create_date}</td>
                          <td>
                            <button
                              // onClick={() => SwalUpdateDepart()}
                              onClick={() => {
                                SwalUpdateDepart();
                                // console.log(formData.profilepic)
                              }}
                              className="btnnn-depart"
                            >
                              <label>
                                <FaPencilAlt className="up-depart" />
                              </label>
                            </button>
                          </td>
                          <td>
                            <button
                              className="btnnn-depart"
                              onClick={() =>
                                MySwalDeleteDepart.fire({
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
                                      "ທ່ານໄດ້ລົບຂໍ້ມູນພະແນກສຳເລັດແລ້ວ.",
                                      "success"
                                    ).then(() => {
                                      DelDepartment(row.dep_name);
                                    });
                                  } else {
                                    Swal.fire(
                                      "ລົບຂໍ້ມູນບໍ່ສຳເລັດ!",
                                      "ທ່ານໄດ້ລົບຂໍ້ມູນພະແນກບໍ່ສຳເລັດແລ້ວ.",
                                      "error"
                                    );
                                  }
                                })
                              }
                            >
                              <label>
                                <RiDeleteBin6Line className="del-depart" />
                              </label>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

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
                            >ລະຫັດພະແນກ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຊື່ພະແນກ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ວັນເດືອນປີສ້າງພະແນກ</TableCell>
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
                          val.dep_name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          val.dep_create_date
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, i) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                <TableCell>{i+1}</TableCell>
                                <TableCell>{row.dep_ID}</TableCell>
                                <TableCell>{row.dep_name}</TableCell>
                                <TableCell>{row.dep_create_date}</TableCell>
                                <TableCell >
                                  <button
                                    onClick={() => {
                                      SwalUpdateDepart();
                                      // console.log(formData.profilepic)
                                    }}
                                    className="btnnn-depart"
                                  >
                                    <label>
                                      <FaPencilAlt className="up-depart" />
                                    </label>
                                  </button>
                                </TableCell>
                                <TableCell >
                                  <button
                                    className="btnnn-depart"
                                    onClick={() =>
                                      MySwalDeleteDepart.fire({
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
                                            "ທ່ານໄດ້ລົບຂໍ້ມູນພະແນກສຳເລັດແລ້ວ.",
                                            "success"
                                          ).then(() => {
                                            DelDepartment(row.dep_name);
                                          });
                                        } else {
                                          Swal.fire(
                                            "ລົບຂໍ້ມູນບໍ່ສຳເລັດ!",
                                            "ທ່ານໄດ້ລົບຂໍ້ມູນພະແນກບໍ່ສຳເລັດ.",
                                            "error"
                                          );
                                        }
                                      })
                                    }
                                  >
                                    <label>
                                      <RiDeleteBin6Line className="del-depart" />
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

export default Department;
