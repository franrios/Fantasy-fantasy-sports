import React from 'react';
import PlayerItem from './Player-Item';
import { connect } from 'react-redux';
const PlayerList = (props) => {
  const players = props.data.map((player, index) => <PlayerItem player={player} key={index} />);
  return (
      <table className="table-striped desktop-view">
        <tbody>
          <tr className="table-header">
            <th>Player Name</th>
            <th>Team</th>
            <th>Position</th>
            <th>Points/pg</th>
            <th>Rebounds/pg</th>
            <th>Assists/pg</th>
            <th>Steals/pg</th>
            <th>TurnOvers/pg</th>
            <th>Add Player</th>
          </tr>
        </tbody>
        {players}
      </table>
  );
}

const mapStateToProps = (state) => {
  return{
    data: state.players.data
  }
}
export default connect(mapStateToProps)(PlayerList)