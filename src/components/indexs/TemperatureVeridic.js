import { useState } from 'react'

const BoilingVerdict = ({ value }) => {

  if (value >= 100) {
    return <p>It should start to boil</p>
  }
  return <p>It shouldn't start to boil</p>
}

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const TemperatureInput = ({ scale, temperature, handleText }) => {

  return (
    <fieldset>
      <span>Inserte el valor en {scaleName[scale]}</span>
      <br />
      <input type="text" value={temperature} onChange={(e) => handleText(e.target.value)}/>
    </fieldset>
  )
}

const TemperatureVeridic = () => {

  const [weather, setWeather] = useState({temperature: '', scale: 'c'})

  const handleCelsiusChange = (temperature) => {
    setWeather({scale: 'c', temperature})
  }

  const handleFahrenheitChange = (temperature) => {
    setWeather({scale: 'f', temperature})
  }

  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  }

  const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  }

  const celsius = weather.scale === 'f' ? tryConvert(weather.temperature, toCelsius) : weather.temperature;
  const fahrenheit = weather.scale === 'c' ? tryConvert(weather.temperature, toFahrenheit) : weather.temperature;

  return (
    <div>
      <TemperatureInput scale={"c"} temperature={celsius} handleText={handleCelsiusChange} />
      <br />
      <TemperatureInput scale={"f"} temperature={fahrenheit} handleText={handleFahrenheitChange} />
      <br />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  )
}

export default TemperatureVeridic
