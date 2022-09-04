import React from "react";
import ProfileLayout from "../../components/sidebarLayout/Sidebar";

const AddAProperty = () => {
  const n = 200;
  return (
    <ProfileLayout>
      <div>
        {Array(n)
          .fill("akash","singh")
          .map((_, index) => {
            return <p key={index}>{_}</p>;
          })}
      </div>
    </ProfileLayout>
  );
};

export default AddAProperty;
// const n = 200;
//  <div>
// {Array(n)
//   .fill("akash","singh")
//   .map((_, index) => {
//     return <p key={index}>{_}</p>;
//   })}
// </div> 
