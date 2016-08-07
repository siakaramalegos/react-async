import React, { PropTypes } from 'react'

export default class Picker extends React.Component {
  render() {
    const { value, onChange, options } = this.props

    return (
      <span id="picker">
        <h1>{value}</h1>
        <select
          onChange={e => onChange(e.target.value)}
          value={value}>
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>
          )}
        </select>
      </span>
    )
  }
}

Picker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}
