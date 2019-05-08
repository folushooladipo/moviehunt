import * as React from "react"

export default function NotFoundContainer() {
    const goBack = (event) => {
        event.preventDefault()
        window.history.back()
    }
    const image404 =
        "https://res.cloudinary.com/worldgeek/image/upload/v1493668469/404-page-not-found.jpg"

    return (
        <div>
            <div>
                <br/>
                <button
                    onClick={ goBack }
                >
                    Go Back
                </button>
                <br/>
                <img
                    alt="Page not found. Please go back."
                    src={ image404 }
                />
            </div>
        </div>
    )
}
