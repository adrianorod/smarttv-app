import { useCallback, useEffect, useState } from 'react'

type NavigationData = {
  focusedIndex: number
}

type UseNavigationProps = {
  isActive: boolean
  direction: 'vertical' | 'horizontal'
  limit: number
}

const useNavigation = ({ isActive, direction, limit }: UseNavigationProps): NavigationData => {
  const [focusedIndex, setFocusedIndex] = useState(0)

  const decrement = useCallback(() => {
    setFocusedIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      return newIndex >= 0 ? newIndex : 0
    })
  }, [])

  const increment = useCallback(() => {
    setFocusedIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      return newIndex <= limit ? newIndex : limit
    })
  }, [limit])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
        if (direction === 'horizontal') break;
        decrement();
        break;
      case 'ArrowDown':
        if (direction === 'horizontal') break;
        increment();
        break;
      case 'ArrowLeft':
        if (direction === 'vertical') break;
        decrement();
        break;
      case 'ArrowRight':
        if (direction === 'vertical') break;
        increment();
        break;
      default:
        break;
    }
  }, [decrement, direction, increment])

  useEffect(() => {
    if (isActive) {
      document.addEventListener('keydown', onKeyDown)
    }
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isActive, onKeyDown])

  return {
    focusedIndex,
  }
}

export default useNavigation
