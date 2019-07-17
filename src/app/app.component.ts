import { OnInit,  Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public name: String = 'Angular';
  public inputForm: FormGroup;
  public users: FormArray;
  constructor(
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  private initForm() {
    this.inputForm = this.fb.group({
      userCount: ['', Validators.required],
      users: this.fb.array([]),
    });

    this.users = this.inputForm.get('users') as FormArray;
  }

  public generateUserInput() {
    this.users.clear();
    for(let i = 0; i<this.inputForm.get('userCount').value;i++) {
    
      const userInput = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required]
      });

      this.users.push(userInput);
    
    }
  }

}
