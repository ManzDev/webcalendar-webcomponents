import { LitElement, html, css } from 'lit-element';
import dayjs from 'dayjs';
import './CalendarMonth.mjs';

export class CalendarYear extends LitElement {

  constructor() {
    super();
    this.year = this.getAttribute('year') || dayjs().year();
  }

  static get properties() {
    return {
      year: { attribute: 'year' }
    }
  }

  render() {
    return html`
      <div class="year">
        <header>
          <button class="prev" @click="${() => this.setNewYear(this.year - 1)}">Prev</button>
          ${this.year}
          <button class="next" @click="${() => this.setNewYear(this.year + 1)}">Next</button>
        </header>
        <div class="months">
          ${this.getMonths()}
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
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
        background: purple;
        color: white;
        font-weight: bold;
        font-size: 40px;
        text-align: center;
        padding: 10px 0;
        margin-bottom: 5px;
      }
      .prev, .next {
        background: transparent;
        border: 0;
        font-size: 18px;
        color: gold;
        cursor: pointer;
      }
    `;
  }

  setNewYear(year) {
    const parent = this.parentElement;
    const element = document.createElement('calendar-year');
    element.setAttribute('year', year);
    this.remove();
    parent.append(element);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
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

    const result = [];

    for (let i = 1; i <= 12; i++) {
      result.push(`<calendar-month month="${i}" year="${this.year}"></calendar-month>`);
    }

    return html(result);

  }

}

customElements.define('calendar-year', CalendarYear);
