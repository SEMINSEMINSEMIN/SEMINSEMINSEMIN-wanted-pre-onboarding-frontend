import { useState, useEffect } from "react";

export default function Circles() {
    const [circles, setCircles] = useState([]);
    
    useEffect(() => {
        for (let i = 0; i < 8; i++) {
            setCircles((prev) => [
                ...prev,
                <div key={i} className="f_circleG" id={`frotateG_0${i}`}>
                    <div className="f_circleBg" id={`circleBg_0${i}`}></div>
                </div>
            ]);
        }
    }, []);

    return circles;
}
