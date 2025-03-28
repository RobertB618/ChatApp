import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import "./detail.css";
import { useUserStore } from "../../lib/userStore";

const Detail = () => {

  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();

  const { currentUser } = useUserStore();

  const handleBlock = async () => { 
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try{
      await updateDoc(userDocRef,{
        blocked: isReceiverBlocked ? arrayRemove(user?.id) : arrayUnion(user.id)
      })
      changeBlock()
    }catch(err){
      console.log(err)
    }
  };


  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
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
        <button onClick={handleBlock}>{
          isCurrentUserBlocked 
          ? "you are blocked" 
          : isReceiverBlocked 
          ? "user blocked" 
          : "block user"
        }</button>
        <button className="logout" onClick={()=>auth.signOut()}>logout</button>
      </div>
    </div>
  );
};

export default Detail;