import dayjs from 'https://unpkg.com/dayjs/esm';
import es from 'https://unpkg.com/dayjs/esm/locale/es';
import './CalendarDay.mjs';

const paddingDays = day => (day === 0) ? 6 : day - 1;

export class CalendarMonth extends HTMLElement {

  constructor() {
    super();

    // Set DayJS spanish locale
    dayjs.locale('es', es);

    // REAL today
    this.today = dayjs();

    // This month
    this.month = this.getAttribute('month') || this.today.month();
    this.year = this.getAttribute('year') || this.today.year();
    this.firstDay = dayjs().month(this.month - 1).year(this.year).date(1);
    this.monthName = this.firstDay.format('MMMM');
    this.maxDay = this.firstDay.daysInMonth();
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
        }
        .block.visible {
          background: #999;
          border-bottom: 5px solid #000;
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
        <header>📅 ${this.monthName}</header>
        <div class="days">
          ${this.getDays()}
        </div>
      </div>
    `;
  }

  isToday(day, month) {
    return day == this.today.date() && month == this.today.month() + 1;
  }

  isTodayProp(day) { return this.isToday(day, this.month) ? 'today' : ''; }

  getDays() {

    // padding days
    const firstWeekDay = this.firstDay.day();
    const padDays = paddingDays(firstWeekDay);

    const days = [];
    for (let i = 0; i < padDays; i++) {
      days.push('<div class="block visible"></div>');
    }

    // Month days
    for (let i = 1; i <= this.maxDay; i++) {
      const weekday = (firstWeekDay + (i - 1)) % 7;
      days.push(`<calendar-day day="${i}" dow="${weekday}" ${this.isTodayProp(i)}></calendar-day>`);
    }

    return days.join('');
  }

}

customElements.define('calendar-month', CalendarMonth);
