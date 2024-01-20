/* eslint-disable import/no-extraneous-dependencies */
import { parse, isDate } from 'date-fns'

function parseDateString(value, originalValue: string) {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd-MM-yyyy', new Date())

    return parsedDate
}

export default parseDateString
