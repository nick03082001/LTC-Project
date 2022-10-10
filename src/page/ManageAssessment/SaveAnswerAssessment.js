import React, { useState, useEffect } from "react";
import "../css/SaveAnswerAssessment.css";
import Menubar from "../components/Menubar.js";
import { IoIosSave } from "react-icons/io";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { hidePoweredBy } from "helmet";

function SaveAnswerAssessment() {
  const { state } = useLocation();
  // console.log("state",state?.head_name);

  const [nameAss, setNameAss] = useState([]);
  const [idAss, setIDAss] = useState([]);
  const [val, setVal] = useState([]);
  const [val2, setVal2] = useState([]);
  const [title1, setTitle1] = useState([]);
  const [titleID, setTitleID] = useState([]);
  const [title2, setTitle2] = useState([]);
  const [title2ID, setTitle2ID] = useState([]);

  const HeaderAssGet = () => {
    axios
      .get(
        `https://www.tookcomsci.live/myproject1/header_form_detail?header_name=${state?.head_name}`,
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        // console.log({res})
        setNameAss(res?.data?.form?.head_name);
        setIDAss(res?.data?.form?.head_ID);
        setVal(res?.data?.form?.title[0]?.title2);
        setVal2(res?.data?.form?.title[1]?.title2);
        setTitle1(res?.data?.form?.title[0]?.title1_name);
        setTitleID(res?.data?.form?.title[0]?.title1_ID);
        setTitle2(res?.data?.form?.title[1]?.title1_name);
        setTitle2ID(res?.data?.form?.title[1]?.title1_ID);
      });
  };

  useEffect(() => {
    HeaderAssGet();
  }, [state]);

  //btn save Assesment

  console.log("val",val);
  console.log("val2",val2);

  const [score, setScore] = useState([]);
  const [score2, setScore2] = useState([]);
  const [id1, setId1] = useState([]);
  const [id2, setId2] = useState([]);

  // console.log("score", score);
  // console.log("score2", score2);

  const ScoreOne = (id, scor, i) => {
    const inputIDOne = [...score];
    inputIDOne[i] = {
      title2_id: id,
      score: Number(scor)
    };
    setScore(inputIDOne);
  };

  const ScoreTwo = (id, scor, i) => {
    const inputIDTwo = [...score2];
    inputIDTwo[i] = {
      title2_id: id,
      score: Number(scor)
    };
    setScore2(inputIDTwo);
  };
  // console.log("score1:", score2.title2_ID);

  const SaveAssessment = () => {
    console.log("score", score);
    // console.log("score2", score2);
    var axios = require("axios");
    var data = {
      head_ID: idAss,
      emp_ID: "E01",
      title1: [
        {
          title1_ID: titleID,
          title1_score: 60,
          title2: score
        },
        {
          title1_ID: title2ID,
          title1_score: 40,
          title2: score2
        }
      ]
    };

    console.log({ data });

    var config = {
      method: "POST",
      url: "https://www.tookcomsci.live/myproject1/assessment_form_record",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // if (response.data["status"] === "ok") {
        //   window.location.href = "/assessment/manage";
        // }
      })
      .catch(function (error) {
        //console.log(error);
      });
  };

  function OnClickScore(e) {
    setScore(e.target.value);
  }
  return (
    <div className="box-save-ass">
      <Menubar />
      <div className="bg-save-ass">
        <div className="box-tag-save-ass">
          <div className="box-tag-save-ass">
            <p className="p-man-save-ass">ຫົວຂໍ້:&nbsp;{nameAss}</p>
            <div className="con-save-ass">
              <div className="box-btn-save-save-ass">
                <button
                  className="btn-save-save-ass"
                  onClick={() => SaveAssessment()}
                >
                  <label className="lbl-ic-p-save-ass">
                    <IoIosSave className="ic-btn-save-save-ass" />
                  </label>
                  ບັນທຶກ
                </button>
              </div>
              <div className="box-title-1-save-ass">
                <div className="title-1-save-ass">
                  <div className="aabb">
                    <label className="lbl-big-title-save-ass">1.</label>
                    <label className="lbl-string-big-title-save-ass">
                      {title1}
                    </label>
                  </div>
                  <div className="box-score-1-save-ass">
                    <label>0</label>
                    <label>1</label>
                    <label>2</label>
                    <label>3</label>
                    <label>4</label>
                    <label>5</label>
                    <label>6</label>
                    <label>7</label>
                    <label>8</label>
                    <label>9</label>
                    <label>10</label>
                  </div>
                </div>
                <div className="title-1_1-save-ass">
                  {val &&
                    val.map((row, i) => {
                      return (
                        <div className="box-inp-title-1_1-save-ass" key={i}>
                          <div className="aabbddcc">
                            <span className="num-title-1_1-save-ass">
                              1.{i + 1}
                            </span>
                            <label className="lbl-string-title-1_1-save-ass">
                              {row.title2_name}
                            </label>
                          </div>
                          <div className="box-score-1_1-save-ass">
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={0}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                                // onChange={(e) =>
                                //   btnHandleChange(row.title2_ID, e.target.value, i)
                                // }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={1}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={2}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={3}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={4}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={5}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={6}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={7}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={8}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={9}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={i}
                                type="radio"
                                value={10}
                                onClick={(e) =>
                                  ScoreOne(row.title2_ID, e.target.value, i)
                                }
                              />
                            </label>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="total-score-title-1-save-ass">
                <label className="lbl-string-total-score-save-ass">
                  ຄະແນນລວມຫົວຂໍ້:
                </label>
                <div className="box-total-score-1-save-ass">
                  <span className="string-tital-score-1-save-ass">68</span>
                </div>
              </div>
              <div className="box-title-1-save-ass">
                <div className="title-1-save-ass">
                  <div className="aabb">
                    <label className="lbl-big-title-save-ass">2.</label>
                    <label className="lbl-string-big-title-save-ass">
                      {title2}
                    </label>
                  </div>
                  <div className="box-score-1-save-ass">
                    <label>0</label>
                    <label>1</label>
                    <label>2</label>
                    <label>3</label>
                    <label>4</label>
                    <label>5</label>
                    <label>6</label>
                    <label>7</label>
                    <label>8</label>
                    <label>9</label>
                    <label>10</label>
                  </div>
                </div>
                <div className="title-1_1-save-ass">
                  {val2 &&
                    val2.map((row, j) => {
                      return (
                        <div className="box-inp-title-1_1-save-ass" key={j}>
                          <div className="aabbddcc">
                            <span className="num-title-1_1-save-ass">
                              2.{j + 1}
                            </span>
                            <label className="lbl-string-title-1_1-save-ass">
                              {row?.title2_name}
                            </label>
                          </div>
                          <div className="box-score-1_1-save-ass">
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={0}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={1}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={2}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={3}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={4}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={5}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={6}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={7}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={8}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={9}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                            <label>
                              <input
                                className="inp-radio-score-1_1-save-ass"
                                name={j + 1000}
                                type="radio"
                                value={10}
                                onClick={(e) =>
                                  ScoreTwo(row.title2_ID, e.target.value, j)
                                }
                              />
                            </label>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="total-score-title-1-save-ass">
                <label className="lbl-string-total-score-save-ass">
                  ຄະແນນລວມຫົວຂໍ້:
                </label>
                <div className="box-total-score-1-save-ass">
                  <span className="string-tital-score-1-save-ass">68</span>
                </div>
              </div>
              <div className="total-score-title-1-save-ass">
                <label className="lbl-string-total-score-save-ass">
                  ຄະແນນລວມທັງໝົດ:
                </label>
                <div className="box-total-score-1-save-ass">
                  <span className="string-tital-score-1-save-ass">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveAnswerAssessment;
