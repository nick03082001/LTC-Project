import React, { useState } from "react";
import Menubar from "../components/Menubar.js";
import "../css/CreateAssessment.css";
import { FaPlusCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import Swal from 'sweetalert2';

function CreateAssessment() {
  // ສ້າງຫົວຂໍ້ໃຫຍ່ທີ 1

  const [val, setVal] = useState([]);
  const handleAddInp = () => {
    const addInput = [...val, []];
    setVal(addInput);
  };

  const btnHandleChange = (onChangeValueTitleOne, i) => {
    const inputDataTitleOne = val;
    inputDataTitleOne[i] = {title2_name:onChangeValueTitleOne.target.value}
    setVal(inputDataTitleOne);
  };

  const handleDeleteInp = (i) => {
    const deleteInput = [...val];
    deleteInput.splice(i, 1);
    setVal(deleteInput);
  };

  // ສ້າງຫົວຂໍ້ໃຫຍ່ທີ 2

  const [val2, setVal2] = useState([]);
  const handleAddInp2 = () => {
    const addInput2 = [...val2, []];
    setVal2(addInput2);
  };

  const btnHandleChange2 = (onChangeValueTitleTwo, j) => {
    const inputDataTitleTwo = [...val2];
    inputDataTitleTwo[j] = {title2_name:onChangeValueTitleTwo.target.value}
    setVal2(inputDataTitleTwo);
  };

  const handleDeleteInp2 = (j) => {
    const deleteInput2 = [...val2];
    deleteInput2.splice(j, 1);
    setVal2(deleteInput2);
  };

  // ເບີີ່ງຂໍ້ມູນໃນ console
  console.log(val, "data-");

  //api ບັນທຶກຫົວຂໍ້1

  const [head_name, setHead_name] = useState("");
  const [title1_name1, setTitle1_name1] = useState("");
  const [title2_name2, setTitle2_name2] = useState("");
  const em = "E01";

  const addAssessment = (e) => {

    var axios = require("axios");
    var data = {
      head_name: head_name,
      emp_ID: "E01",
      title1: [
        {
          title1_name: title1_name1,
          title1_score: 60,
          title2: val
        },
        {
          title1_name: title2_name2,
          title1_score: 40,
          title2: val2
        }
      ],
    };


    console.log({data})

    var config = {
      method: "POST",
      url: "https://www.tookcomsci.live/myproject1/header_form",
      headers: { 
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        'Content-Type': 'application/json'
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        Swal.fire(`ເພີ່ມຂໍ້ມູນແບບປະເມີນສຳເລັດ`, ``, `success`).then(()=>{
          if (response.data["status"] === "ok") {
            window.location.href = "/assessment/manage";
          }
      })
      })
      .catch(function (error) {
        //console.log(error);
      });

  };



  return (
    <div className="box-modal-create-ass">
      <div className="box-create-ass">
        <Menubar />
        <div className="bg-create-ass">
          <div className="box-tag-create-ass">
            <div className="box-tag-create-ass">
              <p className="p-man-create-ass">ສ້າງແບບປະເມີນ</p>
              <div className="con-title-create-ass">
                <div className="box-title-create-ass">
                  <IoDocumentText className="file-ic-create-ass" />
                  <input
                    className="title-inp-create-ass"
                    type="text"
                    placeholder="ປ້ອນຊື່ແບບປະເມີນ..."
                    value={head_name}
                    onChange={(e) => setHead_name(e.target.value)}
                  ></input>
                </div>
                <div className="box-btn-save-create-ass">
                  <button
                    className="btn-save-create-ass"
                    onClick={(e) => {
                      addAssessment(e);
                      // addAssessment2(e);
                      // alert("yai");
                    }}
                  >
                    <label className="lbl-ic-p-create-ass">
                      <IoIosSave className="btn-save-title" />
                    </label>
                    ບັນທຶກແບບປະເມີນ
                  </button>
                </div>
                <div className="box-title-1-create-ass">
                  <div className="title-1-create-ass">
                    <label className="lbl-big-title">1.</label>
                    <input
                      className="inp-title-1-create-ass"
                      type="text"
                      placeholder="ປ້ອນຊື່ຫົວຂໍ້ໃຫຍ່ແບບປະເມີນ..."
                      value={title1_name1}
                      onChange={(e) => setTitle1_name1(e.target.value)}
                    ></input>
                  </div>
                  <div className="title-1_1-create-ass">
                    {val.map((data, i) => {
                      return (
                        <div className="box-inp-title-1_1-create-ass" key={i}>
                          <span className="num-title-2_1-create-ass">
                            1.{i + 1}{" "}
                          </span>
                          <input
                            className="inp-title-1_1-create-ass"
                            type="text"
                            value={data.title2_name}
                            placeholder="ປ້ອນຊື່ຫົວຂໍ້ຍ່ອຍແບບປະເມີນ"
                            onChange={(e) => btnHandleChange(e, i)}
                            onKeyPress={(event) => {
                              if (event.key === "Enter") {
                                handleAddInp();
                                // console.log(event)
                              }
                            }}
                          ></input>
                          <button
                            className="btn-delete-title-1_1-create-ass"
                            onClick={() => handleDeleteInp(i)}
                          >
                            <RiDeleteBin6Line className="icon-delete-title-1_1-create-ass" />
                          </button>
                        </div>
                      );
                    })}
                    <div className="box-btn-plus-title-create-ass">
                      <button
                        className="btn-plus-title-create-ass"
                        onClick={() => {
                          handleAddInp();
                        }}
                      >
                        <label className="lbl-ic-plt-create-ass">
                          <FaPlusCircle />
                        </label>
                        ເພີ່ມຫົວຂໍ້ຍ່ອຍ
                      </button>
                    </div>
                  </div>
                </div>
                <div className="box-title-2-create-ass">
                  <div className="title-2-create-ass">
                    <label className="lbl-big-title">2.</label>
                    <input
                      className="inp-title-2-create-ass"
                      type="text"
                      placeholder="ປ້ອນຊື່ຫົວຂໍ້ໃຫຍ່ແບບປະເມີນ..."
                      value={title2_name2}
                      onChange={(e) => setTitle2_name2(e.target.value)}
                    ></input>
                  </div>
                  <div className="title-2_1-create-ass">
                    {val2.map((data2, j) => {
                      return (
                        <div className="box-inp-title-2_1-create-ass" key={j}>
                          <span className="num-title-2_1-create-ass">
                            2.{j + 1}{" "}
                          </span>
                          <input
                            className="inp-title-2_1-create-ass"
                            type="text"
                            value={data2.title2_name}
                            placeholder="ປ້ອນຊື່ຫົວຂໍ້ຍ່ອຍແບບປະເມີນ"
                            onChange={(s) => btnHandleChange2(s, j)}
                            onKeyPress={(event) => {
                              if (event.key === "Enter") {
                                handleAddInp2();
                                // console.log(event)
                              }
                            }}
                          ></input>
                          <button
                            className="btn-delete-title-2_1-create-ass"
                            onClick={() => handleDeleteInp2(j)}
                          >
                            <RiDeleteBin6Line className="icon-delete-title-2_1-create-ass" />
                          </button>
                        </div>
                      );
                    })}
                    <div className="box-btn-plus-title-create-ass">
                      <button
                        className="btn-plus-title-create-ass"
                        onClick={() => {
                          handleAddInp2();
                        }}
                      >
                        <label className="lbl-ic-plt-create-ass">
                          <FaPlusCircle />
                        </label>
                        ເພີ່ມຫົວຂໍ້ຍ່ອຍ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAssessment;