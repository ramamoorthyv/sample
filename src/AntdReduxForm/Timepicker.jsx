import React from "react"
import { TimePicker } from "antd"

const FORMAT = "hh:mm a"
const Picker = props => {
  const { onChange, value } = props
  return (
    <TimePicker
      use12Hours
      onChange={time => onChange(time.format(FORMAT))}
      value={moment(value, FORMAT)}
      format="h:mm A"
      minuteStep={15} />
  )
}

export default Picker
