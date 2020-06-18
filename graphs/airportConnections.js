// this is a super difficult (black level) problem, and i am not including the full solution. however, i felt that it would be helpful to write out the code to build a graph using the given data

function airportConnections(airports, routes, startingAirport) {
  const airportGraph = createAirportGraph(airports, routes);
}

function createAirportGraph(airports, routes) {
  const airportGraph = {};
  for (let airport of airports) {
    airportGraph[airport] = new AirportNode(airport);
  }
  for (let route of routes) {
    const [airport, connection] = route;
    airportGraph[airport].connections.push(connection);
  }
  return airportGraph;
}

class AirportNode {
  constructor(airport) {
    this.airport = airport;
    this.connections = [];
  }
}
