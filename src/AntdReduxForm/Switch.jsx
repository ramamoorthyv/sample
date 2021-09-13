import React from "react"
import { Switch } from "antd"

const SwitchField = props => {
  const { value, disabled } = props

  return (
    <Switch
      disabled={disabled}
      checked={value}
      onChange={newVal => {
        props.onChange(newVal)
      }} />
  )
}

export default SwitchField
