import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-editor',
  imports: [],
  template: `<p>Album Editor — placeholder</p>`,
})
export class AlbumEditorComponent implements OnInit {
  private route = inject(ActivatedRoute);

  // artistId query param pre-populates the artist field on new albums.
  // Navigate here as: /album/edit/0?artistId={id}
  artistId: number | null = null;

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('artistId');
    this.artistId = id ? +id : null;
  }
}
