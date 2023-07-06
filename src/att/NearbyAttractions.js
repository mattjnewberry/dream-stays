function Attractions(attractionData) {
  console.log(attractionData);
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
          {attractionData.attractions.map((attraction) => (
            <tr>
              <td>{attraction.name}</td>
              <td>{attraction.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attractions;
