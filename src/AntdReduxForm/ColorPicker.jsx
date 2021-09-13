import React, { Component } from "react"
import { TwitterPicker } from "react-color"
import { colorPickerColors } from "config/data/base"

const ColorPicker = props => {
	const { onchange, value } = props
	return <TwitterPicker colors={colorPickerColors} color={value} onChange={color => props.onChange(color.hex)} />
}

export default ColorPicker
