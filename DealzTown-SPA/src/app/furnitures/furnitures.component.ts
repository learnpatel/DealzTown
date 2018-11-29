import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UploadFileService } from '../_services/upload-file.service';

@Component({
  selector: 'app-furnitures',
  templateUrl: './furnitures.component.html',
  styleUrls: ['./furnitures.component.css']
})
export class FurnituresComponent implements OnInit {
  items: any[];
  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {
    this.uploadService
      .getFileUploads(100)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      )
      .subscribe(items => {
        console.log(items);
        this.items = items;
      });
  }
}
