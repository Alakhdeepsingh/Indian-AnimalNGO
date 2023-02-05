import React from "react";

let fixed = {
  minHeight: "85vh",
};
let none = {
  listStyle: "none",
  fontSize: "32px",
  marginTop: "10px",
};
let border = {
  border: "solid 7px #345B63",

  // backgroundImage:
  // "linear-gradient(to right top, #93b5c6, #9fb9ca, #aabdcd, #b4c1d0, #bec6d2, #c4c9d4, #caccd6, #d0cfd8, #d5d1da, #dbd3db, #e0d6db, #e4d8dc)",
  // "linear-gradient(to bottom, #cc66ff 0%, #ff66ff 100%)"
};

export const About = () => {
  return (
    <div style={fixed}>
      <div style={border}>
        <p className="text-center">
          <h3>We are Animal NGO </h3> <br />{" "}
          <h6>
            <ul style={none}>
              <li>
                The fancy jackets that you wear are not worth the life of those
                innocent animals. Quit buying fur and leather, but a ban to it.
                The world is their home as well, save the unsafe. Live and the
                animals live by putting a stop to animal abuse. Love those
                innocent creatures; don’t kill them to wear them. Wear fake fur
                and leather for the sake of the animals. Your fashion is not
                worth a life. When you are looking for a pet, why not adopt an
                animal that is waiting in a shelter for a home rather than
                purchasing them.
              </li>
              <li>
                Saving one animal will not help in changing the world, but
                saving that one animal will change that animal’s world.
              </li>
              <li>
                The scientist has found evidence – through indirect ways as it
                is not possible to observe another creature directly – in favour
                that mammals and birds do see dreams when they are sleeping.
              </li>
              <li>
                Wildlife is the greatest gift that Mother Nature has given us.
                It is our responsibility to take to respect and protect what we
                have been gifted. Many species, one Earth, one opportunity, one
                future.
              </li>
              <li>
                {" "}
                By caging the innocent, you are cruel. Start caging the cruelty,
                not the animals. Treat the speechless with kindness.
              </li>
            </ul>
          </h6>
          <br />
        </p>
      </div>
    </div>
  );
};
