import React, {Component} from 'react';
import {connect} from 'react-redux';
import {teamDataPush} from '../actions';
// import {fetchPlayer} from '../actions';

class OwnerPlayer extends Component {

  componentDidMount(){
    let player = this.fetchPlayer(this.props.player);
    player.then(res=> this.props.dispatch(teamDataPush(res)));
    // console.log(data);
  }
  fetchPlayer(search){
    const username = 'baamosk';
    const password = 'Jajuka888';
    const auth = btoa(username + ':' + password);
    const Authorization = {headers: { Authorization: `Basic ${auth}` }};
    const URL = `https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/cumulative_player_stats.json?playerstats=2PA,2PM,3PA,3PM,FTA,FTM,PTS/G,AST/G,STL/G,REB/G,TOV/G&player=${search}`;
    return new Promise(function(resolve,reject){
      fetch(URL, Authorization).then(res => res.json() ).then(res => resolve(res));      // take care of the reject if needed within the fetch in case connection refused or !res.ok
    });
  }



  render() {
    console.log(this.props.data);
    // console.log(this.props.data.cumulativeplayerstats);
    // let player = this.props.data.cumulativeplayerstats.playerstatsentry;
    return (
    <div>
      <table>
        {/*<tr>}
          <td name={player.player.FirstName + 'name'}>{player.player.FirstName} {this.props.player.player.LastName}
          <button onClick={e=>this.addPlayer(e)} type="button">Add {player.player.FirstName + ' ' + player.player.LastName} to team!</button></td>
          <td name={player.player.FirstName + 'position'}>{player.stats.Position}</td>
          <td name={player.player.FirstName + 'points-per-game'}>{player.stats.PtsPerGame['#text']}</td>
          <td name={player.player.FirstName + 'rebounds'}>{player.stats.RebPerGame['#text']}</td>
          <td name={player.player.FirstName + 'assists'}>{player.stats.AstPerGame['#text']}</td>
          <td name={player.player.FirstName + 'steals'}>{player.stats.StlPerGame['#text']}</td>
          <td name={player.player.FirstName + 'turnovers'}>{player.stats.TovPerGame['#text']}</td>
        {</tr>*/}

      </table>
    </div>
    );
  }
}

const mapStateToProps =(state, ownProps) =>{
  return {
    data:state.owner.teamData[ownProps.index]
  };
};

export default connect(mapStateToProps)(OwnerPlayer);