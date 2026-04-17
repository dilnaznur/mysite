import { useState } from 'react'
import Welcome from './screens/Welcome'
import Level1 from './screens/Level1'
import Gift1 from './screens/Gift1'
import Level2 from './screens/Level2'
import Gift2 from './screens/Gift2'
import Level3 from './screens/Level3'
import Gift3 from './screens/Gift3'
import ProgressDots from './components/ProgressDots'

function App() {
  const SCREENS = ['welcome', 'level1', 'gift1', 'level2', 'gift2', 'level3', 'gift3']
  const [currentScreen, setCurrentScreen] = useState('welcome')

  const next = () => {
    const currentIndex = SCREENS.indexOf(currentScreen)
    if (currentIndex < SCREENS.length - 1) {
      setCurrentScreen(SCREENS[currentIndex + 1])
    }
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <Welcome next={next} />
      case 'level1':
        return <Level1 next={next} />
      case 'gift1':
        return <Gift1 next={next} />
      case 'level2':
        return <Level2 next={next} />
      case 'gift2':
        return <Gift2 next={next} />
      case 'level3':
        return <Level3 next={next} />
      case 'gift3':
        return <Gift3 />
      default:
        return <Welcome next={next} />
    }
  }

  const getLevelIndex = () => {
    if (currentScreen === 'level1') return 0
    if (currentScreen === 'level2') return 1
    if (currentScreen === 'level3') return 2
    return -1
  }

  const showProgress = ['level1', 'level2', 'level3'].includes(currentScreen)
  const levelIndex = getLevelIndex()

  return (
    <div key={currentScreen} className="screen-fade">
      {showProgress && <ProgressDots current={levelIndex} />}
      {renderScreen()}
    </div>
  )
}

export default App

