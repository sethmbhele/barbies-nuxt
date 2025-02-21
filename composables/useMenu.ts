import { ref } from 'vue'

export const useMenu = () => {
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    document.body.classList.toggle('menu-is-open', isMenuOpen.value)
  }

  const closeMenu = () => {
    isMenuOpen.value = false
    document.body.classList.remove('menu-is-open')
  }

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu
  }
}
