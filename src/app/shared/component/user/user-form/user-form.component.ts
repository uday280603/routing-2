import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = new FormGroup({
      userName: new FormGroup(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required]),
      experienceYears: new FormControl(null, [Validators.required]),
      isActive: new FormControl(null, [Validators.required]),
      profileImage: new FormControl(null, [Validators.required]),
      profileDescription: new FormControl(null, [Validators.required]),
      skills: new FormArray([]),
    });
  }

  get skillsArr() {
    return this.userForm.get('skills') as FormArray;
  }

  onAddSkills() {
    let skillControl = new FormControl(null);
    this.skillsArr.push(skillControl);
  }
}
