import { Injectable } from '@angular/core';
import { videos} from '../interface/videos.module';

@Injectable({
  providedIn: 'root'
})
export class videoService{
  video: videos []= [
   {videoUrl: "https://www.youtube.com/watch?v=XGz92oZddBY&ab_channel=StarHill" },
   {videoUrl: "https://www.youtube.com/watch?v=rSzznUZj78Y&ab_channel=StarHill" },
   {videoUrl: "https://www.youtube.com/watch?v=qy8stVfn-us&ab_channel=StarHillPlus" },
   {videoUrl: "https://www.youtube.com/watch?v=V81hDF4jv5Y&ab_channel=StarHillPlus" },
  ];


  constructor() { }
  getAllTienda(){
    return [...this.video];
  }
}