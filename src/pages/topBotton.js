import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/topBotton.css';
import { useState } from "react";
import { useEffect } from "react";
function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",

        })
    }

    return (
        <div>
            {backToTopButton && (
                <button className="btn-top" onClick={scrollUp}>
                    ^
                </button>
            )}

        </div>
    )
}
export default BackToTopButton;