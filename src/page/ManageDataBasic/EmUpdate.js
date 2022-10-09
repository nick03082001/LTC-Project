import { FaUserCircle } from "react-icons/fa";
import React, { useState, useRef } from "react";
import "../css/EmUpdate.css";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function EmUpdate({ closeModalUp, data, isOpen }) {
  const [emp_ID, setEID] = useState(data.emp_ID);
  const [emp_name, setEname] = useState(data.emp_name);
  const [emp_surname, setESurname] = useState(data.emp_surname);
  const [emp_tel, setETel] = useState(data.emp_tel);
  const [pos_name, setPosition] = useState([]);
  const [dep_name, setDepartment] = useState([]);
  const [village, setVillage] = useState(data.village);
  const [district, setDistrict] = useState(data.district);
  const [province, setProvince] = useState([]);
  const [session_name, setSession] = useState([]);
  const [imageURLs, setImageURLs] = useState(data?.profilepic);

  const [selectProvince, setSelectedProvince] = useState(data.province);
  const [selectSession, setSelectSession] = useState("");
  const [selectPosition, setselectPosition] = useState("");
  const [selectDepartment, setselectDepartment] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const [selectGender, setselectGender] = useState("ຍິງ");

  const imageRef = useRef();

  const handleSubmitUpdate = async (e) => {
    // console.log(emp_ID);
    // console.log(emp_name);
    // console.log(emp_surname);
    // console.log(emp_tel);
    // console.log(selectDepartment);
    // console.log(district);
    // console.log(village);
    // console.log(selectPosition);
    // //console.log(gender);
    // console.log(selectProvince);
    // console.log(selectSession);
    // console.log("jj",profilepic , profilepic?.name);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("token")
    );
    var formdata = new FormData();
    formdata.append("emp_ID", emp_ID);
    formdata.append("emp_name", emp_name);
    formdata.append("emp_surname", emp_surname);
    formdata.append("emp_tel", emp_tel);
    formdata.append("dep_name", selectDepartment);
    formdata.append("district", district);
    formdata.append("village", village);
    formdata.append("pos_name", selectPosition);
    formdata.append("gender", selectGender);
    formdata.append("prov_name", selectProvince);
    formdata.append("sessions_name", selectSession);
    if (profilepic) {
      formdata.append("files", profilepic, profilepic?.name);
    }
    console.log({ formdata });

    var requestOptions = {
      method: "PUT",
      body: formdata,
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://www.tookcomsci.live/myproject1/employee", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/employee";
        }
      })
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {
    setselectGender(data?.gender);
    setSelectedProvince(data.province);
    setEname(data?.emp_name);
    setESurname(data.emp_surname);
    setETel(data.emp_tel);
    setImageURLs(data?.profilepic);
    setSelectSession(data.session_name);
    setselectDepartment(data.dep_name);
    setDistrict(data.district);
    setVillage(data.village);
    setEID(data.emp_ID);
    setselectPosition(data.pos_name);
  }, [data]);

  React.useEffect(() => {
    axios
      .get("https://www.tookcomsci.live/myproject1/provinces", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.province);
        setProvince(res?.data?.province);
      });

    axios
      .get("https://www.tookcomsci.live/myproject1/session", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.session)
        setSession(res?.data?.session);
      });

    axios
      .get("https://www.tookcomsci.live/myproject1/department", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.department)
        setDepartment(res?.data?.department);
      });

    axios
      .get("https://www.tookcomsci.live/myproject1/position", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.position)
        setPosition(res?.data?.position);
      });
  }, []);

  //  console.log("profilepic : ", profilepic.length);
  //  console.log("imageURLs : ", imageURLs);
  // useEffect(() => {
  //   if (profilepic.length < 1) return;
  //   const newImageUrls = [];
  //   profilepic.forEach((image) =>
  //     newImageUrls.push(URL.createObjectURL(image))
  //   );
  //   setImageURLs(newImageUrls);
  // }, [profilepic]);

  function onImageChangeUp(e) {
    setProfilepic(e.target.files[0]);
    setImageURLs(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files);
    console.log(imageURLs);
  }

  // sweetalert button

  const MySwalDeleteDepart = withReactContent(Swal);

  return (
    <div
      className="myModal-up-em"
      style={{ display: isOpen ? "block" : "none", marginTop: 100 }}
    >
      <div className="modal-content-up-em">
        <button onClick={() => closeModalUp(false)} className="close-up-em">
          <RiCloseLine />
        </button>
        <p className="header-up-em">
          <p className="h6-data-up-em">ແກ້ໄຂຂໍ້ມູນພະນັກງານ</p>
        </p>
        <div className="div-picture-up-em">
          <p className="p-con-lbl-picture-up-em">
            <label className="lbl-img-click-up-em" htmlFor="id-img-click-up-em">
              <FaUserCircle
                className="img-click-up-em"
                htmlFor="id-img-click-up-em"
              />
            </label>
          </p>
          <p className="p-con-picture-up-em">
            <input
              ref={imageRef}
              // className="inp-img-none"
              // style={{display:'none'}}
              // id="id-img-click-up-em"
              type="file"
              multiple
              accept="image/*"
              onChange={onImageChangeUp}
              style={{ display: "none" }}
            />
            {/* {imageURLs.map((imageSrcUp, idxx) => ( */}
            <img
              onClick={() => {
                imageRef?.current?.click();
              }}
              className="img-up-em"
              src={imageURLs}
              alt=""
            />
            {/* ))} */}
          </p>
        </div>
        <div className="box-con-box-inp-up-em">
          <div className="box-input-up-em">
            <p className="p-inp-id-up-em">
              <label className="lbl-head-up-em">ລະຫັດພະນັກງານ:</label>
              <input
                className="inp-up-em"
                value={emp_ID}
                onChange={(e) => setEID(e.target.value)}
                type="text"
                placeholder="ປ້ອນລະຫັດພະນັກງານ*"
              ></input>
            </p>
            <p className="p-gender-up-em">
              <label className="lbl-head-up-em">ເພດ:</label>
              <p className="p-phed-up-em">
                <p className="p-soud-up-em">
                  <label className="lbl-nnnn-up-em">
                    <input
                      value={"ຍິງ"}
                      className="inp-radio"
                      id="male"
                      type="radio"
                      name="g"
                      checked={selectGender === "ຍິງ"}
                      onChange={(e) => setselectGender(e.target.value)}
                    />
                    <label className="btn-radio-up-em" htmlFor="male">
                      ຍິງ
                    </label>
                  </label>
                  <label className="lbl-nnnn-up-em">
                    <input
                      className="inp-radio"
                      type="radio"
                      id="female"
                      value={"ຊາຍ"}
                      checked={selectGender === "ຊາຍ"}
                      onChange={(e) => setselectGender(e.target.value)}
                      name="g"
                    />
                    <label className="btn-radio-up-em" htmlFor="female">
                      ຊາຍ
                    </label>
                  </label>
                </p>
              </p>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ຊື່:</label>
              <input
                className="inp-up-em"
                type="text"
                value={emp_name}
                onChange={(e) => setEname(e.target.value)}
                placeholder="ປ້ອນຊື່*"
              ></input>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ນາມສະກຸນ:</label>
              <input
                className="inp-up-em"
                value={emp_surname}
                type="text"
                onChange={(e) => setESurname(e.target.value)}
                placeholder="ປ້ອນນາມສະກຸນ*"
              ></input>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ເບີໂທ:</label>
              <input
                className="inp-up-em"
                type="tel"
                value={emp_tel}
                onChange={(e) => setETel(e.target.value)}
                // pattern="[0-9]*{8}"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) e.preventDefault();
                }}
                maxLength={8}
                placeholder="ປ້ອນເບີໂທ*"
              ></input>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-cre-em">ພາກສ່ວນ:</label>
              <select
                className="sel-up-em"
                value={selectSession}
                // onChange={(e) => setSelectSession(e.target.value)}
              >
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {session_name &&
                  session_name?.map((val) => (
                    <option key={val.session_name} value={val.session_name}>
                      {val.session_name}
                    </option>
                  ))}
              </select>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ຕໍາແໜ່ງ:</label>
              <select
                className="sel-up-em"
                value={selectPosition}
                // onChange={(e) => setselectPosition(e.target.value)}
              >
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {pos_name &&
                  pos_name?.map((val) => (
                    <option key={val.pos_name} value={val.pos_name}>
                      {val.pos_name}
                    </option>
                  ))}
              </select>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ພະແນກ:</label>
              <select
                className="sel-up-em"
                value={selectDepartment}
                // onChange={(e) => setselectDepartment(e.target.value)}
              >
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {dep_name &&
                  dep_name?.map((val) => (
                    <option key={val.dep_name} value={val.dep_name}>
                      {val.dep_name}
                    </option>
                  ))}
              </select>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ແຂວງຢູ່ປັດຈຸບັນ:</label>
              <select
                className="sel-up-em"
                value={selectProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
              >
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                {province &&
                  province?.map((val) => (
                    <option key={val.province} value={val.province}>
                      {val.province}
                    </option>
                  ))}
              </select>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ເມືອງຢູ່ປັດຈຸບັນ:</label>
              <input
                className="inp-up-em"
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="ປ້ອນເມືອງຢູ່ປັດຈຸບັນ*"
              ></input>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ບ້ານຢູ່ປັດຈຸບັນ:</label>
              <input
                className="inp-up-em"
                type="text"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                placeholder="ປ້ອນບ້ານຢູ່ປັດຈຸບັນ*"
              ></input>
            </p>
            <p className="p-btn-save-cancle-up-em">
              <button
                onClick={() =>
                  MySwalDeleteDepart.fire({
                    title: "ຢືນຢັນການແກ້ໄຂຂໍ້ມູນ",
                    icon: "warning",
                    iconColor: "#3085d6",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "ຢືນຢັນ",
                    cancelButtonText: "ຍົກເລີກ",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(`ແກ້ໄຂຂໍ້ມູນພະນັກງານສຳເລັດ!`, ``, `success`);
                      handleSubmitUpdate();
                      closeModalUp(false);
                    }
                  })
                }
                className="btn-cancle-up-em"
              >
                ບັນທຶກ
              </button>
              <button
                onClick={() =>
                  MySwalDeleteDepart.fire({
                    title: "ຢືນຢັນການຍົກເລີກ",
                    icon: "warning",
                    iconColor: "red",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "ຢືນຢັນ",
                    cancelButtonText: "ຍົກເລີກ",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      closeModalUp(false);
                    }
                  })
                }
                className="btn-save-up-em"
              >
                ຍົກເລີກ
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
