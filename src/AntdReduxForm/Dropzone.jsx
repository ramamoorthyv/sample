import React, { Component } from "react"
import Dropzone from "react-dropzone"

const FILE_FIELD_NAME = "files"

const dropzoneStyle = {
	width: "100%",
	borderWidth: 2,
	borderColor: "#e6e6e6",
	borderStyle: "dashed",
	borderRadius: 5,
	background: "#fafafa"
}

const renderDropzoneInput = field => {
	const files = field.input.value || []
	return (
  <div>
    <Dropzone
      styles={dropzoneStyle}
      name={field.name}
      onDrop={filesToUpload => {
					filesToUpload.map(file => files.push({
							preview: file.preview,
							name: file.name
						}))
					console.log(files)
					field.input.onChange(files)
				}}>
      <div>Try dropping some files here, or click to select files to upload.</div>
    </Dropzone>
    {console.log("filesssss")}
    {console.log(+files)}
    {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
    {files && Array.isArray(files) && <ul>{files.map((file, i) => <li key={i}>{file.name}</li>)}</ul>}
  </div>
	)
}

export default renderDropzoneInput
