// import{ React, useState } from 'react';
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import "../css/Menu.css";
// import "./Profile.css";
// import Modal from "react-modal";
// import CloseIcon from '@mui/icons-material/Close';
// import {  FaLock } from "react-icons/fa";
// import { Password } from '@mui/icons-material';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// Modal.setAppElement("#root");


// // const [isOpenProfile, setIsOpenProfile] = useState(false);

// // function toggleModalProfile() {
// //   setIsOpenProfile(!isOpenProfile);
// // }

// function Mybar() {
//     const [isOpenProfile, setIsOpenProfile] = useState(false);

//     function toggleModalProfile() {
//         setIsOpenProfile(!isOpenProfile);
      
//     }

//     const MySwalConfirm = withReactContent(Swal);

      
    
//     return (
//         <>
//             <header className='h-navbar'>
//                 <nav className='aa'>
//                     <div className='img-ham'>
//                         <button className='lbl-ham'>
//                             <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
//                         </button>
//                         <div className='dropdown-avatar'>
//                             <button className="drop-btn-avatar">
//                                 <img src="avatar.png" alt="Avatar" className="Avatar"></img>
//                             </button>
//                             <div className="dropdown-content-avatar">
//                                 <a onClick={toggleModalProfile}>ຕັ້ງຄ່າໂປຣຟາຍ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/">ອອກຈາກລະບົບ</a>
//                             </div>
//                         </div>
//                     </div>
//                     <input type="checkbox" id="checkbox_toggle" className='inp-ham' />
//                     <input type="checkbox" id="checkbox_avatar" />
//                     <div className='ab'>
//                         <a href='/home'>
//                             <button className="dropbtn1">ໜ້າຫຼັກ</button>
//                         </a>
//                         <div className="dropdown">
//                             <button className="dropbtn2">
//                                 ຈັດການຂໍ້ມູນພື້ນຖານ
//                                 <label className='angle-down2'>
//                                     <FaAngleDown />
//                                 </label>
//                                 <label className='angle-up2'>
//                                     <FaAngleUp />
//                                 </label>
//                             </button>
//                             <div className="dropdown-content">
//                                 <a href="/employee">ຈັດການຂໍ້ມູນພະນັກງານ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/department">ຈັດການຂໍ້ມູນພະແນກ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/Position">ຈັດການຂໍ້ມູນຕຳແໜ່ງ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/user">ຈັດການຂໍ້ມູນຜູ້ໃຊ້ງານລະບົບ</a>
//                             </div>
//                         </div>

//                         <div className="dropdown">
//                             <button className="dropbtn3">
//                                 ຈັດການແບບປະເມີນ
//                                 <label className='angle-down3'>
//                                     <FaAngleDown />
//                                 </label>
//                                 <label className='angle-up3'>
//                                     <FaAngleUp />
//                                 </label>
//                             </button>
//                             <div className="dropdown-content">
//                                 <a href="/assessment/manage">ຈັດການແບບປະເມີນ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/assessment/create">ສ້າງແບບປະເມີນ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/assessment/answer">ເລືອກຕອບແບບປະເມີນ</a>
//                             </div>
//                         </div>

//                         <div className="dropdown">
//                             <button className="dropbtn4">
//                                 ໂຄງສ້າງອົງກອນ
//                                 <label className='angle-down4'>
//                                     <FaAngleDown />
//                                 </label>
//                                 <label className='angle-up4'>
//                                     <FaAngleUp />
//                                 </label>
//                             </button>
//                             <div className="dropdown-content">
//                                 <a href="/organization/structure">ໂຄງສ້າງອົງກອນ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/organization/history">ປະຫວັດໂຄງສ້າງອົງກອນ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/organization/moving/position_department">ການຍ້າຍຕຳແໜ່ງ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/organization/moving/position_department/history">ປະຫວັດການຍ້າຍຕຳແໜ່ງ</a>
//                             </div>
//                         </div>

