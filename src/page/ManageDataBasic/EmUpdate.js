import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "../css/EmUpdate.css";
import { RiCloseLine } from "react-icons/ri";

export default function EmUpdate({ closeModalUp, data }) {
    
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://192.168.1.191:1000/employees/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result["status"] === "ok") {
          setEID(result["employee"]["emp_ID"]);
          setGender(result["employee"]["gender"]);
          setEname(result["employee"]["emp_name"]);
          setESurname(result["employee"]["emp_surename"]);
          setETel(result["employee"]["emp_tel"]);
          setSession(result["employee"]["session"]);
          setPosition(result["employee"]["pos_name"]);
          setDepartment(result["employee"]["dep_name"]);
          setVillage(result["employee"]["village"]);
          setDistrict(result["employee"]["district"]);
          setProvince(result["employee"]["province"]);
        }
      })
      .catch((error) => console.log("error", error));
  });

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", sessionStorage.getItem("token"));

    var formdata = new FormData();
    formdata.append("emp_ID", emp_ID);
    formdata.append("emp_name", emp_name);
    formdata.append("emp_surname", emp_surname);
    formdata.append("emp_tel", emp_tel);
    formdata.append("village", village);
    formdata.append("district", district);
    formdata.append("pos_name", pos_name);
    formdata.append("dep_name", dep_name);
    formdata.append("province", province);
    formdata.append("session_name", session_name);
    formdata.append("gender", gender);
    formdata.append("file", profilepic[0], profilepic[0].name);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("http://47.250.49.41/myproject1/update_employee", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/employee";
        }
      })
      .catch((error) => console.log("error", error));
  };
  const [emp_ID, setEID] = useState(data?.emp_ID);
  const [profilepic, setProfilepic] = useState(data?.profilepic);
  const [gender, setGender] = useState(data?.gender);
  const [emp_name, setEname] = useState(data?.emp_name);
  const [emp_surname, setESurname] = useState(data?.emp_surname);
  const [emp_tel, setETel] = useState(data?.emp_tel);
  const [session_name, setSession] = useState(data?.session);
  const [pos_name, setPosition] = useState(data?.pos_ID);
  const [dep_name, setDepartment] = useState(data?.dep_ID);
  const [village, setVillage] = useState(data?.village);
  const [district, setDistrict] = useState(data?.district);
  const [province, setProvince] = useState(data?.province);
  //const [imageURLsUp, setImageURLs] = useState('');

  useEffect(() => {
    if (profilepic.length < 1) return;
    const newImageUrlsUp = [];
    // profilepic.forEach((imageN) =>
    //   newImageUrlsUp.push(URL.createObjectURL(imageN))
    // );
    //setImageURLs(newImageUrlsUp);
  }, [profilepic]);

  function onImageChangeUp(e) {
    setProfilepic([...e.target.files]);
  }

  console.log("profilepic : ", profilepic);
  //console.log("imageURLs : ", imageURLsUp);

  return (
    <div className="myModal-up-em">
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
              className="inp-img-none"
              id="id-img-click-up-em"
              type="file"
              multiple
              accept="image/*"
              onChange={onImageChangeUp}
            />
            {/* {imageURLsUp.map((imageSrcUp, idxx) => (
              <img className="img-up-em" key={idxx} src={imageSrcUp} alt="" />
            ))} */}
          </p>
        </div>
        <div className="box-con-box-inp-up-em">
          <div className="box-input-up-em">
            <p className="p-inp-id-up-em">
              <label className="lbl-head-up-em">ລະຫັດພະນັກງານ:</label>
              <input
                className="inp-up-em"
                onChange={(e) => setEID(e.target.value)}
                value={emp_ID}
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
                      className="inp-radio"
                      id="male"
                      type="radio"
                      name="g"
                      onChange={(e) => setGender(e.target.value)}
                      value={gender}
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
                      name="g"
                      onChange={(e) => setGender(e.target.value)}
                      value={gender}
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
                onChange={(e) => setEname(e.target.value)}
                value={emp_name}
                placeholder="ປ້ອນຊື່*"
              ></input>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ນາມສະກຸນ:</label>
              <input
                className="inp-up-em"
                type="text"
                onChange={(e) => setESurname(e.target.value)}
                value={emp_surname}
                placeholder="ປ້ອນນາມສະກຸນ*"
              ></input>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ເບີໂທ:</label>
              <input
                className="inp-up-em"
                type="tel"
                onChange={(e) => setETel(e.target.value)}
                value={emp_tel}
                pattern="[0-9]*{8}"
                placeholder="ປ້ອນເບີໂທ*"
              ></input>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-cre-em">ພາກສ່ວນ:</label>
              <select className="sel-up-em">
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                <option
                  onChange={(e) => setSession(e.target.value)}
                  value={session_name}
                >
                  ຂໍ້ມູນ
                </option>
              </select>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ຕໍາແໜ່ງ:</label>
              <select className="sel-up-em">
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                <option
                  value={pos_name}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  ຫົວໜ້າພະແນກ
                </option>
              </select>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ພະແນກ:</label>
              <select
                className="sel-up-em"
                // value={dep_name}
                // onChange={(e) => setDepartment(e.target.value)}
              >
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                <option
                  value={dep_name}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  ວິເຄາະ
                </option>
              </select>
            </p>
            <p className="pppp-up-em">
              <label className="lbl-head-up-em">ແຂວງຢູ່ປັດຈຸບັນ:</label>
              <select className="sel-up-em">
                <option selected disabled>
                  ກະລຸນາເລືອກ*
                </option>
                <option
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                >
                  ນະຄອນຫຼວງວຽງຈັນ
                </option>

                {/* <option value="ສາລະວັນ">ສາລະວັນ</option> */}
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
                onClick={() => closeModalUp(false)}
                className="btn-cancle-up-em"
              >
                ຍົກເລີກ
              </button>
              <button onClick={handleSubmitUpdate} className="btn-save-up-em">
                ບັນທຶກ
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { FaUserCircle } from "react-icons/fa";
// import React, { useState, useEffect } from "react";
// import "../css/EmUpdate.css";
// import { RiCloseLine } from "react-icons/ri";

// export default function EmUpdate({ closeModalUp, data }) {
//   var myHeaders = new Headers();
//   myHeaders.append("x-api-key", sessionStorage.getItem("token"));

//   useEffect(() => {
//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     fetch("http://47.250.49.41/myproject1/employees", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         if (result["status"] === "ok") {
//           setEID(result["employee"]["emp_ID"]);
//           setProfilepic(result["employee"]["profilepic"]);
//           setGender(result["employee"]["gender"]);
//           setEname(result["employee"]["emp_name"]);
//           setESurname(result["employee"]["emp_surname"]);
//           setETel(result["employee"]["emp_tel"]);
//           setSession(result["employee"]["session_name"]);
//           setPosition(result["employee"]["pos_name"]);
//           setDepartment(result["employee"]["dep_name"]);
//           setVillage(result["employee"]["village"]);
//           setDistrict(result["employee"]["district"]);
//           setProvince(result["employee"]["province"]);
//         }
//       })
//       .catch((error) => console.log("error", error));
//   });

//   const handleSubmitUpdate = (event) => {
//     event.preventDefault();
//     var myHeaders = new Headers();
//     myHeaders.append("x-api-key", sessionStorage.getItem("token"));
//     var formdata = new FormData();
//     formdata.append("emp_ID", emp_ID);
//     formdata.append("emp_name", emp_name);
//     formdata.append("emp_surname", emp_surname);
//     formdata.append("emp_tel", emp_tel);
//     formdata.append("village", village);
//     formdata.append("district", district);
//     formdata.append("pos_name", pos_name);
//     formdata.append("dep_name", dep_name);
//     formdata.append("province", province);
//     formdata.append("session_name", session_name);
//     formdata.append("gender", gender);
//     formdata.append("file", profilepic[0], profilepic[0].name);

//     var requestOptions = {
//       method: "PUT",
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch("http://47.250.49.41/myproject1/update_employee", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         alert(result["message"]);
//         if (result["status"] === "ok") {
//           window.location.href = "/employee";
//         }
//       })
//       .catch((error) => console.log("error", error));
//   };
//   const [emp_ID, setEID] = useState(data?.emp_ID);
//   const [profilepic, setProfilepic] = useState(data?.profilepic);
//   const [gender, setGender] = useState(data?.gender);
//   const [emp_name, setEname] = useState(data?.emp_name);
//   const [emp_surname, setESurname] = useState(data?.emp_surname);
//   const [emp_tel, setETel] = useState(data?.emp_tel);
//   const [session_name, setSession] = useState(data?.session);
//   const [pos_name, setPosition] = useState(data?.pos_ID);
//   const [dep_name, setDepartment] = useState(data?.dep_ID);
//   const [village, setVillage] = useState(data?.village);
//   const [district, setDistrict] = useState(data?.district);
//   const [province, setProvince] = useState(data?.province);
//   //const [imageURLsUp, setImageURLs] = useState('');

//   useEffect(() => {
//     if (profilepic.length < 1) return;
//     const newImageUrlsUp = [];
//     // profilepic.forEach((imageN) =>
//     //   newImageUrlsUp.push(URL.createObjectURL(imageN))
//     // );
//     //setImageURLs(newImageUrlsUp);
//   }, [profilepic]);

//   function onImageChangeUp(e) {
//     setProfilepic([...e.target.files]);
//   }

//   console.log("profilepic : ", profilepic);
//   //console.log("imageURLs : ", imageURLsUp);

//   return (
//     <div className="myModal-up-em">
//       <div className="modal-content-up-em">
//         <button onClick={() => closeModalUp(false)} className="close-up-em">
//           <RiCloseLine />
//         </button>
//         <p className="header-up-em">
//           <p className="h6-data-up-em">ແກ້ໄຂຂໍ້ມູນພະນັກງານ</p>
//         </p>
//         <div className="div-picture-up-em">
//           <p className="p-con-lbl-picture-up-em">
//             <label className="lbl-img-click-up-em" htmlFor="id-img-click-up-em">
//               <FaUserCircle
//                 className="img-click-up-em"
//                 htmlFor="id-img-click-up-em"
//               />
//             </label>
//           </p>
//           <p className="p-con-picture-up-em">
//             <input
//               className="inp-img-none"
//               id="id-img-click-up-em"
//               type="file"
//               multiple
//               accept="image/*"
//               onChange={onImageChangeUp}
//             />
//             {/* {imageURLsUp.map((imageSrcUp, idxx) => (
//               <img className="img-up-em" key={idxx} src={imageSrcUp} alt="" />
//             ))} */}
//           </p>
//         </div>
//         <div className="box-con-box-inp-up-em">
//           <div className="box-input-up-em">
//             <p className="p-inp-id-up-em">
//               <label className="lbl-head-up-em">ລະຫັດພະນັກງານ:</label>
//               <input
//                 className="inp-up-em"
//                 value={emp_ID}
//                 onChange={(e) => setEID(e.target.value)}
//                 type="text"
//                 placeholder="ປ້ອນລະຫັດພະນັກງານ*"
//               ></input>
//             </p>
//             <p className="p-gender-up-em">
//               <label className="lbl-head-up-em">ເພດ:</label>
//               <p className="p-phed-up-em">
//                 <p className="p-soud-up-em">
//                   <label className="lbl-nnnn-up-em">
//                     <input
//                       value={gender}
//                       className="inp-radio"
//                       id="male"
//                       type="radio"
//                       name="g"
//                       onChange={(e) => setGender(e.target.value)}
//                     />
//                     <label className="btn-radio-up-em" htmlFor="male">
//                       ຍິງ
//                     </label>
//                   </label>
//                   <label className="lbl-nnnn-up-em">
//                     <input
//                       className="inp-radio"
//                       type="radio"
//                       id="female"
//                       value="ຊາຍ"
//                       name="g"
//                     />
//                     <label className="btn-radio-up-em" htmlFor="female">
//                       ຊາຍ
//                     </label>
//                   </label>
//                 </p>
//               </p>
//             </p>
//             <p className="pppp-up-em">
//               <label className="lbl-head-up-em">ຊື່:</label>
//               <input
//                 className="inp-up-em"
//                 type="text"
//                 value={emp_name}
//                 onChange={(e) => setEname(e.target.value)}
//                 placeholder="ປ້ອນຊື່*"
//               ></input>
//             </p>
//             <p className="pppp-up-em">
//               <label className="lbl-head-up-em">ນາມສະກຸນ:</label>
//               <input
//                 className="inp-up-em"
//                 value={emp_surname}
//                 type="text"
//                 onChange={(e) => setESurname(e.target.value)}
//                 placeholder="ປ້ອນນາມສະກຸນ*"
//               ></input>
//             </p>
//             <p className="pppp-up-em">
//               <label className="lbl-head-up-em">ເບີໂທ:</label>
//               <input
//                 className="inp-up-em"
//                 type="tel"
//                 value={emp_tel}
//                 onChange={(e) => setETel(e.target.value)}
//                 pattern="[0-9]*{8}"
//                 placeholder="ປ້ອນເບີໂທ*"
//               ></input>
//             </p>
//             <p className="pppp-up-em">
//               <label className="lbl-head-cre-em">ພາກສ່ວນ:</label>
//               <select
//                 className="sel-up-em"
//                 value={session_name}
//                 onChange={(e) => setSession(e.target.value)}
//               >
//                 <option selected disabled>
//                   ກະລຸນາເລືອກ*
//                 </option>
//                 <option value="ຂໍ້ມູນ">ຂໍ້ມູນ</option>
//               </select>
//             </p>
//             <p className="pppp-up-em">
//               <label className="lbl-head-up-em">ຕໍາແໜ່ງ:</label>
//               <select
//                 className="sel-up-em"
//                 value={pos_name}
//                 onChange={(e) => setPosition(e.target.value)}
//               >
//                 <option selected disabled>
//                   ກະລຸນາເລືອກ*
//                 </option>
//                 <option value="ຫົວໜ້າພະແນກ">ຫົວໜ້າພະແນກ</option>
//               </select>
//             </p>
//             <p className="pppp-up-em">
//               <label className="lbl-head-up-em">ພະແນກ:</label>
//               <select
//                 className="sel-up-em"
//                 // value={dep_name}
//                 // onChange={(e) => setDepartment(e.target.value)}
//               >
//                 <option selected disabled>
//                   ກະລຸນາເລືອກ*
//                 </option>
//                 <option
//                   value={dep_name}
//                   onChange={(e) => setDepartment(e.target.value)}
//                 >
//                   ວິເຄາະ
//                 </option>
//               </select>
//             </p>
//             <p className="pppp-up-em">
//               <label className="lbl-head-up-em">ແຂວງຢູ່ປັດຈຸບັນ:</label>
//               <select className="sel-up-em">
//                 <option selected disabled>
//                   ກະລຸນາເລືອກ*
//                 </option>
//                 <option
//                   value={province}
//                   onChange={(e) => setProvince(e.target.value)}
//                 >
//                   ນະຄອນຫຼວງວຽງຈັນ
//                 </option>

//                 {/* <option value="ສາລະວັນ">ສາລະວັນ</option> */}
//               </select>
//             </p>
//             <p className="pppp-up-em">
//               <label className="lbl-head-up-em">ເມືອງຢູ່ປັດຈຸບັນ:</label>
//               <input
//                 className="inp-up-em"
//                 type="text"
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 placeholder="ປ້ອນເມືອງຢູ່ປັດຈຸບັນ*"
//               ></input>
//             </p>
//             <p className="pppp-up-em">
//               <label className="lbl-head-up-em">ບ້ານຢູ່ປັດຈຸບັນ:</label>
//               <input
//                 className="inp-up-em"
//                 type="text"
//                 value={village}
//                 onChange={(e) => setVillage(e.target.value)}
//                 placeholder="ປ້ອນບ້ານຢູ່ປັດຈຸບັນ*"
//               ></input>
//             </p>
//             <p className="p-btn-save-cancle-up-em">
//               <button
//                 onClick={() => closeModalUp(false)}
//                 className="btn-cancle-up-em"
//               >
//                 ຍົກເລີກ
//               </button>
//               <button onClick={handleSubmitUpdate} className="btn-save-up-em">
//                 ບັນທຶກ
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
