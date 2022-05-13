import React, { useEffect } from 'react'

export default function SuccessLogin() {
    useEffect(() => {
        window.opener.open("http://localhost:3000/", "_self")
        window.opener.focus();
        window.close();
    }, [])

    return (
        <p>Login successfull</p>
    )
}
