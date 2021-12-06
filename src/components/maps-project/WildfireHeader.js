import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const WildfireHeader = () => {
  return (
    <header className="map-header">
      <h1><Icon icon={locationIcon} /> Wildfire Tracker (Powered by NASA) </h1>
    </header>
  )
}

export default WildfireHeader
