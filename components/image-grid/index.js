import React from "react";
import Image from "next/image";
import styles from "../../styles/propertydetails/imagegrid.module.css"
import proptertyimagegrid2 from "../../assets/images/proptertyimagegrid2.png";
import proptertyimagegrid1 from "../../assets/images/proptertyimagegrid1.png";
import proptertyimagegrid3 from "../../assets/images/proptertyimagegrid3.png";
import proptertyimagegrid4 from "../../assets/images/proptertyimagegrid4.png";
import proptertyimagegrid5 from "../../assets/images/proptertyimagegrid5.png";
import proptertyimagegrid6 from "../../assets/images/proptertyimagegrid6.png";

const ImageGrid = () => {
  return (
    <div>
      <div className={`row mt-5 mt-lg-2 d-flex justify-content-center`}>
        <div className={`col-6 p-1`}>
          <div className="pb-1">
          <Image
            src={proptertyimagegrid2}
            alt="Picture of the author"
            width={500}
            height={350}
          />
          </div>

          <div className={`row`}>
            <div className={`col-6 pt-1 pe-1`}>
              <Image
                src={proptertyimagegrid4}
                alt="Picture of the author"
                width={250}
                height={300}
              />
            </div>
            <div className={`col-6 pt-1 ps-1`}>
              <Image
                src={proptertyimagegrid5}
                alt="Picture of the author"
                width={250}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className={`col-6 p-1`}>
          <div className={`row`}>
            <div className={`col-6 pb-1 pe-1`}>
              <Image
                src={proptertyimagegrid1}
                alt="Picture of the author"
                width={250}
                height={300}
              />
            </div>
            <div className={`col-6 pb-1 ps-1 position-relative`}>
              <Image
                src={proptertyimagegrid6}
                alt="Picture of the author"
                width={250}
                height={300}
              />
              <div className={`${styles.seemore_button} position-absolute px-3 py-2`}>
              <div className={`${styles.seemore_text} `}>See More</div>
              </div>
             
              
            </div>
          </div>
          <div className="pt-1">
          <Image
            src={proptertyimagegrid3}
            alt="Picture of the author"
            width={500}
            height={350}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
