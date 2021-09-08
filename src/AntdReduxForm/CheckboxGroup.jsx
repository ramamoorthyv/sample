import React from "react"
import { Checkbox } from "antd"

class CheckboxGroup extends React.Component {
	render() {
		const {
 options, onChange, value, checked, defaultValue
} = this.props
		let newValue = []
		if (value) {
			newValue = value
		} else if (checked) {
				newValue = checked
			}
		return (
  <Checkbox.Group
    defaultValue={defaultValue}
    options={options}
    onChange={checkedValue => onChange(checkedValue)}
    value={newValue} />
		)
	}
}

export default CheckboxGroup
