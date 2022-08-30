import { getHumanReadableRemainder } from "./get-human-readable-remainder"
import { DEFAULT_DURATION } from "./defaults"

interface ITimerOptions {
  duration?: number
  onUpdate?: (humanReadableTime: string, remainderTime: number) => void
  onEnd?: () => void
  onStart?: () => void
  onPause?: (isPaused: boolean) => void
}

// TODO: add create API
// TODO: add check options
export function timer(options: ITimerOptions) {
  const {
    duration = DEFAULT_DURATION,
    onUpdate,
    onEnd,
    onStart,
    onPause,
  } = options

  let __intervalID = null as number | null
  let __remainder = 0
  let __isPaused = false

  function tick(startTime: number) {
    return function () {
      const delta = Date.now() - startTime
      const time = Math.floor(delta / 1000)

      __remainder = delta
      const remainderTime = duration - time
      const humanReadableReminder = getHumanReadableRemainder(duration, time)

      if (onUpdate) onUpdate(humanReadableReminder, remainderTime)

      if (time === duration) {
        return stop()
      }
    }
  }

  function clear(intervalID: number | null) {
    if (intervalID) {
      window.clearInterval(intervalID)
    }
  }

  function start(remainder = 0) {
    const startTime = Date.now() - remainder
    const intervalID = window.setInterval(tick(startTime), 1000)

    if (onStart) {
      onStart()
    }

    __intervalID = intervalID
    return intervalID
  }

  function stop() {
    clear(__intervalID)
    __isPaused = false
    __remainder = 0

    if (onEnd) {
      onEnd()
    }
  }

  function pause(isPaused = !__isPaused) {
    __isPaused = isPaused

    if (isPaused) {
      clear(__intervalID)
    } else {
      start(__remainder)
    }

    if (onPause) {
      onPause(isPaused)
    }
  }

  return Object.freeze({
    start,
    stop,
    clear,
    pause,
    isPaused: __isPaused,
  })
}
