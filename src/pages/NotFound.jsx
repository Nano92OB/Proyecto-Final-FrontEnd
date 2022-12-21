import React from "react";
import styles from './cssModules/NotFound.module.css'
import { Link } from "react-router-dom";

const NotFound = ()=>{
    return(
        <div className={styles.notFoundContainer}>
            <Link to={'/'}>
                <div className={styles.navbar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="30"
                        fill="#666666"
                        viewBox="0 0 10 16"
                    >
                    <path
                        fill="#666666"
                        d="m9.017 11.108-.252-.252a.429.429 0 0 0-.606 0l-2.98 2.997V.43A.429.429 0 0 0 4.75 0h-.357a.429.429 0 0 0-.429.429v13.424l-2.98-2.997a.429.429 0 0 0-.606 0l-.252.252a.429.429 0 0 0 0 .606l4.142 4.16a.429.429 0 0 0 .607 0l4.142-4.16a.429.429 0 0 0 0-.606Z"
                    />
                    </svg>
                </div>
            </Link>
            <div>
                <h1>404</h1>
                <h1>PAGE NOT FOUND</h1>
                <div className={styles.sadPikachu}>
                    <img src="./Sprites/Icons/notFound.png" alt="sadPikachu" className={styles.sadImg}/>
                </div>
            </div>
        </div>
    )
}

export default NotFound;