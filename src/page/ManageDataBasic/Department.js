import "../css/department.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState} from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
  

  React.useEffect(() => {
    axios
      .get("https://www.tookcomsci.live/myproject1/department", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setItems(res?.data?.department);
      });
  }, []);






  const CreateDepartment = (id) => {

    var axios = require('axios');
    var data = JSON.stringify({
      "dep_name": id
    });

    var config = {
      method: 'post',
      url: 'https://www.tookcomsci.live/myproject1/department',
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
        window.location.href = "/department";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };



  

  const DelDepartment = (id) => {

    var axios = require('axios');
    var data = JSON.stringify({
      "dep_name": id
    });

    var config = {
      method: 'delete',
      url: 'https://www.tookcomsci.live/myproject1/department',
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
        window.location.href = "/department";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };




  const UpdateDepartment = (dep_name,id) => {
    var axios = require("axios");
    var data = JSON.stringify({
      dep_ID: id,
      dep_name: dep_name,
    });

    var config = {
      method: "put",
      url: "https://www.tookcomsci.live/myproject1/department",
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
          window.location.href = "/department";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  // ປູ່ມແກ້ໄຂ-ລົບໃຫ້ດືງ api ໃນຟັງຊັນລູ່ມນີ້

  function SwalAddDepart() {
    (async () => {
      const { value: ipAddress } = await Swal.fire({
        title: "ເພີ່ມຂໍ້ມູນພະແນກ",
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
        if(items.some((e)=>e.dep_name === ipAddress)){
          Swal.fire(`ເພີ່ມຂໍ້ມູນພະແນກບໍ່ສຳເລັດ!`, `ຂໍ້ມູນ ${ipAddress} ມີຢູ່ແລ້ວ`, `error`)
        }
        else {
          Swal.fire(`ເພີ່ມຂໍ້ມູນພະແນກ: ${ipAddress} ສຳເລັດ!`, ``, `success`).then(
            () => {
              // console.log(ipAddress);
              CreateDepartment(ipAddress);
            }
          );
        }
      }
    })();
  }




  async function SwalUpdateDepart(data) {
      
      const { value: ipAddress } = await Swal.fire({
        title: "ແກ້ໄຂພະແນກ",
        input: "text",
        inputPlaceholder: "ປ້ອນຊື່ພະແນກ",
        inputValue: data?.dep_name,
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
        if(items.some((e)=>e.dep_name === ipAddress)){
          Swal.fire(`ແກ້ໄຂຂໍ້ມູນພະແນກບໍ່ສຳເລັດ!`, `ຂໍ້ມູນ ${ipAddress} ມີຢູ່ແລ້ວ`, `error`)
        }
        else {
          Swal.fire(`ແກ້ໄຂຂໍ້ມູນພະແນກໄປເປັນ: ${ipAddress} ສຳເລັດ!`, ``, `success`).then(
            () => {
              UpdateDepartment(ipAddress,data?.dep_ID);
              // console.log("Swal",ipAddress,data?.session_ID);
            }
          );
        }
      }
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
              </p>

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
                              ລະຫັດພະແນກ
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ຊື່ພະແນກ
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ວັນເດືອນປີສ້າງພະແນກ
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ແກ້ໄຂ
                            </TableCell>
                            <TableCell
                              sx={{
                                backgroundColor: "#51b3f0",
                                fontWeight: "bold",
                              }}
                            >
                              ລົບ
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {items &&
                            items
                              ?.filter((val) => {
                                if (searchTerm === "") {
                                  return val;
                                } else if (
                                  val.dep_ID.toString()
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase()) ||
                                  val.dep_name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return val;
                                }
                              })
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row, i) => {
                                return (
                                  <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.dep_ID}
                                  >
                                    <TableCell>
                                      {rowsPerPage * page + 1 + i}
                                    </TableCell>
                                    <TableCell>{row.dep_ID}</TableCell>
                                    <TableCell>{row.dep_name}</TableCell>
                                    <TableCell>{row.dep_create_date}</TableCell>
                                    <TableCell>
                                      <button
                                        onClick={() => {
                                        SwalUpdateDepart(row);
                                          // console.log(row)
                                        }}
                                        className="btnnn-depart"
                                      >
                                        <label>
                                          <FaPencilAlt className="up-depart" />
                                        </label>
                                      </button>
                                    </TableCell>
                                    <TableCell>
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
