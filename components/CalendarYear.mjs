import dayjs from 'https://unpkg.com/dayjs/esm';
import './CalendarMonth.mjs';

export class CalendarYear extends HTMLElement {

  constructor() {
    super();

    this.year = this.getAttribute('year') || dayjs().year();
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

    this.querySelector('.prev').addEventListener('click', () => this.setNewYear(this.year - 1));
    this.querySelector('.next').addEventListener('click', () => this.setNewYear(this.year + 1));
  }

  setNewYear(year) {
    const parent = this.parentElement;
    const element = document.createElement('calendar-year');
    element.setAttribute('year', year);
    this.remove();
    parent.append(element);
  }

  static get observedAttributes() {
    return ['year'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'year') {
      this.year = Number(newValue);
    }
  }

  static set year(y) {
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

customElements.define('calendar-year', CalendarYear);
