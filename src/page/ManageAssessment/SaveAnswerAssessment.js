import React, { useState, useEffect } from 'react'
import "../css/SaveAnswerAssessment.css";
import Menubar from "../components/Menubar.js";
import { IoIosSave } from "react-icons/io";
import axios from "axios";
import {useLocation} from "react-router-dom"

function SaveAnswerAssessment() {

  const {state} = useLocation();
  // console.log("state",state?.head_name);


    const [val,setVal]=useState([]);
    // console.log("yai",val?.title[0]?.title1_name)
    // console.log("title",val)
    const [title1, setTitle1]=useState([]);
    const [title2, setTitle2]=useState([]);
    console.log("title",title1);
    console.log("title",title2);

    const btnHandleChange=(onChangeValueTitleOne,i)=>{
        const inputDataTitleOne=[...val]
        inputDataTitleOne[i]=onChangeValueTitleOne.target.value;
        setVal(inputDataTitleOne)
    }


    const HeaderAssGet = () => {
      axios.get(`https://www.tookcomsci.live/myproject1/header_form_detail?header_name=${state?.head_name}`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
    .then((res) => {
      
      console.log({res})
      setVal(res?.data?.form);
      setTitle1(res?.data?.form?.title[0]?.title1_name);
      setTitle2(res?.data?.form?.title[1]?.title1_name);
    });
    };

  useEffect(() => {

    HeaderAssGet()
  }, [state]);
    
    

  return (
        <div className="box-save-ass">
            <Menubar />
            <div className="bg-save-ass">
              <div className='box-tag-save-ass'>
              <div className="box-tag-save-ass">
                  <p className="p-man-save-ass">
                    ຫົວຂໍ້:&nbsp;{state.head_name}
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
                          <div className='aabb'>
                            <label className='lbl-big-title-save-ass'>1.</label>
                            <label className='lbl-string-big-title-save-ass'>
                              {title1}
                              </label>
                          </div>
                          <div className='box-score-1-save-ass'>
                            <label>0</label><label>1</label><label>2</label><label>3</label><label>4</label>
                            <label>5</label><label>6</label><label>7</label><label>8</label><label>9</label>
                            <label>10</label>
                          </div>
                        </div>
                        <div className='title-1_1-save-ass'>
                        {/* <div className="box-inp-title-1_1-save-ass" key={1}>
                                <div className='aabbddcc'>
                                  <span className='num-title-1_1-save-ass'>1.{1+1}</span>
                                  <label className='lbl-string-title-1_1-save-ass'>
                                  ການພະຈົນໄພເກາະມະນຸດເງືອກ
                                  </label>
                                </div>
                                <div className='box-score-1_1-save-ass'>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={1} type="radio"
                                      value={0}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={2} type="radio"
                                      value={1}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={3} type="radio"
                                      value={2}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={4} type="radio"
                                      value={3}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={5} type="radio"
                                      value={4}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={6} type="radio"
                                      value={5}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={7} type="radio"
                                      value={6}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={8} type="radio"
                                      value={7}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={9} type="radio"
                                      value={8}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={10} type="radio"
                                      value={9}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={11} type="radio"
                                      value={10}
                                    /></label>
                                </div>
                        </div> */}




                        {val?.title?.length >0 && val?.title[0]?.title2?.map((row,i)=>{
                          
                          return(
                            <div className="box-inp-title-1_1-save-ass" key={i}>
                                <div className='aabbddcc'>
                                  <span className='num-title-1_1-save-ass'>1.{i+1}</span>
                                  <label className='lbl-string-title-1_1-save-ass'>
                                  {row.title2_name}
                                  </label>
                                </div>
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
                        </div>
                    </div>
                    <div className='total-score-title-1-save-ass'>
                      <label className='lbl-string-total-score-save-ass'>ຄະແນນລວມຫົວຂໍ້:</label>
                      <div className='box-total-score-1-save-ass'>
                        <span className='string-tital-score-1-save-ass'>68</span>
                      </div>
                    </div>
                    <div className="box-title-1-save-ass">
                        <div className='title-1-save-ass'>
                          <div className='aabb'>
                            <label className='lbl-big-title-save-ass'>2.</label>
                            <label className='lbl-string-big-title-save-ass'>
                              {title2}
                              </label>
                          </div>
                          <div className='box-score-1-save-ass'>
                            <label>0</label><label>1</label><label>2</label><label>3</label><label>4</label>
                            <label>5</label><label>6</label><label>7</label><label>8</label><label>9</label>
                            <label>10</label>
                          </div>
                        </div>
                        <div className='title-1_1-save-ass'>
                        {val?.title?.length >1 && val?.title[1]?.title2?.map((row,j)=>{
                          
                          return(
                            <div className="box-inp-title-1_1-save-ass" key={j}>
                                <div className='aabbddcc'>
                                  <span className='num-title-1_1-save-ass'>2.{j+1}</span>
                                  <label className='lbl-string-title-1_1-save-ass'>
                                  {row?.title2_name}
                                  </label>
                                </div>
                                <div className='box-score-1_1-save-ass'>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={0}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={1}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={2}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={3}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={4}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={5}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={6}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={7}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={8}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={9}
                                    /></label>
                                    <label><input className="inp-radio-score-1_1-save-ass" name={j+1000} type="radio"
                                      value={10}
                                    /></label>
                                </div>
                            </div>
                           )
                        })}
                        </div>
                    </div>
                    <div className='total-score-title-1-save-ass'>
                            <label className='lbl-string-total-score-save-ass'>ຄະແນນລວມຫົວຂໍ້:</label>
                            <div className='box-total-score-1-save-ass'>
                              <span className='string-tital-score-1-save-ass'>68</span>
                            </div>
                          </div>
                          <div className='total-score-title-1-save-ass'>
                            <label className='lbl-string-total-score-save-ass'>ຄະແນນລວມທັງໝົດ:</label>
                            <div className='box-total-score-1-save-ass'>
                              <span className='string-tital-score-1-save-ass'>10%</span>
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