import React from 'react'

const LoremText = () => {
  return (
    <div
      className={`${styles.LoremIpsum}  d-flex flex-column align-items-between p-4 mt-4 position-relative`}
    >
  
        <div className={`${styles.lorem_title} py-3`}>Lorem ipsum</div>
        <div className={`${styles.lorem_heading} py-2`}>Lorem ipsum</div>
     
      <button className={`${styles.lorem_button} w-75 p-0 mt-4 d-flex justify-content-start `}>
        Click Here
      </button>
      <div className={`position-absolute ${styles.image_position}`}>
        <Image
          src={pointing}
          alt="Picture of the author"
          width={90}
        />
      </div>
    </div>
  )
}

export default LoremText