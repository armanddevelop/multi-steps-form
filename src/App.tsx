import { MainContent } from "./Components/MainContent";
import { ContextApp } from "./Context/ContextApp";

function App() {
  return (
    <ContextApp.Provider
      value={{
        dataContext: {
          stepsSide: ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"],
          formTitle: "Personal Info",
        },
      }}
    >
      <MainContent />
    </ContextApp.Provider>
  );
}

export default App;
