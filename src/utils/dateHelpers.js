/**
 * Utility functions for date handling in the application.
 * Standardized to ensure consistent date formatting throughout the app.
 */

/**
 * Format a date to ISO format (YYYY-MM-DD)
 * Ensures dates are formatted consistently for both display and data lookup
 * @param {Date|string} date - A Date object or date string to format
 * @returns {string|null} The formatted date string or null if input is invalid
 */
export function formatDateToISO(date) {
  if (!date) return null

  const dateObj = date instanceof Date ? date : new Date(date)

  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

/**
 * Beregn antal dage mellem to datoer (returnerer altid >= 0)
 * @param {Date|string} fromDate - Start dato
 * @param {Date|string} toDate - Slut dato (default: i dag)
 * @returns {number} Antal dage mellem datoerne
 */
export function getDaysOverdue(fromDate, toDate = new Date()) {
  if (!fromDate) return 0
  const from = new Date(fromDate)
  const to = new Date(toDate)
  // Sæt begge til lokal midnat
  from.setHours(0, 0, 0, 0)
  to.setHours(0, 0, 0, 0)
  const diff = Math.floor((to - from) / (1000 * 60 * 60 * 24))
  return diff > 0 ? diff : 0
}

/**
 * Beregn næste dato baseret på frekvens
 * @param {Date} currentDate - Den dato som funktionen skal beregne den næste dato fra
 * @param {string} frequency -('dagligt'|'ugentlig'|'manedlig'|'kvartal'|'årlig')
 * @returns {Date} Næste dato
 */
export function getNextDateByFrequency(currentDate, frequency) {
  const nextDate = new Date(currentDate)
  nextDate.setHours(0, 0, 0, 0)

  switch (frequency) {
    case 'dagligt':
      nextDate.setDate(nextDate.getDate() + 1)
      break
    case 'ugentligt':
      nextDate.setDate(nextDate.getDate() + 7)
      break
    case 'manedligt':
      nextDate.setMonth(nextDate.getMonth() + 1)
      break
    case 'kvartal':
      nextDate.setMonth(nextDate.getMonth() + 3)
      break
    case 'årligt':
      nextDate.setFullYear(nextDate.getFullYear() + 1)
      break
    default:
      nextDate.setDate(nextDate.getDate() + 1)
  }

  return nextDate
}

/**
 * Generér et array af datoer ud fra startdato og frekvens
 * @param {Date|string} startDate
 * @param {string} frequency
 * @param {number} count
 * @returns {string[]} Array af ISO-datoer
 */
export function generateDateArray(startDate, frequency, count = 10) {
  const dates = []
  let current = new Date(startDate)
  for (let i = 0; i < count; i++) {
    dates.push(formatDateToISO(current))
    current = getNextDateByFrequency(current, frequency)
  }
  return dates
}
