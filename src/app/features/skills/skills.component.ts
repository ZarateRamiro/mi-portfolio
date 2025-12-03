import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skills';
import { SkillsService } from '../../services/skill.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.obtenerSkills().subscribe({
      next: data => this.skills = data,
      error: err => console.error(err)
    });
  }
}
