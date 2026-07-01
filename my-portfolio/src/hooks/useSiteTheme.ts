import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('site-theme')
    if (stored === 'light' || stored === 'dark') return stored
  }
  return 'light'
}

/**
 * Site-wide light/dark theme, shared by the home navbar and the project
 * detail pages. State lives in localStorage('site-theme') and is applied via
 * <html data-theme>, so every page reads and writes the same source of truth.
 */
export function useSiteTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const dark = theme === 'dark'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('site-theme', theme)
    } catch {
      // ignore storage failures
    }
  }, [theme])

  return { theme, dark, toggle: () => setTheme(dark ? 'light' : 'dark') }
}
