import { useState, useEffect } from 'react'

import './../../css/map.css';
import Map from './../maps-project/Map'
import Loader from './../maps-project/Loader'
import WildfireHeader from './../maps-project/WildfireHeader'

const AppMap = () => {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async() => {
      setLoading(true)
      const res = await fetch('/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <WildfireHeader />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  )
}

export default AppMap
