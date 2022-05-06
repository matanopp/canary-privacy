import './Overview.css'
import OverviewTile from './OverviewTile.js';
import pageImage from './images/page.svg';
import scriptImage from './images/script.svg';
import formImage from './images/form.svg';
import cookieImage from './images/cookie.svg';

function Overview(props) {
    return (
        <div className="overview-container">
            <OverviewTile data={props.pages} total={props.pagesTotal} img={pageImage} message={"New pages"} linkTo="/pages" />
            <OverviewTile data={props.scripts} total={props.scriptsTotal} img={scriptImage} message={"New scripts"} linkTo="/scripts" />
            <OverviewTile data={props.forms} total={props.formsTotal} img={formImage} message={"New forms"} linkTo="/forms" />
            <OverviewTile data={props.cookies} total={props.cookiesTotal} img={cookieImage} message={"New cookies"} linkTo="/allCookies" />
        </div>
    );
}

export default Overview;