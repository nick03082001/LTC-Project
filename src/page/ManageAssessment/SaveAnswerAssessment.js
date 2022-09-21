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
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={0}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={1}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={2}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={3}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={4}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={5}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={6}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={7}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={8}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={9}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={i} type="radio"
                                      value={10}
                                    /></label>
                                </div>
                            </div>
                            
                           )
                        })}
                          <div className='total-score-title-1-save-ass'>
                            <label className='lbl-string-total-score-save-ass'>ຄະແນນລວມຫົວຂໍ້:</label>
                            <div className='box-total-score-1-save-ass'>
                              <span className='string-tital-score-1-save-ass'>68</span>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="box-title-1-save-ass">
                        <div className='title-1-save-ass'>
                          <label className='lbl-big-title-save-ass'>2.</label>
                          <label className='lbl-string-big-title-save-ass'>ການພະຈົນໄພເກາະແຫ່ງເມືອງທອງຄຳ</label>
                          <div className='box-score-1-save-ass'>
                            <div>0</div><div>1</div><label>2</label><label>3</label><label>4</label>
                            <label>5</label><label>6</label><label>7</label><label>8</label><label>9</label>
                            <label>10</label>
                          </div>
                        </div>
                        <div className='title-1_1-save-ass'>
                        {val.map((row,j)=>{
                          
                          return(
                            <div className="box-inp-title-1_1-save-ass" key={j}>
                                <span className='num-title-1_1-save-ass'>2.{j+1}</span>
                                <label className='lbl-string-title-1_1-save-ass'>
                                {row.title2_name}
                                </label>
                                <div className='box-score-1_1-save-ass'>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={0}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={1}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={2}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={3}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={4}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={5}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={6}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={7}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={8}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={9}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j} type="radio"
                                      value={10}
                                    /></label>
                                </div>
                            </div>
                            
                           )
                        })}
                          <div className='total-score-title-1-save-ass'>
                            <label className='lbl-string-total-score-save-ass'>ຄະແນນລວມຫົວຂໍ້:</label>
                            <div className='box-total-score-1-save-ass'>
                              <span className='string-tital-score-1-save-ass'>68</span>
                            </div>
                          </div>
                          <div className='total-score-title-1-save-ass'>
                            <label className='lbl-string-total-score-save-ass'>ຄະແນນລວມທັງໝົດ:</label>
                            <div className='box-total-score-1-save-ass'>
                              <span className='string-tital-score-1-save-ass'>100%</span>
                            </div>
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

export default SaveAnswerAssessment;