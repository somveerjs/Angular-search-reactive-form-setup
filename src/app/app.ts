import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, filter, map, distinctUntilChanged } from 'rxjs';

@Component({
  standalone: true,
  imports:[ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',

})
export class App{
searchConrol = new FormControl ('', {nonNullable:true}); // nonNullable: True to prevent error:// value !== null to prevent error: 'value' is possibly 'null'

constructor (){
  this.searchConrol.valueChanges.pipe(
   debounceTime(400),
   filter(value => value.trim().length>0),
   map(value=> value.trim().toLowerCase()),
   distinctUntilChanged()
  ).subscribe({
    next:(value) => {
      console.log ("User Typed Value:", value)
    },
    error: (err) => {
      console.log("Error:", err);
    },
    complete:() => console.log ("All Done")
  })
}
}

