/// <reference types="vite/client" />

export {}

import "vue-router"

declare module "vue-router" {
  interface RouteMeta {
    transition?: "slide-left" | "slide-right"
  }
}

declare module "*.json" {
  const json: string
  export default json
}
