import { Link } from "react-router-dom";
import btn from '../../Images/btn1.png';
import btnaiml from '../../Images/btn-aiml.png';
import btnit from '../../Images/btn-it.png';
import btnaids from '../../Images/btn-aids.png';





function Notes() {
    return (
        <>
            <h2 className="pl-0 md:pl-20 text-2xl font-bold">2019 Pattern</h2>
            <div className="branch-grid1">

                <Link
                    to="/SPPU/2019-Pattern/AIDS/"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                        className="button-card"
                    >
                       <img src={btnaids} className="w-20" alt="AI&DS" />
                        <h4>Artificial Intelligence &amp; Data Science</h4>
                    </div>
                </Link>

                <Link
                    to="/SPPU/2019-Pattern/CS/"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                        className="button-card"
                    >
                        <img src={btnit} className="w-20" alt="CS"/>
                        <h4>Computer Science</h4>
                    </div>
                </Link>
                <Link
                    to="/SPPU/2019-Pattern/IT"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                        className="button-card"
                    >
                        <img src={btnaiml} className="w-20" alt="IT"/>
                        <h4>Information Technology</h4>
                    </div>
                </Link>
                <Link
                    to="/SPPU/2019-Pattern/AIML/"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                        className="button-card"
                    >
                        <img src={btn} className="w-20" alt="AI&ML"/>
                        <h4>AI &amp; ML</h4>
                    </div>
                </Link>
            </div>
            <br />
            <br />
            <h2 className="pl-0 md:pl-20 text-2xl font-bold">2024 Pattern</h2>
            <div className="branch-grid1 mb-20 md:mb-0">
               <a
                    href="/SPPU/2024-Pattern/FE"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                        className="button-card"
                    >
                        <img src={btnaids} className="w-20" alt="AI&DS" />
                        <h4>First Year</h4>
                    </div>
                </a>
                <a
                    href="/coming-soon/"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        style={{ backgroundColor: "transparent" }}
                        className="button-card"
                    >
                        <img src={btnaids} className="w-20" alt="AI&DS" />
                        <h4>Artificial Intelligence &amp; Data Science</h4>
                    </div>
                </a>
                <a
                    href="/coming-soon/"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        style={{ backgroundColor: "transparent" }}
                        className="button-card"
                    >
                        <img src={btnit} className="w-20" alt="CS"/>
                        <h4>Computer Science</h4>
                    </div>
                </a>
                <a
                    href="/coming-soon/"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        style={{ backgroundColor: "transparent" }}
                        className="button-card"
                    >
                        <img src={btnaiml} className="w-20" alt="IT"/>
                        <h4>Information Technology</h4>
                    </div>
                </a>
                <a
                    href="/coming-soon/"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div
                        style={{ backgroundColor: "transparent" }}
                        className="button-card"
                    >
                        <img src={btn} className="w-20" alt="AI&ML"/>
                        <h4>Artificial Intellignence and Machine Learning</h4>
                    </div>
                </a>
            </div>
        </>

    );
}

export default Notes;