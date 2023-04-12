import ShowPersonRow from "./showPersonRow";

function Table({ people }) {

  const renderPersonRow = people.map((person) => {
    return <ShowPersonRow key={person.id} person={person} />;
  });

  return (
    <div className="divTable">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sesso</th>
            <th>Altezza</th>
          </tr>
        </thead>
        <tbody>{renderPersonRow}</tbody>
      </table>
    </div>
  );
}

export default Table;
