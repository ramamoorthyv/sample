import React from "react"
import { DatePicker } from "antd"
import moment  from "moment";

const DefaultFormat = "DD/MM/YYYY"

class renderDatePicker extends React.Component {
  openDatepicker = () => this._calendar.setOpen(true);

  render() {
    const { onChange, value } = this.props
    return (
      <DatePicker
        format={DefaultFormat}
        defaultValue={value ? moment(value, DefaultFormat) : null}
        onChange={date => onChange(moment(date).format(DefaultFormat))} />
    )
  }
}

export default renderDatePicker
