function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import './CalendarDay.js';
const MONTH_NAME = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const paddingDays = day => day === 0 ? 6 : day - 1;

export class CalendarMonth extends HTMLElement {
  constructor() {
    super();

    _defineProperty(this, "today", void 0);

    _defineProperty(this, "month", void 0);

    _defineProperty(this, "year", void 0);

    _defineProperty(this, "maxDay", void 0);

    this.today = new Date();
    this.month = Number(this.getAttribute('month')) || this.today.getMonth() + 1;
    this.year = Number(this.getAttribute('year')) || this.today.getFullYear();
    this.maxDay = new Date(this.year, this.month, 0).getDate();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .month {
          width: 550px;
        }
        .days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-template-rows: repeat(6, 1fr);
        }
        .block {
          display: inline-flex;
          width: 75px;
          height: 100px;
          border-bottom: 5px;
          margin-bottom: 5px;
          visibility: hidden;
        }
        header {
          background: steelblue;
          color: white;
          font-weight: bold;
          font-size: 40px;
          text-align: center;
          padding: 10px 0;
          margin-bottom: 5px;
        }
      </style>
      <div class="month">
        <header>📅 ${MONTH_NAME[this.month - 1]}</header>
        <div class="days">
          ${this.getDays()}
        </div>
      </div>
    `;
  }

  isToday(day, month) {
    return day == this.today.getDate() && month == this.today.getMonth() + 1;
  }

  isTodayProp(day) {
    return this.isToday(day, this.month) ? 'today' : '';
  }

  getDays() {
    // padding days
    const firstDOW = new Date(this.year, this.month - 1, 1).getDay();
    const pad = paddingDays(firstDOW);
    const days = [];

    for (let i = 0; i < pad; i++) {
      days.push('<div class="block"></div>');
    } // month days


    for (let i = 1; i <= this.maxDay; i++) {
      const weekday = (firstDOW + (i - 1)) % 7;
      days.push(`<calendar-day day="${i}" dow="${weekday}" ${this.isTodayProp(i)}></calendar-day>`);
    }

    return days.join('');
  }

} // customElements.define('calendar-month', CalendarMonth);