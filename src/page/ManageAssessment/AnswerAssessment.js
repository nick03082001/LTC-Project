import "../css/AnswerAssessment.css";
import Menubar from "../components/Menubar.js";
import { FaSearch } from "react-icons/fa";
import React from "react";

function ManageAssessment() {
    
    return (
        
        <div className="box-modal-manage-ass">
        <div className="box-manage-ass">
            <Menubar />
            <div className="bg-manage-ass">
            <div className="con-search-manage-ass">
                <div className="search-manage-ass">
                <label className="lbl-search">
                    <input
                    className="search-inp-manage-ass"
                    type="text"
                    placeholder="ຄົ້ນຫາ..."
                    ></input>
                    <FaSearch className="filt-ic-manage-ass" />
                </label>
                <button className="btn-search-manage-ass">
                    ຄົ້ນຫາ
                </button>
                </div>
            </div>
            <div className="tb-manage-ass">
                <div className="con-tbl-manage-ass">
                <p className="p-man-manage-ass">
                    ຕອບແບບປະເມີນ
                </p>
                <div className='box-tbl-manage-ass'>
                    <table className="tbl-manage-ass">
                    <thead>
                        <tr>
                            <th>ລໍາດັບ</th>
                            <th>ຊື່ແບບປະເມີນ</th>
                            <th>ວັນທີສ້າງ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tbl-row-no-manage-ass"></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ManageAssessment;