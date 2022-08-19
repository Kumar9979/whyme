import React from 'react'
import styles from "../../styles/myproperties/requestCallBack.module.css"

const RequestCallback = () => {
  return (
    <div>
        <div className={`${styles.request_callback_heading} ps-4 mt-4`}>
            <span>Requested Callbacks</span>
        </div>
    </div>
  )
}

export default RequestCallback