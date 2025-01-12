import "./login.css"

const Login = () => {
  return (
    <div className="login">
      <div className="item">
        <h2>welcomeback,</h2>
        <form>
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button>login</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
      <h2>create an account</h2>
        <form>
          <label htmlFor="file">upload an image</label>
          <input type="file" id="file"  style={{display: 'none'}} />
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <button>login</button>
        </form>
      </div>
      </div>    
  )
}


export default Login
