import "../css/SelectAnswerAssessment.css";
import Menubar from "../components/Menubar.js";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import Data from "./DataYai.json"


function SelectAnswerAssessment() {
    
    const [contacts, setContacts] = useState(Data);
    

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
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((row)=>(
                            <tr key={row.id}
                                onClick={()=>alert( row.id)}
                            >
                            <td className="tbl-row-no-select-ass"></td>
                            <td>{row.fullName}</td>
                            <td>{row.address}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SelectAnswerAssessment;