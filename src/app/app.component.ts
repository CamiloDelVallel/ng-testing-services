import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'ng-testing-services';

  ngOnInit(){
    const calculator = new Calculator;
    const rta = calculator.multiply(1,4)
    console.log(rta === 4)
    const rta2 = calculator.divide(1,0)
    console.log(rta2 === null)
  }
}
