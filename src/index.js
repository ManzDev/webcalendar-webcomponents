// import './components/CalendarYear.js';
import { CalendarDay } from './components/CalendarDay.js';
import { CalendarMonth } from './components/CalendarMonth.js';
import { CalendarYear } from './components/CalendarYear.js';
customElements.define('calendar-day', CalendarDay);
customElements.define('calendar-month', CalendarMonth);
customElements.define('calendar-year', CalendarYear);