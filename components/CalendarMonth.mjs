import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';
import './CalendarDay.mjs';

const MONTH_NAME = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const paddingDays = day => (day === 0) ? 6 : day - 1;

export class CalendarMonth extends HTMLElement {

  constructor() {
    super();
    this.today = DateTime.local();
    this.month = this.getAttribute('month') || this.today.month;
    this.year = this.getAttribute('year') || this.today.year;
    this.firstDay = DateTime.local().set({ month: this.month, year: this.year, day: 1 });
    this.maxDay = this.firstDay.daysInMonth;
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
    return day == this.today.day && month == this.today.month;
  }

  isTodayProp(day) { return this.isToday(day, this.month) ? 'today' : ''; }

  getDays() {

    // padding days
    const firstDOW = this.firstDay.weekday;
    const pad = paddingDays(firstDOW);
    const days = [];
    for (let i = 0; i < pad; i++) {
      days.push('<div class="block"></div>');
    }

    // month days
    for (let i = 1; i <= this.maxDay; i++) {
      const weekday = (firstDOW + (i - 1)) % 7;
      days.push(`<calendar-day day="${i}" dow="${weekday}" ${this.isTodayProp(i)}></calendar-day>`);
    }

    return days.join('');
  }

}

customElements.define('calendar-month', CalendarMonth);
