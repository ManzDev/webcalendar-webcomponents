import './CalendarMonth.js';

export class CalendarYear extends HTMLElement {

  year : number;

  constructor() {
    super();
    const date = new Date();
    this.year = Number(this.getAttribute('year')) || date.getFullYear();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .months {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(4, 1fr);
          justify-items: center;
        }
        @media screen and (max-width: 1750px) {
          .months {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(6, 1fr);
          }
        }
        @media screen and (max-width: 1200px) {
          .months {
            grid-template-columns: repeat(12, 1fr);
            grid-template-columns: 1fr;
          }
        }
        .year > header {
          margin-bottom: 5px;
        }
        .prev, .next {
          background: transparent;
          border: 0;
          font-size: 18px;
          color: gold;
          cursor: pointer;
        }
      </style>
      <div class="year">
        <header>
          <button class="prev">Prev</button>
          ${this.year}
          <button class="next">Next</button>
        </header>
        <div class="months">
          ${this.getMonths()}
        </div>
      </div>
    `;

    this.querySelector('.prev')!.addEventListener('click', () => this.setNewYear(this.year - 1));
    this.querySelector('.next')!.addEventListener('click', () => this.setNewYear(this.year + 1));
  }

  setNewYear(year : number) {
    const parent = this.parentElement;
    const element = document.createElement('calendar-year');
    element.setAttribute('year', year.toString());
    this.remove();
    parent!.append(element);
  }

  static get observedAttributes() {
    return ['year'];
  }

  attributeChangedCallback(name : string, oldValue : string, newValue : string) {
    if (name === 'year') {
      this.year = Number(newValue);
    }
  }

  static set year(y : number) {
    this.year = y;
  }

  static get year() {
    return this.year;
  }

  getMonths() {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(`<calendar-month month="${i}" year="${this.year}"></calendar-month>`);
    }

    return months.join('');
  }

}

// customElements.define('calendar-year', CalendarYear);
