import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "../css/EmCreate.css";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

export default function CreateEmployee({ closeModal }) {
  const [emp_ID, setEID] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const [gender, setGender] = useState("");
  const [emp_name, setEname] = useState("");
  const [emp_surname, setESurname] = useState("");
  const [emp_tel, setETel] = useState("");
  const [pos_name, setPosition] = useState([]);
  const [dep_name, setDepartment] = useState([]);
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState([]);
  const [session_name, setSession] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const [selectProvince, setSelectedProvince] = useState("");
  const [selectSession, setSelectSession] = useState("");
  const [selectPosition, setselectPosition] = useState("");
  const [selectDepartment, setselectDepartment] = useState("");

  const handleSubmit = async (e) => {
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
    formdata.append("gender", gender);
    formdata.append("prov_name", selectProvince);
    formdata.append("sessions_name", selectSession);
    formdata.append("files", profilepic[0], profilepic[0].name);
    console.log(emp_ID);
    console.log(emp_name);
    console.log(emp_surname);
    console.log(emp_tel);
    console.log(selectDepartment);
    console.log(district);
    console.log(village);
    console.log(selectPosition);
    console.log(gender);
    console.log(selectProvince);
    console.log(selectSession);

    var requestOptions = {
      method: "POST",
      body: formdata,
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://47.250.49.41/myproject1/employee", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/employee";
        }
      })
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {
    axios
      .get("http://47.250.49.41/myproject1/provinces", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProvince(res?.data?.province);
      });

    axios
      .get("http://47.250.49.41/myproject1/session", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setSession(res?.data?.session);
      });

    axios
      .get("http://47.250.49.41/myproject1/department", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setDepartment(res?.data?.department);
      });

    axios
      .get("http://47.250.49.41/myproject1/position", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPosition(res?.data?.position);
      });
  }, []);

  useEffect(() => {
    if (profilepic.length < 1) return;
    const newImageUrls = [];
    profilepic.forEach((image) =>
      newImageUrls.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageUrls);
  }, [profilepic]);

  function onImageChange(e) {
    setProfilepic([e.target.files[0]]);
  }

  return (
    <div className="myModal-cre-em">
      <div className="modal-content-cre-em">
        <button onClick={() => closeModal(false)} className="close-cre-em">
          <RiCloseLine />
        </button>
        <p className="header-cre-em">
          <p className="h6-data-cre-em">ປ້ອນຂໍ້ມູນພະນັກງານ</p>
        </p>
        <div className="div-picture-cre-em">
          <p className="p-con-lbl-picture-cre-em">
            <label
              className="lbl-img-click-cre-em"
              htmlFor="id-img-click-cre-em"
            >
              <FaUserCircle
                className="img-click-cre-em"
                htmlFor="id-img-click-cre-em"
              />
            </label>
          </p>
          <p className="p-con-picture-cre-em">
            <input
              className="inp-img-none"
              id="id-img-click-cre-em"
              type="file"
              multiple
              accept="image/*"
              onChange={onImageChange}
            />
            {imageURLs.map((imageSrc, idx) => (
              <img className="img-cre-em" key={idx} src={imageSrc} alt="" />
            ))}
          </p>
        </div>
        <div className="box-con-box-inp-cre-em">
          <div className="box-input-cre-em">
            <p className="p-inp-id-cre-em">
              <label className="lbl-head-cre-em">ລະຫັດພະນັກງານ:</label>
              <input
                className="inp-cre-em"
                onChange={(e) => setEID(e.target.value)}
                type="text"
                placeholder="ປ້ອນລະຫັດພະນັກງານ*"
              ></input>
            </p>
            <p className="p-gender-cre-em">
              <label className="lbl-head-cre-em">ເພດ:</label>
              <p className="p-phed-cre-em">
                <p className="p-soud-cre-em">
                  <label className="lbl-nnnn-cre-em">
                    <input
                      onChange={(e) => setGender(e.target.value)}
                      className="inp-radio"
                      id="male"
                      type="radio"
                      value="ຍິງ"
                      name="g"
                    />
                    <label className="btn-radio-cre-em" htmlFor="male">
                      ຍິງ
                    </label>
                  </label>
                  <label className="lbl-nnnn-cre-em">
                    <input
                      onChange={(e) => setGender(e.target.value)}
                      className="inp-radio"
                      type="radio"
                      id="female"
                      value="ຊາຍ"
                      name="g"
                    />
                    <label className="btn-radio-cre-em" htmlFor="female">
                      ຊາຍ
                    </label>
                  </label>
                </p>
              </p>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ຊື່:</label>
              <input
                className="inp-cre-em"
                onChange={(e) => setEname(e.target.value)}
                type="text"
                placeholder="ປ້ອນຊື່*"
              ></input>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ນາມສະກຸນ:</label>
              <input
                className="inp-cre-em"
                onChange={(e) => setESurname(e.target.value)}
                type="text"
                placeholder="ປ້ອນນາມສະກຸນ*"
              ></input>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ເບີໂທ:</label>
              <input
                className="inp-cre-em"
                onChange={(e) => setETel(e.target.value)}
                type="tel"
                pattern="[0-9]*{8}"
                placeholder="ປ້ອນເບີໂທ*"
              ></input>
            </p>
            <p className="pppp-cre-em">
              {/* {session_name} */}
              <label className="lbl-head-cre-em">ພາກສ່ວນ:</label>
              <select
                className="sel-cre-em"
                onChange={(e) => setSelectSession(e.target.value)}
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
            <p className="pppp-cre-em">
              {/* {session_name} */}
              <label className="lbl-head-cre-em">ຕໍາແໜ່ງ:</label>
              <select
                className="sel-cre-em"
                onChange={(e) => setselectPosition(e.target.value)}
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
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ພະແນກ:</label>
              <select
                className="sel-cre-em"
                onChange={(e) => setselectDepartment(e.target.value)}
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
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ແຂວງຢູ່ປັດຈຸບັນ:</label>
              <select
                className="sel-cre-em"
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
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ເມືອງຢູ່ປັດຈຸບັນ:</label>
              <input
                className="inp-cre-em"
                onChange={(e) => setDistrict(e.target.value)}
                type="text"
                placeholder="ປ້ອນເມືອງຢູ່ປັດຈຸບັນ*"
              ></input>
            </p>
            <p className="pppp-cre-em">
              <label className="lbl-head-cre-em">ບ້ານຢູ່ປັດຈຸບັນ:</label>
              <input
                className="inp-cre-em"
                onChange={(e) => setVillage(e.target.value)}
                type="text"
                placeholder="ປ້ອນບ້ານຢູ່ປັດຈຸບັນ*"
              ></input>
            </p>
            <p className="p-btn-save-cancle-cre-em">
              <button
                onClick={() => closeModal(false)}
                className="btn-cancle-cre-em"
              >
                ຍົກເລີກ
              </button>
              <button onClick={handleSubmit} className="btn-save-cre-em">
                ບັນທຶກ
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
