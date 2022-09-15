import React, { useState } from 'react'
import Menubar from "../components/Menubar.js";
import "../css/CreateAssessment.css";
import { FaPlusCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";

function CreateAssessment() {

  const [val,setVal]=useState([]);
  const handleAddInp=()=>{
    const addInput=[...val,[]]
    setVal(addInput)
  }

  const btnHandleChange=()=>{

  }

  return (
    <div className="box-modal-create-ass">
        <div className="box-create-ass">
            <Menubar />
            <div className="bg-create-ass">
              <div className='box-tag-create-ass'>
              <div className="box-tag-create-ass">
                  <p className="p-man-create-ass">
                    ສ້າງແບບປະເມີນ
                  </p>
                  <div className="con-title-create-ass">
                      <div className="box-title-create-ass">
                          <IoDocumentText className="file-ic-create-ass" />
                            <input
                            className="title-inp-create-ass"
                            type="text"
                            placeholder="ປ້ອນຊື່ແບບປະເມີນ..."
                            >
                            </input>
                      </div>
                      <div className="box-btn-save-create-ass">
                        <button
                            className="btn-save-create-ass"
                            
                            >
                            <label className="lbl-ic-p-create-ass">
                                <IoIosSave className='btn-save-title'/>
                            </label>
                            ບັນທຶກແບບປະເມີນ
                        </button>
                      </div>
                      <div className="box-title-1-create-ass">
                        <div className='title-1-create-ass'>
                          <label className='lbl-big-title'>1.</label>
                          <input className='inp-title-1-create-ass'
                            type="text"
                            placeholder="ປ້ອນຊື່ຫົວຂໍ້ໃຫຍ່ແບບປະເມີນ..."
                          >
                          </input>
                        </div>
                        <div className='title-1_1-create-ass'>
                          <button
                            className="btn-plus-title-create-ass"
                            onClick={() => handleAddInp()}
                            >
                            <label className="lbl-ic-plt-create-ass">
                                <FaPlusCircle />
                            </label>
                            ເພີ່ມຫົວຂໍ້ຍ່ອຍ
                        </button>
                        {val.map((data,i)=>{
                          return(
                            <input className='inp-title-1_1-create-ass'
                              type="text"
                              placeholder="ປ້ອນຊື່ຫົວຂໍ້ຍ່ອຍແບບປະເມີນ"
                              onClick={e=>btnHandleChange(e,i) }
                            >
                            </input>
                            )
                        })}
                        </div>
                      </div>

                  </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAssessment