import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  Channels,
  ChannelVideos,
  VideoDetails,
  VideosPlaylist,
  Tags,
  TagVideos,
  ChannelComments,
  VideoComments
} from "./UPload.model";

const BASE_URL = "https://dev-project-upskill-grupo05.pantheonsite.io/api"

@Injectable({
  providedIn: 'root'
})

export class UPloadService {
  favorites = JSON.parse(localStorage.getItem("my_favorites") || "[]")
  favourites: number[] = [];

  constructor(private http: HttpClient) {
  }

  getArticles() {
    return this.http.get(BASE_URL + "/artigos")
  }

  getChannel(id: number) {
    return this.http.get<Channels[]>(BASE_URL + "/canais/" + id)
  }

  getChannels() {
    return this.http.get(BASE_URL + "/canais")
  }

  getChannelComments(channel_id: number) {
    return this.http.get<ChannelComments[]>(BASE_URL + "/comentarios/canal/" + channel_id)
  }

  getChannelVideos(channel_id: number) {
    return this.http.get<ChannelVideos[]>(BASE_URL + "/videos/canal/" + channel_id)
  }

  getVideos() {
    return this.http.get(BASE_URL + "/videos")
  }

  getVideoComments(id: number) {
    return this.http.get<VideoComments[]>(BASE_URL + "/comentarios/video/" + id)
  }

  getVideoDetails(id: string) {
    return this.http.get<VideoDetails[]>(BASE_URL + "/videos/" + id)
  }

  getPlaylist(id: number) {
    return this.http.get(BASE_URL + "/playlists/" + id)
  }

  getPlaylists() {
    return this.http.get(BASE_URL + "/playlists")
  }

  getPlaylistVideos(id: number) {
    return this.http.get<VideosPlaylist[]>(BASE_URL + "/videos/playlist/" + id)
  }

  getTag(id: number) {
    return this.http.get<Tags[]>(BASE_URL + "/tags/" + id)
  }

  getTagVideos(tags_id: number) {
    return this.http.get<TagVideos[]>(BASE_URL + "/videos/tag/" + tags_id)
  }

  getFavourites() {
    return this.http.get(BASE_URL + "/videos?ids=" + this.favourites.join(','));
  }


  toggleFavorite(id: number) {
    if (!this.isFavorite(id)) {
      this.favorites.push(id)
    } else {
      let index = this.favorites.indexOf(id);
      this.favorites.splice(index, 1)
    }
    localStorage.setItem("my_favorites", JSON.stringify(this.favorites));
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id);
  }

}
