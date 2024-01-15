import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Token } from '../classes/token';

@Injectable({
  providedIn: 'root'
})
export class CommonContainerService {
  user!: User;
  token!:Token;
  constructor() { }
}
