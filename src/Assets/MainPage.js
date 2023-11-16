
import GoogleLogoBottom from '../images/google-logo-bottom.JPG';
// import GearIcon from '../images/settings-icon.png';
// import Dots from '../images/dots-menu-icon.png';
import LB from '../images/Luke-Bryan.jpeg';
import ReadingImage from '../images/reading.jpg';
import RunnerImage from '../images/male-running.jpg';
import ClimberImage from '../images/climbing.jpg';
import Result from './Result';
import { getStoredResults } from './Search';

// const MainPage = ({runSearch}) => {
function MainPage() {
    
    let searchResults = getStoredResults();

    // const runSearch = () => {
    //     if (searchResults) {
    //         searchResults = search(resultsData, 'Daytona');
    //     }
    // }

    return <div id="center-page">
    <div id="main-content">
        <h6>About 23 years of results (0.56 seconds)</h6>

        {searchResults.map((result) => (
            <Result key={'result-' + result.id} resultsJson={result}/>
        ))}       
        {/* <div className="search-result">
            <p className="search-result-location">Global Observatory on Pollution and Health<span> {'>'} Chestnut Hill, MA</span></p>
            <a href="https://bc.edu/masscleanair"><h2>Researcher and Web Developer</h2></a>
            <p className="search-result-content"><span>May 2022 —</span> 
                <strong>Analyzed Massachusetts town-based data</strong> for air pollution health outcomes...
                <strong>Wrote</strong> sections of the published paper... Creating a website for the project using 
                <strong>Adobe Experience Manager, R Shiny, html, css, and JavaScript</strong>...
            </p>
            <ul className="search-result-see-also">
                <li><a href="https://www.google.com/search?q=web+development">Web Development</a></li>
                <li><a href="https://www.google.com/search?q=AEM">AEM</a></li>
                <li><a href="https://www.google.com/search?q=User-Centered+Design">User-Centered Design</a></li>
                <li><a href="https://www.google.com/search?q=photoshop">Photoshop</a></li> */}
                {/* <!-- <li>AEM</li>
                <li>User-centered design</li>
                <li>Interactive data visulaization</li>
                <li>Photoshop</li> --> */}
            {/* </ul>
        </div> */}

        {/* <div className="search-result">
            <p className="search-result-location">Online<span> {'>'} Asynchronus</span></p>
            <a href="https://www.freemote.com/"><h2>Freemote Bootcamp</h2></a>
            <p className="search-result-content"><span>March 2022 —</span> 
                Began an asynchronus bootcamp to improve <strong> JavaScript</strong> and strengthen <strong>HTML and CSS</strong>...
                doing <strong>projects</strong> and starting <strong>freelancing</strong> on Upwork...
            </p>
        </div>

        <div className="search-result">
            <p className="search-result-location">Boston College<span> {'>'} Chestnut Hill, MA</span></p>
            <a href="https://bc.edu"><h2>Education - Mathematics Major</h2></a>
            <p className="search-result-content"><span>Dec 2021 —</span> 
                B.A. in <strong>Mathematics</strong> & minor in <strong>Global Public Health</strong>...
            </p>
            <div className="additional-details">
                <p className="additional-details-left">
                    <a href="https://www.bc.edu/bc-web/schools/mcas/undergraduate/advising/academic-policies.html"><strong>Deans List</strong> First Honors<br></br></a>
                    <a href="https://www.bc.edu/bc-web/offices/student-affairs/sites/ugbc.html"><strong>Undergraduate Government</strong> COVID-19 Specialist<br></br></a>
                    <a href="https://www.youtube.com/watch?v=PUOqgUyMplw">Full Swing Dance <strong>Captain</strong></a>
                </p>
                <p className="additional-details-right">
                    5 results <br></br>
                    1 year <br></br>
                    3 results <br></br>
                </p>
                <p className="additional-details-right">
                    2018-2021 <br></br>
                    2020-2021 <br></br>
                    2020-2021 <br></br>
                </p>
            </div>
        </div>

        <div className="search-result">
            <p className="search-result-location">C-Change<span> {'>'} Chan School of Public Health {'>'} Harvard University</span></p>
            <a href="https://github.com/lukebryan123/TRECH_CountyMapTool"><h2>Intern and R Developer</h2></a>
            <p className="search-result-content"><span>October 2021 —</span> 
                Used GIS mappiing in <strong>ArcGIS and R</strong> to visualize projected health outcomes in 14 states...
                <strong>interactive</strong> Shiny application for <strong>presenting data</strong> to stakeholders and the public...
                including lots of <strong>logic and data transformation</strong>.
                
            </p>
            <ul className="search-result-see-also">
                <li>R</li>
                <li>Data Visualization</li>
                <li>Policy Change</li>
                <li>Interactive</li>
                <li>Acessibility</li> 
            </ul>
        </div>

        <div className="search-result">
            <p className="search-result-location">Homeless Services Bureau<span> {'>'} Boston Public Health Commission {'>'} Boston, MA</span></p>
            <a href="https://www.boston.gov/government/cabinets/boston-public-health-commission/homeless-services"><h2>Data Analysis Intern, Policy Associate, and Counselor</h2></a>
            <p className="search-result-content"><span>Oct 2021 —</span> 
                Performed a series of<strong> equity analyses</strong> on shelter restriction data using <strong>SAS</strong>...
                began <strong>tracking</strong> isolation and quarantine housing for covid...
            </p>
        </div>

        <div className="search-result">
            <p className="search-result-location">Dayton Beverages<span> {'>'} Anheuser-Busch Companies LLC {'>'} Daytona Beach, FL</span></p>
            <a href="https://www.daytonabud.com/"><h2>Accounting Intern</h2></a>
            <p className="search-result-content"><span>August 2019 —</span> 
                <strong>Rolled out</strong> a new online ordering <strong>software</strong> and
                created <strong>six programs</strong> to automate product setup...
                also <strong>organized</strong> a tax audit and did pivot table reports... 

            </p>
        </div> */}

        
        {/* <!-- <div id="related-searches">
            <h3>Related Searches</h3>
            <div id="related-searches-links">
                <p className="related-option"></p>
                <p className="related-option"></p>
                <p className="related-option"></p>
                <p className="related-option"></p>
            </div>
        </div> --> */}

        <img id="google-bottom-logo" src={GoogleLogoBottom} alt="google bottom logo"></img>
    </div>

    <div id="side-content">
        <h3>About</h3>
        <div id="side-content-picture-text">
            <img src={LB} alt="Luke Bryan"></img>
            <p>Luke Bryan is a young professional interested in finding the intersections between data science and public health. He has previously traversed this path from an epidemiological point of view, as he studied biology and statistics while working with city and research epidemiologists. Most recently, Luke has started shifting paths towards software engineering. While certainly in the early phases, he is a quick learner and willing to put in the work towards this goal. <span>Wikipedia.</span></p>
        </div>

        <div id="projects">
            <h3>Projects</h3>
            <p className="project"><strong>CleanAirMass:</strong> interactive educational website about air pollution in Massachusetts <span>AEM, R Shiny, CSS, Javascript, HTML</span> </p>
            <p className="project"><strong>TRECH Policy Scenarios:</strong> GIS map of air pollution data <span>R Shiny</span> </p>
            <p className="project"><strong>Mathematics of Voting:</strong> determine election winners under different voting systems <span>Python</span> </p>
        </div>

        <div id="interests">
            <h3>Interests</h3>

            <div className="interest">
                <img className="interests-picture" src={RunnerImage} alt="image of runner"></img>
                running
            </div>
            <div className="interest">
                <img className="interests-picture" src={ReadingImage} alt="Image of reading"></img>
                reading
            </div>
            <div className="interest">
                <img className="interests-picture" src={ClimberImage} alt="Image of Rock climbing"></img>
                climbing
            </div>
        </div>
    </div>
</div>
}

export default MainPage