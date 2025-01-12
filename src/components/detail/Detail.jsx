import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="avatar.png" alt="" />
        <h2>jane doe</h2>
        <p>lorem ipsum dolor sit amet</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>chat settings</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>privay & help</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>shared photos</span>
            <img src="arrowDown.png" alt="" />
          </div>
          <div className="photos"> 
            <div className="photoItem">
            <div className="photoDetail">
              <img 
              src="https://i.imgur.com/fmLAGqR.jpeg"
               alt=""  
               />
              <span>photo_2024_2.png</span>
            </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
            <div className="photoDetail">
              <img 
              src="https://i.imgur.com/fmLAGqR.jpeg"
               alt=""  
               />
              <span>photo_2024_2.png</span>
            </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
            <div className="photoDetail">
              <img 
              src="https://i.imgur.com/fmLAGqR.jpeg"
               alt=""  
               />
              <span>photo_2024_2.png</span>
            </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>shared files</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <button>block user</button>
        <button className="logout">logout</button>
      </div>
    </div>
  );
};

export default Detail;