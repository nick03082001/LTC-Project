import React from "react";
const ChangePwd = () =>{
    return(
        <>
        <label className='close-buttom' > X </label>
        <div className="profilepic-box">
            <img src="#" alt="" className='profilepic-img'/>
            <div className="id-em-profile-container">
                <label  className="id-em-profile">E001</label>
                <label  className="name">Peesa</label>
            </div>
        </div>
        <div className="container-label">
            <p className="profile-container">
                <label className="id-profile">ເພດ:</label>
                <span className="id-profile-box"
                    value="bor hu day"
                >
                    
                </span>
            </p>
            <p className="profile-container">
                <label className="id-profile">ພະແນກ:</label>
                <input className="id-profile-box"
                    value="bor hu day"
                >
                    
                </input>
            </p>
            <div className="profile-container">
                <label className="id-profile">ເບີໂທ:</label>
                <input className="id-profile-box"
                    value="bor hu day"
                >
                    
                </input>
            </div>
            <div className="profile-container">
                <label className="id-profile">ບ້ານ:</label>
                <input className="id-profile-box"
                    value="bor hu day"
                >
                    
                </input>
            </div>
            <div className="profile-container">
                <label className="id-profile">ເມືອງ:</label>
                <input className="id-profile-box"
                    value="bor hu day"
                >
                    
                </input>
            </div>
            <div className="profile-container">
                <label className="id-profile">ແຂວງ:</label>
                <input className="id-profile-box"
                    value="bor hu day"
                >
                    
                </input>
            </div>
        </div>
        </>
    )

}

export default ChangePwd