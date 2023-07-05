function Attractions(attractionData) {
  return (
    <div className="Attractions">
      <table>
        <thead>
          <tr>
            <th>Attraction</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{attractionData.attractions[0].name}</td>
            <td>{attractionData.attractions[0].distance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Attractions;
