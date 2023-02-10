import { useState } from "react";
import Heart from "../images/heart.svg";

function ProfileCard({ title, handle, image }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick} className={"inline-block mx-5 mt-5"}>
      <div className="px-32 h-80 py-10 shadow-md lg:max-w-lg justify-center">
        <div className="space-y-0">
          <p className="text-gray-40 text-sm pb-0">Pokémon Name</p>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-60 pb-5 pt-2">Type: {handle}</p>
          <img
            src={image}
            height={150}
            width={150}
            alt="Pokemon"
            className={"flex mx-auto"}
          ></img>
        </div>
      </div>
      <div
        className={
          "rounded-b-lg shadow-md w-full max-w-full bg-pink-200 py-6 flex flex-wrap items-center justify-center"
        }
      >
        <img
          alt="heart"
          src={Heart}
          style={{ width: 50 + 10 * clicks + "px" }}
          className={"absolute"}
        />
      </div>
    </div>
  );
}

export default ProfileCard;
