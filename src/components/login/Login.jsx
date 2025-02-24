import { useState } from "react"
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

const Login = () => {

  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  })

  const handleAvatar = (e) => { 
    if(e.target.files[0].size){
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    })
  }
}

const handleRegister = async (e) => {
  e.preventDefault()
  const formData = new FormData(e.target);

  const {username, email, password } = Object.fromEntries(formData);

  try{

    const res = await createUserWithEmailAndPassword(auth, email, password);

    const imgUrl = await upload(avatar.file);

    await setDoc(doc(db , "users", res.user.uid), {
      username,
      email,
      id: res.user.uid,
      blocked: [],
    });

    await setDoc(doc(db , "userchat", res.user.uid), {
      chats: [],
    });

    toast.success("Account created, you can login now")
  }catch(error){
    console.log(error)
    toast.error("Invalid credentials")
  }

}

const handleLogin = (e) => {
  e.preventDefault()
}

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button>sign in</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
      <h2>Create an account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
           <img src={avatar.url || "./avatar.png"} alt=""/>
          Upload an image</label>
          <input type="file" id="file"  style={{display: 'none'}}  onChange={handleAvatar} />
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button>sign up</button>
        </form>
      </div>
      </div>    
  )
}


export default Login
