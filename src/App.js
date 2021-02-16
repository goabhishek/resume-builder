import Resume from "./Resume";
import ResumeForm from "./ResumeForm";

function App() {
  return (
    <div className="App">
      <h2 className="heading no-print">Resume Builder</h2>
      <div className="container">
        <ResumeForm />
        <Resume />
      </div>
    </div>
  );
}

export default App;
