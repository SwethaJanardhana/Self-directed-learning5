import Button from "../Button";
export default function PeopleInSpace({
  peopleDetails,
  onButtonClick,
  filter,
}) {
  return (
    <>
      <h1>Number of People in Space : {peopleDetails.length}</h1>
      <Button onButtonClick={onButtonClick} isActive={filter.includes("All")}>
        All
      </Button>
      <Button onButtonClick={onButtonClick} isActive={filter.includes("ISS")}>
        ISS
      </Button>
      <Button
        onButtonClick={onButtonClick}
        isActive={filter.includes("Tiangong")}
      >
        Tiangong
      </Button>
    </>
  );
}
