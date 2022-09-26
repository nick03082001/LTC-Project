import "../css/Employee.css";
import Menubar from "../components/Menubar.js";
import EmCreate from "./EmCreate.js";
import EmUpdate from "./EmUpdate.js";
import { FaSearch, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
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
      fontSize: 16,
    },
  },
});



function Employee() {

  // Mui test
  const columns = [
    { id: 'name', label: 'ລໍາດັບ' },
    { id: 'code', label: 'ລະຫັດ' },
    { id: 'code', label: 'ຮູບພະນັກງານ' },
    {
      id: 'population',
      label: 'ເພດ',
      align: 'right',
    },
    {
      id: 'size',
      label: 'ຊື່',
      align: 'right',
    },
    {
      id: 'density',
      label: 'ນາມສະກຸນ',
      align: 'right',
    },
    {
      id: 'densit',
      label: 'ເບີໂທ',
      align: 'right',
    },
    {
      id: 'densi',
      label: 'ພາກສ່ວນ',
      align: 'right',
    },
    {
      id: 'dens',
      label: 'ຕໍາແໜ່ງ',
      align: 'right',
    },
    
    {
      id: 'den',
      label: 'ພະແນກ',
      align: 'right',
    },
    
    {
      id: 'de',
      label: 'ແຂວງ',
      align: 'right',
    },
  ];


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
      .get("http://47.250.49.41/myproject1/employee", {
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

    // var raw = JSON.stringify({
    //   emp_ID: id,
    // });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://47.250.49.41/myproject1/employee?emp_ID="+id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result["status"] === "ok") {
          axios
            .get("http://47.250.49.41/myproject1/employee", {
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
    console.log("My DATA : ", e);
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
              <button className="btn-search-em">ຄົ້ນຫາ</button>
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
              {/* <div className="box-tbl-em">
                <table className="tbl-em">
                  <thead>
                    <tr>
                      <th>ລໍາດັບ</th>
                      <th>ລະຫັດພະນັກງານ</th>
                      <th>ຮູບພະນັກງານ</th>
                      <th>ເພດ</th>
                      <th>ຊື່</th>
                      <th>ນາມສະກຸນ</th>
                      <th>ເບີໂທ</th>
                      <th>ພາກສ່ວນ</th>
                      <th>ຕໍາແໜ່ງ</th>
                      <th>ພະແນກ</th>
                      <th>ແຂວງ</th>
                      <th>ແກ້ໄຂ</th>
                      <th>ລົບ</th>
                    </tr>
                  </thead>
                  <tbody>
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
                        .map((formData) => (
                          <tr key={formData.name}>
                            <td className="tbl-row-no-em"></td>
                            <td>{formData.emp_ID}</td>
                            <td>
                              <Avatar src={formData.profilepic} />
                            </td>
                            <td>{formData.gender}</td>
                            <td>{formData.emp_name}</td>
                            <td>{formData.emp_surname}</td>
                            <td>{formData.emp_tel}</td>
                            <td>{formData.session_name}</td>
                            <td>{formData.pos_name}</td>
                            <td>{formData.dep_name}</td>
                            <td>{formData.province}</td>
                            <td>
                              <button
                                onClick={
                                  () => getRecord(formData)
                                }
                                className="btnnn"
                              >
                                <label>
                                  <FaPencilAlt className="up-em" />
                                </label>
                              </button>
                            </td>
                            <td>
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
                                        DelEmployee(formData.emp_ID);
                                      });
                                    } else {
                                      Swal.fire(
                                        "ລົບຂໍ້ມູນບໍ່ສຳເລັດ!",
                                        "ທ່ານໄດ້ລົບຂໍ້ມູນພະນັກງານບໍ່ສຳເລັດແລ້ວ.",
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
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
                
              </div> */}
              <div>
                <ThemeProvider theme={theme}>
                <Paper sx={{ width: '100%', }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                            <TableCell>ລໍາດັບ</TableCell>
                            <TableCell>ລະຫັດພະນັກງານ</TableCell>
                            <TableCell>ຮູບພະນັກງານ</TableCell>
                            <TableCell>ເພດ</TableCell>
                            <TableCell>ຊື່</TableCell>
                            <TableCell>ນາມສະກຸນ</TableCell>
                            <TableCell>ເບີໂທ</TableCell>
                            <TableCell>ພາກສ່ວນ</TableCell>
                            <TableCell>ຕໍາແໜ່ງ</TableCell>
                            <TableCell>ພະແນກ</TableCell>
                            <TableCell>ແຂວງ</TableCell>
                            <TableCell>ແກ້ໄຂ</TableCell>
                            <TableCell>ລົບ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, i) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                <TableCell>{i+1}</TableCell>
                                <TableCell>{row.emp_ID}</TableCell>
                                <TableCell>
                                  <Avatar src={row.profilepic} />
                                </TableCell>
                                <TableCell>{row.gender}</TableCell>
                                <TableCell>{row.emp_name}</TableCell>
                                <TableCell>{row.emp_surname}</TableCell>
                                <TableCell>{row.emp_tel}</TableCell>
                                <TableCell>{row.session_name}</TableCell>
                                <TableCell>{row.pos_name}</TableCell>
                                <TableCell>{row.dep_name}</TableCell>
                                <TableCell>{row.province} </TableCell>
                                <TableCell>
                                  <button
                                    onClick={
                                      () => getRecord(row)
                                      // setOpenModalUp(true)
                                      // this.close(formData.emp_ID);
                                      // setSelectData(formData)
                                    }
                                    className="btnnn"
                                  >
                                    <label>
                                      <FaPencilAlt className="up-em" />
                                    </label>
                                  </button>
                                </TableCell>
                                <TableCell>
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
                                            "ທ່ານໄດ້ລົບຂໍ້ມູນພະນັກງານບໍ່ສຳເລັດແລ້ວ.",
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
                    rowsPerPageOptions={[2, 25, 100]}
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
