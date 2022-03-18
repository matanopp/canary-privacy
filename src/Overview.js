import './Overview.css'
import OverviewTile from './OverviewTile.js';
import pageImage from './images/page.svg';
import scriptImage from './images/script.svg';
import formImage from './images/form.svg';

function Overview(props) {
    return (
        <div className="overview-container">
            <OverviewTile data={props.pages} total={props.pagesTotal} img={pageImage} message={"New pages last week"} linkTo="/pages" />
            <OverviewTile data={props.scripts} total={props.scriptsTotal} img={scriptImage} message={"New scripts last week"} linkTo="/scripts" />
            <OverviewTile data={props.forms} total={props.formsTotal} img={formImage} message={"New forms last week"} linkTo="/forms" />

        </div>
    );
}

export default Overview;