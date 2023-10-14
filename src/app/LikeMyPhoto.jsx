import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import girl from "../girl.jpg";
export default function RandomizeColors() {
  const [like, setlike] = useState(false);
  const [count, setcount] = useState(0);
  const toggleLike = () => {
    if (!like) {
      setlike(true);
      setcount(count + 1);
    } else {
      setlike(false);
      setcount(count - 1);
    }
  };
  return (
    <main className="container m-top-2 " style={{ textAlign: "center" }}>
      <h1>
        {/* titel component */}
        <Title classes={"mb-4 title text-center"} title={" Like My Photo "} />
        <Title classes={"mb-4 subtitle text-center"} title={`LIKE:${count}`} />
        {/* card tages */}
        <div className="card" style={{ width: "300px", cursor: "pointer" }}>
          <p className="text-center text-white" style={{ color: "white" }}>
            {" "}
            {/* react icons */}
            <AiFillSmile className="m-right-2" /> MY PHOTO
          </p>
          {/* img src */}
          <img src={girl} alt="girl" width={300} />
          {/* card footer */}
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <AiOutlineComment style={{ color: "white", padding: "1rem" }} />
            {/* like uniry operator */}
            {like ? (
              <AiFillHeart
                onClick={toggleLike}
                style={{ color: "red", padding: "1rem" }}
              />
            ) : (
              <AiOutlineHeart
                onClick={toggleLike}
                style={{ color: "white", padding: "1rem" }}
              />
            )}
          </div>
        </div>
      </h1>
    </main>
  );
}
