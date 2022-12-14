import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../services/UPload.service";
import {Channels} from "../../services/UPload.model";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";

  channels: Channels[] = [];

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.UPload.getChannel(id).subscribe((channels) => {
      this.channels = channels as Channels[];
    })
  }
}