//                         <div className="dropdown">
//                             <button className="dropbtn5">
//                                 ລາຍງານ
//                                 <label className='angle-down5'>
//                                     <FaAngleDown />
//                                 </label>
//                                 <label className='angle-up5'>
//                                     <FaAngleUp />
//                                 </label>
//                             </button>
//                             <div className="dropdown-content">
//                                 <a href="/report/assessment_data">ຂໍ້ມູນການປະເມີນ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/report/score_assessment">ຄະແນນການຕອບປະເມີນ</a>
//                                 <hr className='menu-hr' />
//                                 <a href="/report/employee">ພະນັກງານອົງກອນ</a>
//                             </div>
//                         </div>



//                     </div>

//                 </nav>

//             </header>
//             <Modal
//                 isOpen={isOpenProfile}
//                 contentLabel="My dialog"
//                 className="modal-profile"
//                 overlayClassName="myoverlay"
//             >

//                 <div className='closeContainer'>
//                 <h1 className='h11'>ປ່ຽນລະຫັດຜ່ານ</h1>
//                 </div>
//                 <div class="line-1"></div>
                
//                 <p  
//                   className="change-old-password-text">
//                     <FaLock className="icon-img" /> ລະຫັດຜ່ານເກົ່າ
//                     <label className="starRequire">*</label>
//                 </p>
//                 <div className='ContainerInput-old-pwd'>
//                 <input
//                     className="type-old-password"
//                     type="password"
//                     placeholder="ປ້ອນລະຫັດຜ່ານເກົ່າຂອງທ່ານ..."
//                 ></input>
//                 </div>


//                 <p  
//                   className="change-new-password-text">
//                     <FaLock className="icon-img" /> ລະຫັດຜ່ານໃໝ່
//                     <label className="starRequire">*</label>
//                 </p>

//                 <div className='ContainerInput-new-pwd'>
//                 <input
//                     className="Typenewpwd"
//                     type="password"
//                     placeholder="ປ້ອນລະຫັດຜ່ານໃໝ່ຂອງທ່ານ..."
//                 ></input>
//                 </div>

//                 <p
//                   className="confirm-new-password-text">
//                     <FaLock className="icon-img" /> ຢືນຢັນລະຫັດຜ່ານ
//                     <label className="starRequire">*</label>
//                 </p>
//                 <div className='ContainerInput-confirm-pwd'>
//                 <input
//                     className="type-confirm-password"
//                     placeholder="ຢືນຢັນລະຫັດຜ່ານໃໝ່ຂອງທ່ານ..."
//                     type="password"
//                 ></input>
//                 </div>

//                 <div className='descriseChgPwd'>
//                  <h4>ລະຫັດຜ່ານຕ້ອງປະກອບດ້ວຍ :</h4>
//                 </div>
//                 <div className='descriseChgPwd1'>
//                  <p>- ລະຫັດຜ່ານ 8 ໂຕຂຶ້ນໄປ </p>
//                  <p>- 1 ຕົວອັກສອນໃຫຍ່ (A-Z) </p>
//                  <p>- 1 ຕົວອັກສອນນ້ອຍ (a-z) </p>
//                  <p>- 1 ຕົວເລກ (0-9) </p>
//                 </div>


//                 <div className="p-button-confirm-pwd">
//             <button 
//               onClick={()=>
//                 MySwalConfirm.fire({
//                     title: "ຢືນຢັນການປ່ຽນລະຫັດຜ່ານ",
//                     icon: "warning",
//                     iconColor: "#3085d6",
//                     showCancelButton: true,
//                     confirmButtonColor: "#3085d6",
//                     cancelButtonColor: "#d33",
//                     confirmButtonText: "ຢືນຢັນ",
//                     cancelButtonText: "ຍົກເລີກ",
//                   }).then((result) => {
//                     if (result.isConfirmed){
//                       Swal.fire(`ປ່ຽນລະຫັດຜ່ານສຳເລັດ!`, ``, `success`)
//                       toggleModalProfile()
//                     }
//                   })}
//               className="btn-save-chage-pwd"
//               >
//               ບັນທຶກ
//             </button>
//             <button
//               onClick={() => 
//                 { toggleModalProfile()
//                   }
//                 }
                
//               className="btn-cencle-chage-pwd"
//             >
//               ຍົກເລີກ
//             </button>
//             </div>

          




          


//             </Modal>
//         </>
//     )
// }

// export default Mybar