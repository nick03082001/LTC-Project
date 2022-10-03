import React from "react";
import Menubar from "./components/Menubar.js";
import "./Home.css"
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Footerpage from './components/Footerpage.js'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f3f3f3',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
 
  return (
    <>
      <Menubar />
      <div className="contener-home">
        <div className="box-home">
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Grid xs={12} 
              >
                <Item sx={{fontSize: 'clamp(16px, 2.5vw, 22px)', 
                  color:"black", 
                  fontFamily: 'Noto Serif Lao',
                  fontWeight: '600',
                  height:"130px"}}
                >ຈຳນວນແບບຟອມປະເມີນ
                  <label className="numberic-home"><br />45</label>
                </Item>
              </Grid>
              <Grid xs={12} 
              >
                <Item sx={{fontSize: 'clamp(16px, 2.5vw, 22px)', 
                  color:"black", 
                  fontFamily: 'Noto Serif Lao',
                  fontWeight: '600',
                  height:"130px"}}
                >ພະນັກງານທັງໝົດ
                  <label className="numberic-home"><br />Grap</label>
                </Item>
              </Grid>
              <Grid xs={12} 
              >
                <Item sx={{fontSize: 'clamp(16px, 2.5vw, 22px)', 
                  color:"black", 
                  fontFamily: 'Noto Serif Lao',
                  fontWeight: '600',
                  height:"130px"}}
                >ຈຳນວນພະນັກງານທັງໝົດ 
                  <label className="numberic-home"><br />10255</label>
                </Item>
              </Grid>
            </Grid>
            <Grid xs={6} textAlign='center'>
              <div className="div-in-grid">
                <span className="span-grid-right">ຈຳນວນຄົນຕອບແບບຟອມປະເມີນທັງໝົດ</span>
                <Grid xs={12} textAlign='center'>
                  <Item2 sx={{fontSize: 'clamp(16px, 2.5vw, 22px)', 
                    color:"black", 
                    paddingTop: "20px",
                    paddingBottom: "60px",
                    fontFamily: 'Noto Serif Lao',
                    fontWeight: '600'}}
                  >ຈຳນວນຄົນຕອບແລ້ວ 
                    <label className="numberic-home"><br />255</label>
                  </Item2>
                </Grid>
                <Grid xs={12} textAlign='center'>
                  <Item2 sx={{fontSize: 'clamp(16px, 2.5vw, 22px)', 
                    color:"black", 
                    paddingTop: "20px",
                    fontFamily: 'Noto Serif Lao',
                    fontWeight: '600',
                    height:"140px"}}
                  >ຈຳນວນຍັງບໍ່ຕອບ 
                    <label className="numberic-home"><br />55</label>
                  </Item2>
                </Grid>
              </div>
              
            </Grid>
          </Grid>
        </div>
      </div>
      {/* <Footerpage /> */}
      
    </>
  );
}

export default Home;
