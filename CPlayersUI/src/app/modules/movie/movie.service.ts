import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movie } from './movie';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies:Array<movie>;
apiKey:string;
  tmdbendpoint:string;
  watchListendpoint:string;
  imagePrefix:string;
  search:string;
  constructor(private http:HttpClient) { 
    this.apiKey="api_key=eae8a1170a7f51651352d68eb382c103"
this.tmdbendpoint="https://api.themoviedb.org/3/movie"
this.imagePrefix="https://image.tmdb.org/t/p/w500"
this.watchListendpoint="http://localhost:4513/api/service/movie"
this.search="https://api.themoviedb.org/3/search/movie?"

  }



  getAllMovies(type:string,page:number=1):Observable<Array<movie>>{ 
    const endPoint=this.tmdbendpoint+"/"+type+"?"+this.apiKey+"&page="+page;
    return this.http.get(endPoint).pipe(
      map(this.pickMovieResults),
      map(this.transformPosterPath.bind(this))
      );
   
  }



  transformPosterPath(movies):Array<movie>{
    return movies.map(movie=>{

        movie.poster_path=`${this.imagePrefix}${movie.poster_path}`;
        return movie;

  });
}

pickMovieResults(response)
{
  return response['results'];
}

addMovieTowatchList(movie){
  console.log(movie);
  
  return this.http.post(this.watchListendpoint,movie);
}
getMoviesFromwatchList():Observable<Array<movie>>{
  const dUrl=`${this.watchListendpoint}/movies`;
  return this.http.get<Array<movie>>(dUrl);
}

deleteMovieFromWatchList(movie:movie){
  const dUrl=`${this.watchListendpoint}/${movie.id}`;
  return this.http.delete(dUrl,{responseType:'text'});
}
updateComments(movie:movie){
  const updateUrl=`${this.watchListendpoint}`;
  return this.http.put(updateUrl,movie);


}



searchMovies(searchKey:string):Observable<Array<movie>>{

  if(searchKey.length>0){
    const url=`${this.search}${this.apiKey}&language=en-US&page=1&include_adult=false&query=${searchKey}`
 
    
    
    
    return this.http.get(url).pipe(retry(3),map(this.pickMovieResults), map(this.transformPosterPath.bind(this)));
 
  }

}
}

