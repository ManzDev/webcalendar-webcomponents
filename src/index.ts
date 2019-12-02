// import './components/CalendarYear.js';
import { CalendarDay } from './components/CalendarDay';
import { CalendarMonth } from './components/CalendarMonth';
import { CalendarYear } from './components/CalendarYear';

customElements.define('calendar-day', CalendarDay);
customElements.define('calendar-month', CalendarMonth);
customElements.define('calendar-year', CalendarYear);