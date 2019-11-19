const DAYS_OF_WEEK = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
// const LONG_DAYS_OF_WEEK = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export class CalendarDay extends HTMLElement {

  constructor() {
    super();
    this.day = this.getAttribute('day') || 1;
    this.dow = this.getAttribute('dow') || 0; // American format
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
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
      </style>
      <div class="day ${this.getTypeDay(this.dow)} ${this.todayClass()}">
        <h4>${this.day}</h4>
        <span>${DAYS_OF_WEEK[this.dow]}</span>
      </div>
    `;

    // Handlers
    this.querySelector('.day').addEventListener('click', () => this.onClick());
  }

  onClick() { this.classList.toggle('mark'); }

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
