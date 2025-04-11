import About from "./components/About/About";
import Header from "./components/Profile/Profile";
import WorkExperience from "./components/WorkExperience/workexperience";
import Project from "./components/Projects/projects";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/education";
const App = (): React.ReactNode => {
	return (
		<>
        <div className="container" >
        <Header />
        <About />
        <WorkExperience />
        <Project />
        <Education />
        <Footer />
        </div>
		</>
	);
};
export default App;
