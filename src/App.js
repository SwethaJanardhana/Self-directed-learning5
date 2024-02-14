import { useEffect, useState } from "react";
import "./App.css";
import PeopleInSpace from "./components/PeopleInSpace";
import PeopleDetails from "./components/PeopleDetails";

function App() {
  const URL = "http://api.open-notify.org/astros.json";
  const [peopleInSpace, setPeopleInSpace] = useState(0);
  const [peopleDetails, setPeopleDetails] = useState([]);
  const [dispalyDetails, setDispalyDetails] = useState(false);
  const [filteredPeopleDetails, setFilteredPeopleDetails] =
    useState(peopleDetails);

  function handlePeopleDetails(event) {
    setDispalyDetails(true);
    let filter = event.target.textContent.trim();
    if (filter !== "All") {
      setFilteredPeopleDetails(
        peopleDetails.filter((person) => person.craft.includes(filter))
      );
    } else {
      setFilteredPeopleDetails(peopleDetails);
    }
  }

  async function fetchNumberOfPeopleInSpace() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data.message === "success") {
        setPeopleInSpace(data.number);
        setPeopleDetails(data.people);
      }
    } catch (error) {
      console.log("Exception Occured : ", error);
    }
  }

  useEffect(() => {
    fetchNumberOfPeopleInSpace();
  }, []);

  return (
    <main className="mainContent">
      <PeopleInSpace
        peopleInSpace={peopleInSpace}
        onButtonClick={handlePeopleDetails}
      />
      {dispalyDetails && (
        <PeopleDetails peopleDetails={filteredPeopleDetails} />
      )}
    </main>
  );
}

export default App;
