import React from 'react';
import { Upload, Button, Avatar } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import styled from 'styled-components';
import { toUcFirst } from 'modules/utils/string';

const AvatarContainer = styled.div`
  width: 144px;
  height: 144px;
  margin-bottom: 10px;
  margin-top: 10px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const CoverPhotoContainer = styled.div`
  padding: 30px;
  background: #ececec;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.inputFile = React.createRef();
  }

  handleChange(event) {
    const { fileList } = event;
    const { originFileObj } = fileList[0];
    const url = URL.createObjectURL(originFileObj);
    this.setState({
      imageSrc: url
    });

    this.props.input.onChange({
      url,
      fileName: originFileObj.name
    });
  }

  handleRemove(e) {
    this.fileInput.value = '';
    this.setState({
      imageSrc: null
    });
  }

  render() {
    const {
      input: { value, onChange, name },
      meta: { touched, error, warning },
      logo,
      avatarDisplayName,
      avatarColor,
      accept,
      pattern = 'avatar'
    } = this.props;

    const props = {
      onRemove: this.handleRemove
    };

    return (
      <div style={{ marginTop: 60 }}>
        {/* <div>{toUcFirst(name)}</div> */}
        <AvatarContainer pattern>
          {(this.state.imageSrc || logo) && <Avatar size={144} src={this.state.imageSrc || logo} alt="image" />}
          {!this.state.imageSrc && !logo && (
            <React.Fragment>
              {pattern == 'coverPhoto' && <CoverPhotoContainer />}
              {pattern == 'avatar' && (
                <Avatar style={{ backgroundColor: avatarColor, verticalAlign: 'middle' }} size={144}>
                  {avatarDisplayName}
                </Avatar>
              )}
            </React.Fragment>
          )}
        </AvatarContainer>
        {/* <input type="file" onChange={this.handleChange} ref={(ref) => (this.fileInput = ref)} /> */}
        <Upload
          showUploadList={false}
          onChange={this.handleChange}
          beforeUpload={(file, fileList) => false}
          previewFile={this.handleChange}
          accept={accept}
        >
          <div className="button_view">
            <Button>
              <UploadOutlined />
              Change {name}
            </Button>
          </div>
        </Upload>
      </div>
    );
  }
}
