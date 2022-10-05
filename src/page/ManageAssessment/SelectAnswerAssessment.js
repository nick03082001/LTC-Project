import "../css/SelectAnswerAssessment.css";
import Menubar from "../components/Menubar.js";
import { FaSearch, FaFileSignature } from "react-icons/fa";
import React, { useState, useEffect } from 'react'
import Data from "./DataYai.json"
import SaveAnswerAssessment from "./SaveAnswerAssessment.js";
import axios from "axios";


function SelectAnswerAssessment() {
    
    const [contacts, setContacts] = useState(Data);
    const [val,setVal]=useState([]);

    const HeaderAssGet = () => {
        axios.get("https://tookcomsci.live/test/myproject1/header_form")
        .then((result) => {
            // console.log(result.data.form)
            setVal(result.data.form);
          });
          
      };

    useEffect(() => {
        HeaderAssGet();
    }, []);



    
    // const [selectTitle, setSelectTitle] = useState("");
    // const getTitle = (e) => {
    //     console.log("My DATA : " ,e);
    //     setSelectTitle(e);
    //   }

    return (
        
        <div className="box-select-ass">
            <Menubar />
            <div className="bg-select-ass">
            <div className="con-search-select-ass">
                <div className="search-select-ass">
                <label className="lbl-search">
                    <input
                    className="search-inp-select-ass"
                    type="text"
                    placeholder="ຄົ້ນຫາ..."
                    ></input>
                    <FaSearch className="filt-ic-select-ass" />
                </label>
                <button className="btn-search-select-ass">
                    ຄົ້ນຫາ
                </button>
                </div>
            </div>
            <div className="tb-select-ass">
                <div className="con-tbl-select-ass">
                <p className="p-man-select-ass">
                    ເລືອກຕອບແບບປະເມີນ
                </p>
                <div className='box-tbl-select-ass'>
                    <table className="tbl-select-ass">
                    <thead>
                        <tr>
                            <th>ລໍາດັບ</th>
                            <th>ຊື່ແບບປະເມີນ</th>
                            <th>ວັນທີສ້າງ</th>
                            <th>ກຳນົດສົ່ງ</th>
                            <th>ຕອບ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {contacts.map((row,i)=>(
                            <tr key={i}
                            >
                            <td className="tbl-row-no-select-ass"></td>
                            <td>{row.fullName}</td>
                            <td>{row.address}</td>
                            <td>{row.id}</td>
                            <td>
                            <button
                              onClick={() => {
                                // getTitle(row); 
                                alert( row.id)
                              }}
                              className="btnnn"
                            >
                              <label>
                                <FaFileSignature className="up-em" />
                              </label>
                            </button>
                            </td>
                        </tr>
                        ))} */}

                        {val?.map((row,j)=>(
                            <tr key={j}
                            >
                            <td className="tbl-row-no-select-ass"></td>
                            <td>{row.head_name}</td>
                            <td>{row.date_create}</td>
                            <td>{row.head_ID}</td>
                            <td>
                            <button
                              onClick={() => {
                                // getTitle(row); 
                                alert( row.head_ID)
                              }}
                              className="btnnn"
                            >
                              <label>
                                <FaFileSignature className="up-em" />
                              </label>
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
            {/* <SaveAnswerAssessment dataTitle={selectTitle} /> */}
        </div>
    );
}

export default SelectAnswerAssessment;