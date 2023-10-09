import React from "react";
import Title from "../components/Title";
import {AiFillSmile,AiOutlineHeart,AiOutlineComment} from "react-icons/ai"
export default function RandomizeColors() {

  return (
    <main className="container m-top-2">
      <h1>

        <Title
          classes={"mb-4 title text-center"}
          title={" Like My Photo "}
        />
        <Title
          classes={"mb-4 subtitle text-center"}
          title={" Likes: "}
        />

        <div className="card" style={{width:"300px"}}>
          <p className="text-center text-white" style={{ color:"white" }}> <AiFillSmile className="m-right-2"/> MY PHOTO</p>
          <img src="girl.jpg" alt="girl"  style={{ height:"fit-content" }} />
          <div className="d-flex" style={{ justifyContent:"space-between" }}>
            <AiOutlineComment style={{ color:"white" }}/>
            <AiOutlineHeart style={{ color:"white" }}/>
          </div>
        </div>
      </h1>
    
    </main>
  );
}
