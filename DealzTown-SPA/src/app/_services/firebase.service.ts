import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private basePath = '/img';
  constructor(private db: AngularFireDatabase) {}
}
