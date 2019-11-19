import './CalendarMonth.mjs';

export class CalendarYear extends HTMLElement {

  constructor() {
    super();
    const date = new Date();
    this.year = this.getAttribute('year') || date.getFullYear();
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
      </style>
      <div class="year">
        <header>${this.year}</header>
        <div class="months">
          ${this.getMonths()}
        </div>
      </div>
    `;
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
