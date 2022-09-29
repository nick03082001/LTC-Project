import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../css/Menu.css";

import "./Profile.css";
import Modal from "react-modal";

Modal.setAppElement("#root");


// const [isOpenProfile, setIsOpenProfile] = useState(false);

// function toggleModalProfile() {
//   setIsOpenProfile(!isOpenProfile);
// }
function Mybar() {
    const [isOpenProfile, setIsOpenProfile] = useState(false);

    function toggleModalProfile() {
        setIsOpenProfile(!isOpenProfile);
      }
    return (
       <>
        <header className='h-navbar'>
            <nav className='aa'>
                <div className='img-ham'>
                    <button className='lbl-ham'>
                        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    </button>
                    <div className='dropdown-avatar'>
                        <button className="drop-btn-avatar">
                            <img src="avatar.png" alt="Avatar" className="Avatar"></img>
                        </button>
                        <div className="dropdown-content-avatar">
                        <a onClick={toggleModalProfile}>ຕັ້ງຄ່າໂປຣຟາຍ</a>
                        <hr className='menu-hr'/>
                        <a href="/">ອອກຈາກລະບົບ</a>
                        </div>
                    </div>
                </div>
                <input type="checkbox" id="checkbox_toggle" className='inp-ham' />
                <input type="checkbox" id="checkbox_avatar" />
                <div className='ab'>
                    <a href='/home'>
                        <button className="dropbtn1">ໜ້າຫຼັກ</button>
                    </a>
                    <div className="dropdown">
                        <button className="dropbtn2">
                            ຈັດການຂໍ້ມູນພື້ນຖານ
                            <label className='angle-down2'>
                            <FaAngleDown/>
                            </label>
                            <label className='angle-up2'>
                            <FaAngleUp/>
                            </label>
                        </button>
                        <div className="dropdown-content">
                        <a href="/employee">ຈັດການຂໍ້ມູນພະນັກງານ</a>
                        <hr className='menu-hr'/>
                        <a href="/department">ຈັດການຂໍ້ມູນພະແນກ</a>
                        <hr className='menu-hr'/>
                        <a href="/Position">ຈັດການຂໍ້ມູນຕຳແໜ່ງ</a>
                        <hr className='menu-hr'/>
                        <a href="/user">ຈັດການຂໍ້ມູນຜູ້ໃຊ້ງານລະບົບ</a>
                        </div>
                    </div>
    
                    <div className="dropdown">
                        <button className="dropbtn3">
                            ຈັດການແບບປະເມີນ
                            <label className='angle-down3'>
                            <FaAngleDown/>
                            </label>
                            <label className='angle-up3'>
                            <FaAngleUp/>
                            </label>
                        </button>
                        <div className="dropdown-content">
                        <a href="/assessment/manage">ຈັດການແບບປະເມີນ</a>
                        <hr className='menu-hr'/>
                        <a href="/assessment/create">ສ້າງແບບປະເມີນ</a>
                        <hr className='menu-hr'/>
                        <a href="/assessment/answer">ເລືອກຕອບແບບປະເມີນ</a>
                        </div>
                    </div>
    
                    <div className="dropdown">
                        <button className="dropbtn4">
                            ໂຄງສ້າງອົງກອນ
                            <label className='angle-down4'>
                            <FaAngleDown/>
                            </label>
                            <label className='angle-up4'>
                            <FaAngleUp/>
                            </label>
                        </button>
                        <div className="dropdown-content">
                        <a href="/organization/structure">ໂຄງສ້າງອົງກອນ</a>
                        <hr className='menu-hr'/>
                        <a href="/organization/history">ປະຫວັດໂຄງສ້າງອົງກອນ</a>
                        <hr className='menu-hr'/>
                        <a href="/organization/moving/position_department">ການຍ້າຍຕຳແໜ່ງ</a>
                        <hr className='menu-hr'/>
                        <a href="/organization/moving/position_department/history">ປະຫວັດການຍ້າຍຕຳແໜ່ງ</a>
                        </div>
                    </div>
                    
                    <div className="dropdown">
                        <button className="dropbtn5">
                            ລາຍງານ
                            <label className='angle-down5'>
                            <FaAngleDown/>
                            </label>
                            <label className='angle-up5'>
                            <FaAngleUp/>
                            </label>
                        </button>
                        <div className="dropdown-content">
                        <a href="/report/assessment_data">ຂໍ້ມູນການປະເມີນ</a>
                        <hr className='menu-hr'/>
                        <a href="/report/score_assessment">ຄະແນນການຕອບປະເມີນ</a>
                        <hr className='menu-hr'/>
                        <a href="/report/employee">ພະນັກງານອົງກອນ</a>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </nav>
            
        </header>
        <Modal
            isOpen={isOpenProfile}
            onRequestClose={toggleModalProfile}
            contentLabel="My dialog"
            className="modal-profile"
            overlayClassName="myoverlay"
            >
            <label className='close-buttom' onClick={toggleModalProfile}> X </label>
            <div className="profilepic-box">
                <img src="#" alt="" className='profilepic-img'/>
                <div className="id-em-profile-container">
                    <span  className="id-em-profile">E001</span>
                    <span  className="name">Peesa</span>
                </div>
            </div>
            <div className="container-label">
                <p className="profile-container">
                    <label className="id-profile">ເພດ:</label>
                    <span className="id-profile-box"
                        value="bor hu day"
                    >
                        
                    </span>
                </p>
                <p className="profile-container">
                    <label className="id-profile">ພະແນກ:</label>
                    <input className="id-profile-box"
                        value="bor hu day"
                    >
                        
                    </input>
                </p>
                <div className="profile-container">
                    <label className="id-profile">ເບີໂທ:</label>
                    <input className="id-profile-box"
                        value="bor hu day"
                    >
                        
                    </input>
                </div>
                <div className="profile-container">
                    <label className="id-profile">ບ້ານ:</label>
                    <input className="id-profile-box"
                        value="bor hu day"
                    >
                        
                    </input>
                </div>
                <div className="profile-container">
                    <label className="id-profile">ເມືອງ:</label>
                    <input className="id-profile-box"
                        value="bor hu day"
                    >
                        
                    </input>
                </div>
                <div className="profile-container">
                    <label className="id-profile">ແຂວງ:</label>
                    <input className="id-profile-box"
                        value="bor hu day"
                    >
                        
                    </input>
                </div>
            </div>
            
        </Modal>
           
    </>
        
        
      )
}

export default Mybar