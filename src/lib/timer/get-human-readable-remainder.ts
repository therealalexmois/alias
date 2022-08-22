import intervalToDuration from "date-fns/intervalToDuration"

export function getHumanReadableRemainder(duration: number, time: number) {
  const start = time * 1000
  const end = duration * 1000
  const { minutes = 0, seconds = 0 } = intervalToDuration({
    start,
    end,
  })

  const formattedSeconds = seconds.toLocaleString("ru-RU", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const formattedMinutes = minutes.toLocaleString("ru-RU", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })

  return `${formattedMinutes}:${formattedSeconds}`
}
