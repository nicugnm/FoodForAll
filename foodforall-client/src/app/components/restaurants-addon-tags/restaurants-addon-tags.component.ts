import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurants-addon-tags',
  templateUrl: './restaurants-addon-tags.component.html',
  styleUrls: ['./restaurants-addon-tags.component.css']
})
export class RestaurantsAddonTagsComponent {
  @Input()
  public tagType: TagType = TagType.Default;

  public readonly TagType = TagType;
}

export enum TagType {
  MostWanted = 0,
  MostReviewed = 1,
  EcoFriendly = 2,
  Default = 3
}
