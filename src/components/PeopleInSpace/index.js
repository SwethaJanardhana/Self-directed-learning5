import Button from "../Button";
export default function PeopleInSpace({ peopleInSpace, onButtonClick }) {
  return (
    <>
      <h1>Number of People in Space : {peopleInSpace}</h1>
      <Button onButtonClick={onButtonClick}>All</Button>
      <Button onButtonClick={onButtonClick}>ISS</Button>
      <Button onButtonClick={onButtonClick}>Tiangong</Button>
    </>
  );
}
