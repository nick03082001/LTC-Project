import React, { useState, useEffect } from 'react'
import "./ReportScoreAssDetial.css";
import Menubar from "../components/Menubar.js";
import { IoIosSave } from "react-icons/io";
import axios from "axios";

function ReportScoreAssDetial() {

    const [val,setVal]=useState([]);

    const btnHandleChange=(onChangeValueTitleOne,i)=>{
        const inputDataTitleOne=[...val]
        inputDataTitleOne[i]=onChangeValueTitleOne.target.value;
        setVal(inputDataTitleOne)
    }


    const HeaderAssGet = () => {
      axios.get("https://www.tookcomsci.live/myproject1/header_form")
      .then((result) => {
          // console.log(result.data.form)
          setVal(result.data.form);
        });
        
    };

  useEffect(() => {
      HeaderAssGet();
  }, []);
    
    console.log(val.head_name)

  return (
        <div className="box-report-detail">
            <Menubar />
            <div className="bg-report-detail">
              <div className='box-tag-report-detail'>
              <div className="box-tag-report-detail">
                  <p className="p-man-report-detail">
                    ຫົວຂໍ້ການປະເມີນ:&nbsp;{val.head_name}
                  </p>
                  <div className="con-report-detail">
                    {/* <div className="box-btn-save-save-ass">
                        <button
                            className="btn-save-save-ass"
                            
                            >
                            <label className="lbl-ic-p-save-ass">
                                <IoIosSave className='ic-btn-save-save-ass'/>
                            </label>
                            ບັນທຶກ
                        </button>
                    </div> */}
                    <div className="box-title-1-report-detail">
                        <div className='title-1-report-detail'>
                          <div className='aabb'>
                            <label className='lbl-big-title-report-detail'>1.</label>
                            <label className='lbl-string-big-title-report-detail'>ການພະຈົນໄພເກາະມະນຸດເງືອກ</label>
                          </div>
                          <div className='box-score-1-report-detail'>
                            <label>0</label><label>1</label><label>2</label><label>3</label><label>4</label>
                            <label>5</label><label>6</label><label>7</label><label>8</label><label>9</label>
                            <label>10</label>
                          </div>
                        </div>
                        <div className='title-1_1-report-detail'>

                        {val.map((row,i)=>{
                          return(
                            <div className="box-inp-title-1_1-report-detail" key={i}>
                                <div className='aabbddcc'>
                                  <span className='num-title-1_1-report-detail'>1.{i+1}</span>
                                  <label className='lbl-string-title-1_1-report-detail'>
                                  ການພະຈົນໄພເກາະມະນຸດເງືອກ{row.title2_name}
                                  </label>
                                </div>
                                <div className='box-score-1_1-report-detail'>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={0}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={1}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={2}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={3}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={4}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={5}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={6}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={7}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={8}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={9}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={i} type="radio"
                                      value={10}
                                    /></label>
                                </div>
                            </div>
                            
                           )
                        })}
                        </div>
                    </div>
                    <div className='total-score-title-1-report-detail'>
                      <label className='lbl-string-total-score-report-detail'>ຄະແນນລວມຫົວຂໍ້:</label>
                      <div className='box-total-score-1-report-detail'>
                        <span className='string-tital-score-1-report-detail'>68</span>
                      </div>
                    </div>
                    <div className="box-title-1-report-detail">
                        <div className='title-1-report-detail'>
                          <div className='aabb'>
                            <label className='lbl-big-title-report-detail'>2.</label>
                            <label className='lbl-string-big-title-report-detail'>ການພະຈົນໄພເກາະແຫ່ງເມືອງທອງຄຳ</label>
                          </div>
                          <div className='box-score-1-report-detail'>
                            <label>0</label><label>1</label><label>2</label><label>3</label><label>4</label>
                            <label>5</label><label>6</label><label>7</label><label>8</label><label>9</label>
                            <label>10</label>
                          </div>
                        </div>
                        <div className='title-1_1-report-detail'>
                        {val.map((row,j)=>{
                          
                          return(
                            <div className="box-inp-title-1_1-report-detail" key={j}>
                                <div className='aabbddcc'>
                                  <span className='num-title-1_1-report-detail'>2.{j+1}</span>
                                  <label className='lbl-string-title-1_1-report-detail'>
                                  ການພະຈົນໄພເກາະມະນຸດເງືອກ{row.title2_name}
                                  </label>
                                </div>
                                <div className='box-score-1_1-report-detail'>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={0}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={1}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={2}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={3}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={4}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={5}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={6}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={7}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={8}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={9}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-report-detail" name={j} type="radio"
                                      value={10}
                                    /></label>
                                </div>
                            </div>
                           )
                        })}
                        </div>
                    </div>
                    <div className='total-score-title-1-report-detail'>
                            <label className='lbl-string-total-score-report-detail'>ຄະແນນລວມຫົວຂໍ້:</label>
                            <div className='box-total-score-1-report-detail'>
                              <span className='string-tital-score-1-report-detail'>68</span>
                            </div>
                          </div>
                          <div className='total-score-title-1-report-detail'>
                            <label className='lbl-string-total-score-report-detail'>ຄະແນນລວມທັງໝົດ:</label>
                            <div className='box-total-score-1-report-detail'>
                              <span className='string-tital-score-1-report-detail'>10%</span>
                            </div>
                          </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default ReportScoreAssDetial;