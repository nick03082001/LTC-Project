import "../css/User.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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










  const [items, setItems] = useState([]);

  useEffect(() => {
    UserGet()
  }, [])

  const UserGet = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "x-api-key",
      sessionStorage.getItem('token')
    );
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("http://192.168.0.171:3000/test/myproject1/users", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      )

  }

  // const UpdateDepartment = id => {
  //   window.location = '/department'
  // }

  const DelDepartment = id => {
    var myHeaders = new Headers();
    myHeaders.append(
      "x-api-key",
      sessionStorage.getItem('token')
    );

    var raw = JSON.stringify({
      "dep_name": id
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://192.168.0.171:3000/myproject1/delete_department", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result['status'] === 'ok') {
          UserGet()
        }
      })
      .catch(error => console.log('error', error));
  }





// ປູ່ມແກ້ໄຂ-ລົບໃຫ້ດືງ api ໃນຟັງຊັນລູ່ມນີ້

  function SwalAddUser() {

    (async () => {

      const { value: formValues } = await Swal.fire({
        title: 'ເພີ່ມຂໍ້ມູນຜູ້ໃຊ້',
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="ຊື່ຜູ້ໃຊ້">' +
          '<input id="swal-input2" class="swal2-input" placeholder="ລະຫັດຜ່ານ">',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ຢືນຢັນ',
        cancelButtonText: 'ຍົກເລີກ',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })

      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }

    })()
  }

  function SwalUpdateUser() {
    (async () => {

      const { value: formValues } = await Swal.fire({
        title: 'ແກ້ໄຂຂໍ້ມູນຜູ້ໃຊ້',
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="ຊື່ຜູ້ໃຊ້">' +
          '<input id="swal-input2" class="swal2-input" placeholder="ລະຫັດຜ່ານ">',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ຢືນຢັນ',
        cancelButtonText: 'ຍົກເລີກ',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })

      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }

    })()

  }


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
                <button
                  className="btn-pherm-user"
                  onClick={() => SwalAddUser()}
                >
                  <label className="lbl-ic-p-user">
                    <FaPlusCircle />
                  </label>
                  ເພີ່ມ
                </button>
                {/* {openModal && <EmCreate closeModal={setOpenModal} />} */}
              </p>
              <div className='box-tbl-user'>
                <table className="tbl-user">
                  <thead>
                    <tr>
                      <th>ລໍາດັບ</th>
                      <th>ຊື່ຜູ້ໃຊ້</th>
                      <th>ຊື່ພະນັກງານ</th>
                      <th>ຕໍາແໜ່ງ</th>
                      <th>ແກ້ໄຂ</th>
                      <th>ລົບ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((row) => (
                      <tr
                        key={row.name}
                      >
                        <td className="tbl-row-no-user"></td>
                        <td>{row.username}</td>
                        <td>{row.emp_name}</td>
                        <td>{row.pos_name}</td>
                        <td >
                          <button
                            onClick={() => SwalUpdateUser()}
                            className="btnnn-user"
                          >
                            <label>
                              <FaPencilAlt className="up-user" />
                            </label>
                          </button>
                        </td>
                        <td>
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
                                  ).then(() => { DelDepartment(row.dep_name) })
                                }
                                else {
                                  Swal.fire(
                                    'ລົບຂໍ້ມູນບໍ່ສຳເລັດ!',
                                    'ທ່ານໄດ້ລົບຂໍ້ມູນຜູ້ໃຊ້ບໍ່ສຳເລັດແລ້ວ.',
                                    'error'
                                  )
                                }
                              })}
                          >
                            <label>
                              <RiDeleteBin6Line className="del-user" />
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
                        {items 
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, i) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                <TableCell>{i+1}</TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.emp_name}</TableCell>
                                <TableCell>{row.pos_name}</TableCell>
                                <TableCell >
                                  <button
                                    onClick={() => SwalUpdateUser()}
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
                                          ).then(() => { DelDepartment(row.dep_name) })
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