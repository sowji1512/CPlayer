import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  apiKey:string;
  playerId:BigInteger;
  addToFavourites:string;
  statistics:string;
  search:string;
  getFromFavourites:string;
  deleteFromFavourites:string;
  constructor(private http:HttpClient) { 
    this.apiKey="apikey=w98sKSWc7rWqHrsFfszmCMIC8832"
    this.addToFavourites="http://localhost:4518/api/v1/playerservice/player"
    this.getFromFavourites="http://localhost:4518/api/v1/playerservice/players"
    this.search="https://cricapi.com/api/playerFinder?"
    this.statistics="https://cricapi.com/api/playerStats?"

    
    this.deleteFromFavourites="http://localhost:4518/api/v1/playerservice/players"

  }
  getAllPlayers(name:string):Observable<Array<any>>{
    console.log(name);
    
    const endPoint=this.search+this.apiKey+"&name="+name;
    console.log(endPoint);
    return this.http.get(endPoint).pipe(
      map(this.pickMovieResults)
    );
     
  }
  
  pickMovieResults(response)
{
  return response['data'];
}

getPlayerStatistics(playerId:BigInteger):Observable<any>{

  
  const endPoint=this.statistics+this.apiKey+"&pid="+playerId;
  console.log(endPoint);
  return this.http.get(endPoint);
   
}

addPlayerTofavourites(player){
  console.log("add");
  return this.http.post(this.addToFavourites,player);
}
getPlayersFromfavouriteList():Observable<Array<Player>>{
  console.log("get");
  const gUrl=`${this.getFromFavourites}`;
  return this.http.get<Array<Player>>(gUrl);
}
deletePlayerFromFavourites(player:Player){
  console.log("delete");
  
  const dUrl=`${this.addToFavourites}/${player.id}`;
  return this.http.delete(dUrl,{responseType:'text'});

}
}
