// stylesheet
import "./Organizations.scss";
import "../../styles/global.scss";

// components
import Search from "../../components/Search/Search";

export default function Organizations() {
    return (
        <>
            <div className="organization">
                <h1>ORGANIZATIONS</h1>
                <div className="organization__search">
                    <Search />
                </div>
                <div className="organization__container">
                    <h3>Organization Title</h3>

                </div>
            </div>
        </>
    );
};