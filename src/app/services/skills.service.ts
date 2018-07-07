import { Injectable } from '@angular/core';
import { Level } from '../types/level.enum'
import { Skill } from '../models/skill';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name : "Angular",
      level: Level.Beginner

    },
    {
      id:1,
      name: "CSS",
      level: Level.Advanced,
    },
    {
      id:2,
      name: "HTML",
      level: Level.Advanced,
    },
    {
      id:3,
      name: "JavaScript",
      level: Level.Intermediate,
    }
  ];


  constructor() { }
}
