import React from "react";
import Logo from "../asset/img.png";
import { Button, TextField } from "@mui/material";
import "./Signin.css";
import facebook from "../asset/face.png";
import github from "../asset/git.png";
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../Firebase/setup";

const Signin = () => {
  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const facebookSignin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const githubSignin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(auth)
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img
          src={Logo}
          style={{ width: "50px", height: "50px", marginTop: "40px" }}
        />
        <h1 style={{ marginTop: "100px" }}>Bir hesap oluşturun</h1>
        <h4 style={{ fontWeight: "400", textAlign: "center" }}>
          Kayıt için google doğrulamasının gerekebileceğini <br /> unutmayın.
          Google hesabınız yalnızca güvenlik amacıyla <br /> kimliğinizi
          doğrulamak için kullanılacaktır
        </h4>
        <TextField
          sx={{ width: "250px" }}
          variant="outlined"
          label="Kullanıcı Adı"
        />
        <br />
        <Button
          onClick={googleSignin}
          variant="contained"
          sx={{
            width: "250px",
            marginTop: "1vw",
            backgroundColor: "#21A67E",
            height: "50px",
          }}
        >
          Giriş Yap
        </Button>
        <h5
          style={{
            fontWeight: "400",
          }}
        >
          Google hesabıyla giriş yapın
        </h5>
      </div>
      <h4 className="or">Veya</h4>
      <div style={{ textAlign: "center" }}>
        <Button
          onChange={githubSignin}
          sx={{
            color: "gray",
            border: "1px solid gray",
            padding: "1vw",
            width: "25vw",
          }}
        >
          <img src={github} style={{ width: "50px", height: "50px" }} />
          Github hesabı ile devam et
        </Button>
      </div>
      <div style={{ textAlign: "center", marginTop: "1vw" }}>
        <Button
          onChange={facebookSignin}
          sx={{
            color: "gray",
            border: "1px solid gray",
            padding: "1vw",
            width: "25vw",
          }}
        >
          <img src={facebook} style={{ width: "50px", height: "50px" }} />
          Facebook hesabı ile devam et
        </Button>
      </div>
      <h4 style={{ fontWeight: "500", textAlign: "center", color: "#077857" }}>
        Kullanım koşulları | Gizlilik Politikası
      </h4>
    </>
  );
};

export default Signin;
