// @flow

import React from 'react';

type Props = {
  placeholder?: string,
  value?: string | number | any,
  innerRef?: any,
  disabled?: boolean,
  type?: string,
  onBlur?: Function,
  onChange?: Function,
  onFocus?: Function,
  onKeyPress?: Function,
  onPaste?: Function,
  readOnly?: boolean,
  variant?: 'outline',
  customClassName?: string,
  pattern?: string,
  inputMode?: string,
  onMouseLeave?: Function,
  maxLength?: string,
  errorMsg?: string
};

const Input = ({
  placeholder = '',
  value = '',
  innerRef = null,
  disabled = false,
  readOnly = false,
  type = 'text',
  onBlur = null,
  onChange = null,
  customClassName = null,
  onFocus = null,
  onKeyPress = null,
  onPaste = null,
  variant = 'outline',
  pattern = '',
  inputMode = '',
  onMouseLeave,
  maxLength = '',
  errorMsg = ''
}: Props) => {
  return (
    <div
      className={`input__wrapper ${
        variant !== 'outline' ? ` input__wrapper--${variant}` : ''
      }`}
    >
      <input
        className={`form-control form-control-lg ${
          variant !== 'outline' ? `input--${variant}` : ''
        } ${customClassName}`}
        placeholder={placeholder}
        ref={innerRef}
        value={value}
        disabled={disabled}
        type={type}
        onKeyPress={onKeyPress}
        readOnly={readOnly}
        onPaste={onPaste}
        onMouseLeave={onMouseLeave}
        pattern={pattern}
        inputMode={inputMode}
        maxLength={maxLength}
        onBlur={e => onBlur && onBlur(e)}
        onFocus={e => onFocus && onFocus(e)}
        onChange={e => onChange && onChange(e.target.value)}
        autoCapitalize="none"
        autoComplete="off"
      />
      {errorMsg && <p className="error-msg text-danger">{errorMsg}</p>}
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  errorMsg: '',
  innerRef: null,
  disabled: false,
  readOnly: false,
  type: 'text',
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {},
  onKeyPress: () => {},
  onPaste: null,
  variant: 'outline',
  customClassName: '',
  pattern: '',
  inputMode: '',
  maxLength: '',
  onMouseLeave: null
};

export default Input;
