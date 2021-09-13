import { Input } from "antd"
import React from "react"
import ReactInputMask from "react-input-mask"
import PropTypes from "prop-types"

const InputMask = props => (
  <ReactInputMask {...props} value={props.value} onChange={e => props.onChange(e.target.value)}>
    {inputProps => <Input {...inputProps} disabled={props.disabled ? props.disabled : null} />}
  </ReactInputMask>
	)

InputMask.propTypes = {
	mask: PropTypes.string,
	maskChar: PropTypes.string,
	formatChars: PropTypes.object,
	alwaysShowMask: PropTypes.bool,
	inputRef: PropTypes.func
}

export default InputMask
