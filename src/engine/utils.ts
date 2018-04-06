export let minutesToMs = (time:string|number):number => {
  let timetoseconds: number

  if (typeof time === 'number') return Math.round(time * 1000)

  let arr = time.split('.')

  if (arr[1]) {
    timetoseconds = parseInt(arr[0]) * 60 * 1000
    timetoseconds += parseInt(arr[1]) * 1000

  } else {
    timetoseconds = parseInt(time) * 60 * 1000
  }

  return timetoseconds
}
