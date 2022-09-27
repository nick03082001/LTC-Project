import "../css/Change_position.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaExchangeAlt, FaHistory, FaPencilAlt } from "react-icons/fa";
import React from "react";
import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

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












// ປູ່ມຍ້າຍຈຳແໜ່ງໃຫ້ດືງ api ໃນຟັງຊັນລູ່ມນີ້

  function SwalUpdateDepart() {

    (async () => {

        const { value: formValues } = await Swal.fire({
            title: 'ຈັດການຍ້າຍຕຳແໜ່ງ',
            // inputLabel: 'yai',
            html:
                '<input id="swal-input1" class="swal2-input" placeholder="ລະຫັດພະນັກງານ">' +
                '<input id="swal-input2" class="swal2-input" placeholder="ຊື່">' +
                '<input id="swal-input3" class="swal2-input" placeholder="ນາມສະກຸນ">'+
                `<select 
                >
                    <option selected disabled>ເລືອກຕຳແໜ່ງ...</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                </select>`+
            `<select
                >
                    <option selected disabled>ເລືອກພະແນກ...</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>`,
            input: 'select',
            input: 'file',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ຢືນຢັນ',
            cancelButtonText: 'ຍົກເລີກ',
            focusConfirm: false,
            preConfirm: () => {
                return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value,
                document.getElementById('swal-input3').value
                ]
            }
            })
  
        if (formValues) {
          Swal.fire(JSON.stringify(formValues))
        }
  
      })()

    // (async () => {

    //   const { value: ipAddress } = await Swal.fire({
    //     title: 'ຈັດການຍ້າຍຕຳແໜ່ງ',
    //     input: 'text',
    //     inputPlaceholder: 'ປ້ອນຊື່ພະແນກ',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'ຢືນຢັນ',
    //     cancelButtonText: 'ຍົກເລີກ',
    //     inputValidator: (value) => {
    //       if (!value) {
    //         return 'ກະລຸນາປ້ອນຂໍ້ມູນທີ່ທ່ານຕ້ອງການເພີ່ມ!'
    //       }
    //     }
    //   })

    //   if (ipAddress) {
    //     Swal.fire(
    //       `ແກ້ໄຂພະແນກ: ${ipAddress} ສຳເລັດ!`,
    //       ``,
    //       `success`
    //     )
    //   }

    // })()
  }


//   const MySwalDeleteDepart = withReactContent(Swal);

    return (
        <div className="box-modal-change-pos">
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
                            >ຕໍາແໜ່ງ</TableCell>
                            <TableCell 
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ພະແນກ</TableCell>
                            <TableCell
                              sx={{backgroundColor: "#51b3f0",fontWeight: 'bold'}}
                            >ຍ້າຍຕຳແໜ່ງ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {/* {items
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, i) => {
                            return ( */}
                              <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell>no</TableCell>
                                <TableCell>ລະຫັດພະນັກງານ</TableCell>
                                <TableCell>ຮູບພະນັກງານ</TableCell>
                                <TableCell>ຊື່</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell >
                                  <button
                                    onClick={() => SwalUpdateDepart()}
                                    className="btnnn-change-pos"
                                  >
                                    <label>
                                      <FaExchangeAlt className="up-change-pos" />
                                    </label>
                                  </button>
                                </TableCell>
                              </TableRow>
                             {/* );
                           })
                          } */}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    // count={items.length}
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

export default Change_Pos;