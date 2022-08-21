import { twMerge } from "tailwind-merge"

export function mergeClasses(
  defaultClasses: string,
  className: string | undefined,
) {
  if (className && defaultClasses) {
    return twMerge(defaultClasses, className)
  }

  return defaultClasses
}
