declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-dom' {
  export interface GlobalComponents {
    NuxtLink: typeof import('nuxt/app')['NuxtLink']
    NuxtPage: typeof import('nuxt/app')['NuxtPage']
    NuxtLayout: typeof import('nuxt/app')['NuxtLayout']
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    NuxtLink: typeof import('nuxt/app')['NuxtLink']
    NuxtPage: typeof import('nuxt/app')['NuxtPage']
    NuxtLayout: typeof import('nuxt/app')['NuxtLayout']
  }
}
