import React from "react";

const LoadingCard = (props) => {
    return (
        <>

            <div className="loader d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center">
                    <img id="loader3" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d6cfe44-5fe9-4aaf-9cde-700622aa927d/dccwm24-630b8838-739d-419f-9c32-68bf84d971ab.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkNmNmZTQ0LTVmZTktNGFhZi05Y2RlLTcwMDYyMmFhOTI3ZFwvZGNjd20yNC02MzBiODgzOC03MzlkLTQxOWYtOWMzMi02OGJmODRkOTcxYWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1mZ-5Fqcrt4-7f3p5jwNBvyoZpVX9aDtUTQKlollHNU" alt="" />
                </div>
                <h1 style={{textAlign:'Center'}}>Loading</h1>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </>
    )
}


export default LoadingCard
