import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../css/Menu.css";
import CloseIcon from '@mui/icons-material/Close';
import { FaLock } from "react-icons/fa";
import { Password } from '@mui/icons-material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Profile.css";
import Modal from "react-modal";
import axios from "axios";


Modal.setAppElement("#root");

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

function Mybar() {
    const [isOpenProfile, setIsOpenProfile] = useState(false);

    const [data, setData] = useState(JSON.parse(localStorage.getItem("userdata")))

    function toggleModalProfile() {
        setIsOpenProfile(!isOpenProfile);
    }

    const [isOpenProfileChangepass, setIsOpenProfileChangepass] = useState(false);

    function toggleModalProfileChangePass() {
        setIsOpenProfileChangepass(!isOpenProfileChangepass);
    }
    const [alertpwdnotmatch, setAlertpwdnotmatch] = useState(false);

    function toggleModalalertpwdnotmatch() {
        setAlertpwdnotmatch(!alertpwdnotmatch);
    }

    const MySwalConfirm = withReactContent(Swal);

    const [oldPwd, setOldPwd] = useState('');


    const [validMatchOld, setValidMatchOld] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //   console.log(matchPwd)
    //   console.log(validMatch)
    //  console.log(validPwd)
    console.log(data.emp_ID)
    // console.log(pwd)
    //   console.log(validMatchOld)
    //  console.log(oldPwd)

    //   const username = {data};
    const matchOld = localStorage.getItem("password")

    //   console.log(matchOld)


    var postData = {
        "username": data.emp_ID,
        "old_password": oldPwd,
        "new_password": pwd
    };
    // var postData = {
    //     "username": data.emp_ID,
    //     "old_password": oldPwd,
    //     "new_password": pwd
    // }

    useEffect(() => {
        setValidMatchOld(oldPwd === matchOld);

    }, [oldPwd])


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [pwd, matchPwd])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validMatch || !validMatchOld || !validPwd) {
            MySwalConfirm.fire({
                title: 'Password ',
                icon: "warning",
                confirmButtonText: "ກະລຸນາກວດສອບລະຫັດຜ່ານຄືນໃຫມ່",

            }).then((result) => {
                toggleModalalertpwdnotmatch()
            }
            )

        }
        else {
            MySwalConfirm.fire({
                title: "ຢືນຢັນການປ່ຽນລະຫັດຜ່ານ",
                icon: "warning",
                iconColor: "#3085d6",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "ຢືນຢັນ",
                cancelButtonText: "ຍົກເລີກ",
            }).then((result) => {
                if (result.isConfirmed) {
                    var axios = require('axios');
                    var datas = JSON.stringify({
                        "username": data.emp_ID,
                        "old_password": oldPwd,
                        "new_password": pwd
                    });

                    var config = {
                        method: 'post',
                        url: 'https://www.tookcomsci.live/myproject1/change_password',
                        headers: {
                            'Authorization': "Bearer " + sessionStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        },
                        data: datas
                    };
                    // if (response.status === "ok"){
                    //     Swal.fire(`ປ່ຽນລະຫັດຜ່ານສຳເລັດ`, ``, `success`)}

                    axios(config)
                        .then(function (response) {
                           if (response?.status === 201 ){
                                Swal.fire(`ປ່ຽນລະຫັດຜ່ານສຳເລັດ`, ``, `success`)
                                toggleModalProfileChangePass()}
                                else {
                                    Swal.fire(`ປ່ຽນລະຫັດຜ່ານບໍ່ສຳເລັດກະລຸນາລອງໃຫມ່`, ``, `error`)
                                toggleModalProfileChangePass()
                                }
                                console.log(response)
                           
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                        // if (response.status === "ok"){
                        //     Swal.fire(`ປ່ຽນລະຫັດຜ່ານສຳເລັດ`, ``, `success`)
                        //     toggleModalProfileChangePass()}

                    // axios.post("https://www.tookcomsci.live/myproject1/change_password", {
                    //     headers: {
                    //         Authorization: "Bearer " + sessionStorage.getItem("token"),
                    //     }, 
                    //     data: postData
                    // }).then((res) => {
                    //     if (res.status === "ok") {
                    //         Swal.fire(`ປ່ຽນລະຫັດຜ່ານສຳເລັດ`, ``, `success`)
                    //         toggleModalProfileChangePass()
                    //     }

                    // }
                    // )
                }
                else {
                    Swal.fire(`ປ່ຽນລະຫັດຜ່ານບໍ່ສຳເລັດ`)
                    toggleModalProfileChangePass()
                }
            })
        }

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
                                <img src={data.profilepic} alt="Avatar" className="Avatar"></img>
                            </button>
                            <div className="dropdown-content-avatar">
                                <a onClick={toggleModalProfile}>ຕັ້ງຄ່າໂປຣຟາຍ</a>
                                <hr className='menu-hr' />
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
                                    <FaAngleDown />
                                </label>
                                <label className='angle-up2'>
                                    <FaAngleUp />
                                </label>
                            </button>
                            <div className="dropdown-content">
                                <a href="/employee">ຈັດການຂໍ້ມູນພະນັກງານ</a>
                                <hr className='menu-hr' />
                                <a href="/department">ຈັດການຂໍ້ມູນພະແນກ</a>
                                <hr className='menu-hr' />
                                <a href="/Position">ຈັດການຂໍ້ມູນຕຳແໜ່ງ</a>
                                <hr className='menu-hr' />
                                <a href="/user">ຈັດການຂໍ້ມູນຜູ້ໃຊ້ງານລະບົບ</a>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn3">
                                ຈັດການແບບປະເມີນ
                                <label className='angle-down3'>
                                    <FaAngleDown />
                                </label>
                                <label className='angle-up3'>
                                    <FaAngleUp />
                                </label>
                            </button>
                            <div className="dropdown-content">
                                <a href="/assessment/manage">ຈັດການແບບປະເມີນ</a>
                                <hr className='menu-hr' />
                                <a href="/assessment/create">ສ້າງແບບປະເມີນ</a>
                                <hr className='menu-hr' />
                                <a href="/assessment/answer">ເລືອກຕອບແບບປະເມີນ</a>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn4">
                                ໂຄງສ້າງອົງກອນ
                                <label className='angle-down4'>
                                    <FaAngleDown />
                                </label>
                                <label className='angle-up4'>
                                    <FaAngleUp />
                                </label>
                            </button>
                            <div className="dropdown-content">
                                <a href="/organization/structure">ໂຄງສ້າງອົງກອນ</a>
                                <hr className='menu-hr' />
                                <a href="/organization/history">ປະຫວັດໂຄງສ້າງອົງກອນ</a>
                                <hr className='menu-hr' />
                                <a href="/organization/moving/position_department">ການຍ້າຍຕຳແໜ່ງ</a>
                                <hr className='menu-hr' />
                                <a href="/organization/moving/position_department/history">ປະຫວັດການຍ້າຍຕຳແໜ່ງ</a>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn5">
                                ລາຍງານ
                                <label className='angle-down5'>
                                    <FaAngleDown />
                                </label>
                                <label className='angle-up5'>
                                    <FaAngleUp />
                                </label>
                            </button>
                            <div className="dropdown-content">
                                <a href="/report/assessment_data">ຂໍ້ມູນການປະເມີນ</a>
                                <hr className='menu-hr' />
                                <a href="/report/score_assessment">ຄະແນນການຕອບປະເມີນ</a>
                                <hr className='menu-hr' />
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
                    <img src={data.profilepic} alt="" className='profilepic-img' />
                    <div className="id-em-profile-container">
                        <span className="id-em-profile">{data.emp_ID}</span>
                        <span className="name">{data.emp_name} {data.emp_surname}</span>
                        <button className='change-password' onClick={toggleModalProfileChangePass}>
                            <svg className='change-password-icon' width="15" height="15" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.691 20.9099C24.6789 20.7526 24.6086 20.6013 24.4932 20.4884L14.5275 10.5227C14.9195 9.59899 15.1265 8.59871 15.1265 7.56496C15.1265 5.54469 14.3385 3.64384 12.9123 2.21409C11.4841 0.78719 9.58457 0 7.56314 0C5.54074 0 3.64451 0.787457 2.21396 2.21525C-0.737602 5.16521 -0.738224 9.96338 2.21352 12.9131C3.64397 14.3439 5.54083 15.1319 7.56217 15.1319C8.59618 15.1319 9.59398 14.9232 10.5199 14.5306L13.7938 17.807C13.93 17.9416 14.1096 18.0129 14.3034 18.0066L16.0876 17.944L16.0294 19.7327C16.0239 19.9213 16.092 20.105 16.2287 20.2393C16.3605 20.3735 16.5456 20.4465 16.7335 20.4389L18.5242 20.3777L18.4599 22.1644C18.4544 22.3532 18.5269 22.5372 18.6586 22.6715C18.7948 22.8058 18.9535 22.878 19.1683 22.8714L20.9546 22.8107L20.8948 24.5976C20.8843 24.7958 20.9677 24.9864 21.1095 25.1217C21.2401 25.2406 21.4032 25.3046 21.5751 25.3046C21.5998 25.3046 21.6251 25.3036 21.6503 25.3013L24.3895 24.9971C24.7597 24.9567 25.0292 24.6265 24.9975 24.2555L24.691 20.9099ZM6.64943 6.65152C5.80808 7.49198 4.44785 7.49198 3.60828 6.65152C2.76746 5.81079 2.76746 4.45083 3.60828 3.6109C4.44785 2.77097 5.80764 2.77017 6.64943 3.61063C7.48909 4.45047 7.48856 5.81132 6.64943 6.65152ZM22.3527 21.1381C22.2528 21.2381 22.1188 21.288 21.9886 21.288C21.8585 21.288 21.7244 21.238 21.6245 21.1381L13.1452 12.6563C13.3813 12.4018 13.596 12.1338 13.791 11.8521L22.3527 20.4121C22.5526 20.612 22.5526 20.9382 22.3527 21.1381Z" fill="white" />
                            </svg>

                            <span className="change-password-text">ປ່ຽນລະຫັດຜ່ານ</span>
                        </button>
                    </div>
                </div>

                <div className="profile container">
                    <div className="container-label">
                        <p className="profile-container">
                            <label className="id-profile">ເພດ:</label>
                            <span className="id-profile-box"
                                value="bor hu day"
                            >
                                {data.gender}
                            </span>
                        </p>
                        <p className="profile-container">
                            <label className="id-profile">ພະແນກ:</label>
                            <span className="id-profile-box"
                                value="bor hu day"
                            >
                                {data.dep_name}
                            </span>
                        </p>
                        <div className="profile-container">
                            <label className="id-profile">ເບີໂທ:</label>
                            <span className="id-profile-box"
                                value="bor hu day"
                            >
                                {data.emp_tel}
                            </span>
                        </div>
                        <div className="profile-container">
                            <label className="id-profile">ບ້ານ:</label>
                            <span className="id-profile-box"
                                value="bor hu day"
                            >
                                {data.village}
                            </span>
                        </div>
                        <div className="profile-container">
                            <label className="id-profile">ເມືອງ:</label>
                            <span className="id-profile-box"
                                value="bor hu day"
                            >
                                {data.district}
                            </span>
                        </div>
                        <div className="profile-container">
                            <label className="id-profile">ແຂວງ:</label>
                            <spa className="id-profile-box"
                                value="bor hu day"
                            >
                                {data.province}
                            </spa>
                        </div>
                    </div>
                </div>
            </Modal>


            <Modal
                isOpen={isOpenProfileChangepass}
                contentLabel="My dialog"
                className="modal-profile-changePass"
                overlayClassName="myoverlay-changePass"
            >

                <div className='closeContainer'>
                    <h1 className='h11'>ປ່ຽນລະຫັດຜ່ານ</h1>
                </div>
                <div class="line-1"></div>

                <p
                    className="change-old-password-text">
                    <FaLock className="icon-img" /> ລະຫັດຜ່ານເກົ່າ
                    <label className="starRequire">*</label>
                </p>
                <div className='ContainerInput-old-pwd'>
                    <input
                        value={oldPwd}
                        onChange={(e) => setOldPwd(e.target.value)}
                        type="password"
                        className="types-old-password"
                        placeholder="ປ້ອນລະຫັດຜ່ານເກົ່າຂອງທ່ານ..."
                        autocomplete="new-password"
                    ></input>
                </div>

                <label htmlFor="password">
                    <p
                        className="change-new-password-text">
                        <FaLock className="icon-img" /> ລະຫັດຜ່ານໃໝ່

                        <label className="starRequire">*</label>
                    </p></label>

                <div className='ContainerInput-new-pwd'>
                    <input
                        autoComplete="off"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        className="Typenewpwd"
                        type="password"
                        placeholder="ປ້ອນລະຫັດຜ່ານໃໝ່ຂອງທ່ານ..."
                    ></input>
                </div>
                <label htmlFor="confirm_pwd">
                    <p
                        className="confirm-new-password-text">
                        <FaLock className="icon-img" /> ຢືນຢັນລະຫັດຜ່ານ
                        <label className="starRequire">*</label>
                    </p></label>
                <div className='ContainerInput-confirm-pwd'>
                    <input
                        type="password"
                        value={matchPwd}
                        onChange={(e) => setMatchPwd(e.target.value)}
                        className="type-confirm-password"
                        placeholder="ຢືນຢັນລະຫັດຜ່ານໃໝ່ຂອງທ່ານ..."
                    ></input>
                </div>

                <div className='descriseChgPwd'>
                    <h4>ລະຫັດຜ່ານຕ້ອງປະກອບດ້ວຍ :</h4>
                </div>
                <div className='descriseChgPwd1'>
                    <p>- ລະຫັດຜ່ານ 8 ໂຕຂຶ້ນໄປ </p>
                    <p>- 1 ຕົວອັກສອນໃຫຍ່ (A-Z) </p>
                    <p>- 1 ຕົວອັກສອນນ້ອຍ (a-z) </p>
                    <p>- 1 ຕົວເລກ (0-9) </p>
                </div>


                <div className="p-button-confirm-pwd">
                    <button
                        //   onClick={()=>

                        //     MySwalConfirm.fire({
                        //         title: "ຢືນຢັນການປ່ຽນລະຫັດຜ່ານ",
                        //         icon: "warning",
                        //         iconColor: "#3085d6",
                        //         showCancelButton: true,
                        //         confirmButtonColor: "#3085d6",
                        //         cancelButtonColor: "#d33",
                        //         confirmButtonText: "ຢືນຢັນ",
                        //         cancelButtonText: "ຍົກເລີກ",
                        //       }).then((result) => {
                        //         if (result.isConfirmed ){
                        //           Swal.fire(`ປ່ຽນລະຫັດຜ່ານສຳເລັດ!`, ``, `success`)
                        //           toggleModalProfileChangePass()
                        //         }
                        //       })}

                        onClick={handleSubmit}

                        className="btn-save-chage-pwd"
                    >
                        ບັນທຶກ
                    </button>
                    <button
                        onClick={() => { toggleModalProfileChangePass() }
                        }

                        className="btn-cencle-chage-pwd"
                    >
                        ຍົກເລີກ
                    </button>
                </div>

            </Modal>



        </>


    )
}

export default Mybar