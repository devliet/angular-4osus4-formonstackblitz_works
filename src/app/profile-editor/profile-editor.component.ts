import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['profile-editor.component.css'],
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
