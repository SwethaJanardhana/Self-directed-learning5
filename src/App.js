import { useEffect, useState } from "react";
import "./App.css";
import PeopleInSpace from "./components/PeopleInSpace";
import PeopleDetails from "./components/PeopleDetails";

function App() {
  const URL = "http://api.open-notify.org/astros.json";

  const [peopleDetails, setPeopleDetails] = useState([]);
  const [filter, setFilter] = useState("");

  function handlePeopleDetails(event) {
    setFilter(event.target.textContent.trim());
  }

  async function fetchNumberOfPeopleInSpace(filter) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      if (data.message === "success") {
        const people = data.people;
        if (filter && filter !== "All") {
          setPeopleDetails(
            people.filter((person) => person.craft.includes(filter))
          );
        } else {
          setPeopleDetails(people);
        }
      }
    } catch (error) {
      console.log("Exception Occured : ", error);
    }
  }

  useEffect(() => {
    fetchNumberOfPeopleInSpace(filter);
  }, [filter]);

  return (
    <main className="mainContent">
      <PeopleInSpace
        peopleDetails={peopleDetails}
        onButtonClick={handlePeopleDetails}
        filter={filter}
      />
      {filter && <PeopleDetails peopleDetails={peopleDetails} />}
    </main>
  );
}

export default App;
