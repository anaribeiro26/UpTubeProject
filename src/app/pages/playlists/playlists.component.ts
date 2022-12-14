import { Component, OnInit } from '@angular/core';
import {Playlists, VideosPlaylist} from "../../services/UPload.model";
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../services/UPload.service";


@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlists[] = [];

  playListFilters: Playlists[] = [];

  image_url = '/maxresdefault.jpg';

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getPlaylists().subscribe((playlists) => {
      this.playlists = playlists as Playlists[];

      let prevId = -1
      this.playlists.forEach((obj) =>{
        if (obj.id !== prevId) {
          this.playListFilters.push(obj)
        }
        prevId = obj.id

        this.UPload.getPlaylistVideos(obj.id).subscribe((videosPlaylist) => {
          obj.numberOfVideos = videosPlaylist.length;
        })
      })
    })

  }




}
