import "../PeopleDetails/PeopleDetails.css";

export default function PeopleDetails({ peopleDetails }) {
  return (
    <section className="peopleCard">
      <ol>
        {peopleDetails.length > 0 ? (
          peopleDetails.map((person) => (
            <li key={person.name}>
              <dl>
                <dt>
                  Name :<strong>{person.name}</strong>
                </dt>
                <dt>Craft :{person.craft}</dt>
              </dl>
            </li>
          ))
        ) : (
          <p>No Person Work in this Craft</p>
        )}
      </ol>
    </section>
  );
}
