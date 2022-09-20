import React, { useState, useEffect } from 'react'
import "../css/SaveAnswerAssessment.css";
import Menubar from "../components/Menubar.js";
import { IoIosSave } from "react-icons/io";

function SaveAnswerAssessment() {

    const [val,setVal]=useState([]);

    const btnHandleChange=(onChangeValueTitleOne,i)=>{
        const inputDataTitleOne=[...val]
        inputDataTitleOne[i]=onChangeValueTitleOne.target.value;
        setVal(inputDataTitleOne)
    }




    useEffect(() => {
      TitleBigOnetGet();
    }, []);

    const TitleBigOnetGet = () => {
      var myHeaders = new Headers();
      myHeaders.append("x-api-key", sessionStorage.getItem("token"));
  
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch("http://192.168.0.193:1000/form", requestOptions)
        .then((res) => res.json())
        .then((result) => {
          setVal(result);
        });
    };
    
    console.log(val.head_name)

  return (
        <div className="box-save-ass">
            <Menubar />
            <div className="bg-save-ass">
              <div className='box-tag-save-ass'>
              <div className="box-tag-save-ass">
                  <p className="p-man-save-ass">
                    ຫົວຂໍ້ການປະເມີນ:&nbsp;{val.head_name}
                  </p>
                  <div className="con-save-ass">
                    <div className="box-btn-save-save-ass">
                        <button
                            className="btn-save-save-ass"
                            
                            >
                            <label className="lbl-ic-p-save-ass">
                                <IoIosSave className='ic-btn-save-save-ass'/>
                            </label>
                            ບັນທຶກ
                        </button>
                    </div>
                    <div className="box-title-1-save-ass">
                        <div className='title-1-save-ass'>
                          <label className='lbl-big-title-save-ass'>1.</label>
                          <label className='lbl-string-big-title-save-ass'>ການພະຈົນໄພເກາະມະນຸດເງືອກ</label>
                          <div className='box-score-1-save-ass'>
                            <div>0</div><div>1</div><label>2</label><label>3</label><label>4</label>
                            <label>5</label><label>6</label><label>7</label><label>8</label><label>9</label>
                            <label>10</label>
                          </div>
                        </div>
                        <div className='title-1_1-save-ass'>
                        {val.map((row,i)=>{
                          
                          return(
                            <div className="box-inp-title-1_1-save-ass" key={i}>
                                <span className='num-title-1_1-save-ass'>1.{i+1}</span>
                                <label className='lbl-string-title-1_1-save-ass'>
                                {row.title2_name}
                                </label>
                                <div className='box-score-1_1-save-ass'>
                                    <label>0</label><label>1</label><label>2</label><label>3</label><label>4</label>
                                    <label>5</label><label>6</label><label>7</label><label>8</label><label>9</label>
                                    <label>10</label>
                                </div>
                            </div>
                            
                           )
                        })}
                        </div>
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default SaveAnswerAssessment;