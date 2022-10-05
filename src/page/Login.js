import { React, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./css/Login.css";
import Menubar from "../page/components/Menubar.js"

function Login() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [userdata,setUserdate] = useState();
  console.log("Yai",userdata)
  const [openModal, setOpenModal] = useState(false);

  const [inputs, setInputs] = useState({});
  const handChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

<<<<<<< HEAD

=======
  const [data, setData] = useState()
  // console.log("yai",data)
>>>>>>> face-detection

  const handSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: inputs.username,
      password: inputs.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://www.tookcomsci.live/myproject1/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
<<<<<<< HEAD
        console.log("hhhhhhh",result?.user)
        setUserdate(result?.user);
        localStorage.setItem("userdata",JSON.stringify(result?.user))
        localStorage.setItem("password",inputs?.password)
        // console.log(result);
=======
        // console.log(result);
        setData(result?.user);
        // console.log(result?.user);
        
>>>>>>> face-detection
        if (result?.status === "ok") {
          MySwal.fire({
            html: <i>{result?.message}</i>,
            icon: "success",
          }).then((value) => {
            console.log(result?.token);
            sessionStorage.setItem("token", result.token);
            navigate("/home");
          });
        } else {
          MySwal.fire({
            html: <i>{result?.message}</i>,
            icon: "error",
          });
        }
      })
      .catch((error) => console.log("error", error));

    console.log(inputs);
  };

  return (
    <div className="background-login">
      <header>
        <title>Login-200</title>
      </header>
      <form onSubmit={handSubmit}>
        <div className="box-login">
          <h1 className="h1">ຍິນດີຕອນຮັບທ່ານເຂົ້າສູ່ລະບົບ</h1>
          <p className="lbl-username">
            <FaUser className="icon-img" />
            ຊື່ຜູ້ໃຊ້
            <label className="dao">*</label>
          </p>
          <p className="lbl-text-username">
            <input
              className="text-username"
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handChange}
              placeholder="ປ້ອນຊື່ຜູ້ໃຊ້ຂອງທ່ານ..."
              required
            ></input>
          </p>
          <p className="lbl-password">
            <FaLock className="icon-img" />
            ລະຫັດຜ່ານ
            <label className="dao">*</label>
          </p>
          <p className="lbl-text-password">
            <input
              className="text-password"
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handChange}
              placeholder="ປ້ອນລະຫັດຜ່ານຂອງທ່ານ..."
              required
            ></input>
          </p>
          <p className="lbl-btn-login">
            <button className="btn-login" type="submit" >
              ເຂົ້າສູ່ລະບົບ
            </button>
            {/* {openModal && <Menubar data={userdata} />} */}
          </p>
        </div>
      </form>
  
    </div>
  );
}

export default Login;
