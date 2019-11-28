import { LitElement, html, css } from 'lit-element';

const DAYS_OF_WEEK = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export class CalendarDay extends LitElement {

  constructor() {
    super();
    this.day = this.getAttribute('day') || 1;
    // Week of day (American format)
    this.dow = this.getAttribute('dow') || 0;
    this.weekday = DAYS_OF_WEEK[this.dow];
  }

  static get styles() {
    return css`
      .day {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 0;
        width: 75px;
        height: 100px;
        background: white;
        border-bottom: 5px solid white;
        margin-bottom: 5px;
        cursor: pointer;
        user-select: none;
      }
      .holiday {
        border-bottom-color: red;
      }
      .today {
        background: indigo;
        color: white;
        border-bottom-color: slateblue;
      }
      .mark {
        filter: invert(1);
      }
      .day h4 {
        margin: 0;
        font-size: 42px;
      }
      .day span {
        color: #888;
      }
    `;
  }

  render() {
    return html`
      <div class="day ${this.getTypeDay(this.dow)} ${this.todayClass()}" @click="${() => this.onClick()}">
        <h4>${this.day}</h4>
        <span>${this.weekday}</span>
      </div>
    `;
  }

  onClick() { this.shadowRoot.querySelector('.day').classList.toggle('mark'); }

  isWorkDay(day) { return (day > 0 && day < 6); }
  getTypeDay(day) {
    return this.isWorkDay(day) ? 'workday' : 'holiday';
  }

  isToday() { return this.hasAttribute('today'); }
  todayClass() {
    return this.isToday() ? 'today' : '';
  }
}

customElements.define('calendar-day', CalendarDay);
