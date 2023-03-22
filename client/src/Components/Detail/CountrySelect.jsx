import React from 'react'

const CountrySelect = (id, countries) => {
  return (
    <div>
        {countries
        .filter((id) => countries.id === id)
        .map((x) => (
          <h1>x.name</h1>
        ))}
    </div>
  )
}

export default CountrySelect
