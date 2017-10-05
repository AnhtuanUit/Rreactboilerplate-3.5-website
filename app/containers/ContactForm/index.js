import React from 'react'
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import ReCAPTCHA from 'react-google-recaptcha';
import { changeFile } from './actions';

import { WrapperForm, WrapperFormTextarea } from './WrapperForm';
import validate from './validate';
import Wrapper from './Wrapper';
import Header from './header';
import Loading from './Loading';

import Button from 'components/Button';
import messages from './messages';
import { makeSelectFile } from './selectors';

import Image3 from './images/upload.png';

let captcha;

function triggerUpload() {
  $('#myFile').click();
}

const renderField = ({ input, label, type, style, meta: { touched, error } }) =>
  <WrapperForm style={style} touched={touched} error={error}>
    <div>
      <input {...input} placeholder={label} type={type}/>
    </div>
  </WrapperForm>

const renderTextarea = ({ input, label, type, meta: { touched, error } }) =>
  <WrapperFormTextarea  touched={touched} error={error}>
    <div>
      <p>Hello,</p>
      <textarea {...input} placeholder={label} type={type}/>
    </div>
  </WrapperFormTextarea>

// const renderFile = ({ input, label, type, meta: { touched, error } }) =>
//   <div style={{ marginTop: '25px'}}>
//     <input {...input} type={type} id="myFile" style={{ display: 'none' }} />
//     <div>
//       <img onClick={triggerUpload} style={{ marginRight: '10px', marginTop: '-10px'}} src={Image3} width="19px" height="25px"/><span>{label}</span>
//     </div>
//   </div>

const renderRecaptcha = ({ input, meta: { touched, error } }) =>
  <div>
    <ReCAPTCHA
      {... input}
       ref={(el) => { captcha = el; }}
       sitekey="6LeldCcUAAAAAKrs0CYp4PYLVRVbeUWj7zTb9Ic5"
       onChange={input.onChange}
     />
  </div>

class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('#myModal').on('hide.bs.modal',() => {
      this.props.reset();
      this.props.onChangeFile();
      captcha.reset();
    });
  }

  onChangeFile() {
    const files = this.refs.file.files;
    this.setState({file: files[0]});
  }

  render() {
    return (
      <Wrapper className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content">
            <div className="modal-header">
              <Header />
            </div>
            <div className="modal-body">
              <form onSubmit={ this.props.handleSubmit }>
                <Field
                  style={{width: '50%', display: 'inline-block'}}
                  name="firstName"
                  type="text"
                  component={renderField}
                  label="First name"
                />
                <Field
                  style={{width: '50%', display: 'inline-block'}}
                  name="lastName"
                  type="text"
                  component={renderField}
                  label="Last name"
                />
                <Field
                  name="email"
                  type="text"
                  component={renderField}
                  label="Your email address"
                />
                <Field
                  name="content"
                  type="text"
                  component={renderTextarea}
                  label="your message here ..."
                />

                {!!this.props.response && <div className="alert alert-success">
                    <strong><FormattedMessage {...messages.thankYou} /></strong>
                    {this.props.response}
                </div>}

                {!!this.props.errMsg && <div className="alert alert-danger error-message">
                  <strong>Error! </strong>
                  {this.props.errMsg}
                </div>}

                <div style={{display: 'inline-block', width: '100%'}}>
                  <div className='col-sm-7'>
                    <div style={{ marginTop: '25px'}}>
                      <input onChange={this.props.onChangeFile} type='file' id="myFile" style={{ display: 'none' }} />
                      <div>
                        <img onClick={triggerUpload} style={{ marginRight: '10px', marginTop: '-10px'}} src={Image3} width="19px" height="25px"/>
                        <span>{this.props.file.name ? this.props.file.name : ('Upload a file to declare')}</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-5 send-button'>
                    <div style={{ marginTop: '25px' }}>
                      <Field
                        name='response'
                        component={renderRecaptcha}
                      />
                      <Button type="submit" style={{float: 'right', marginTop: '15px', marginBottom: '20px'}}
                        disabled={this.props.submitting} loading={this.props.loading} ><FormattedMessage {...messages.buttonSend} /></Button>
                      <Loading loading={this.props.loading}></Loading>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </Wrapper>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeFile: (event) => {
      if(!!event) {
        dispatch(changeFile(event.target.files[0]));
      } else {
        dispatch(changeFile({}));
      }
    },
  };
}

const mapStateToProps = createStructuredSelector({
  file: makeSelectFile()
});

Contact = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default reduxForm({
  validate,
  form: 'submitValidation' // a unique identifier for this form
})(Contact)
