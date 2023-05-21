import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  document!: Document;

  constructor() {}

  do0() {
    (document.getElementById('j1') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('j1') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('rating-value') as HTMLButtonElement).value = '1';
  }
  do1() {
    (document.getElementById('j1') as HTMLButtonElement).click();
    (document.getElementById('2') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('2') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('j1') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('j1') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('rating-value') as HTMLButtonElement).value = '2';
  }
  do2() {
    (document.getElementById('j1') as HTMLButtonElement).click();
    (document.getElementById('2') as HTMLButtonElement).click();
    (document.getElementById('3') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('3') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('j1') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('j1') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('2') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('2') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('rating-value') as HTMLButtonElement).value = '3';
  }
  do3() {
    (document.getElementById('j1') as HTMLButtonElement).click();
    (document.getElementById('2') as HTMLButtonElement).click();
    (document.getElementById('3') as HTMLButtonElement).click();
    (document.getElementById('4') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('4') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('j1') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('j1') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('2') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('2') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('3') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('3') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('rating-value') as HTMLButtonElement).value = '4';
  }
  do4() {
    (document.getElementById('j1') as HTMLButtonElement).click();
    (document.getElementById('2') as HTMLButtonElement).click();
    (document.getElementById('3') as HTMLButtonElement).click();
    (document.getElementById('4') as HTMLButtonElement).click();
    (document.getElementById('5') as HTMLButtonElement).click();
    (document.getElementById('5') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('5') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('j1') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('j1') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('2') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('2') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('3') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('3') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('4') as HTMLButtonElement).textContent = '\u2605';
    (document.getElementById('4') as HTMLButtonElement).style.color = 'gold';
    (document.getElementById('rating-value') as HTMLButtonElement).value = '5';
    console.log(
      (document.getElementById('rating-value') as HTMLButtonElement).value
    );
    console.log((document.getElementById('5') as HTMLButtonElement).value);
  }
  fonction() {
    (document.getElementById('j1') as HTMLButtonElement).addEventListener(
      'click',
      this.do0
    );
    (document.getElementById('2') as HTMLButtonElement).addEventListener(
      'click',
      this.do1
    );
    (document.getElementById('3') as HTMLButtonElement).addEventListener(
      'click',
      this.do2
    );
    (document.getElementById('4') as HTMLButtonElement).addEventListener(
      'click',
      this.do3
    );
    (document.getElementById('5') as HTMLButtonElement).addEventListener(
      'click',
      this.do4
    );
  }

  ngOnInit() {
    this.fonction();
  }
}
