
function showPersonRow({person}){
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.gender}</td>
            <td>{person.height}</td>
        </tr>
    );
}

export default showPersonRow;