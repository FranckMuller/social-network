import React from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import locale from 'antd/es/date-picker/locale/ru_RU';
import moment from 'moment';

const formControlWithProps = (Component) => {
  return ({ className, errorClassName, meta, ...props }) => {
    return (
      <div
        className={classNames({
          [className]: className,
          [errorClassName]: meta.touched && meta.error,
        })}
      >
        <Component {...props} />
        {meta.touched && meta.error && (
          <span className={errorClassName}>{meta.error}</span>
        )}
      </div>
    );
  };
};

const Input = ({ input, customValue, ...props }) => {
  return <input className="form-control" {...input} {...props} />;
};

const TextArea = ({ input, ...props }) => {
  return <textarea className="form-control" {...input} {...props} />;
};

const DatePickerInput = ({ input, formatDate, ...props }) => {
  const onChange = (date, dateString) => {
    input.onChange(dateString);
  };
  return (
    <DatePicker
      format={formatDate}
      locale={locale}
      onChange={onChange}
      defaultValue={moment(input.value, formatDate)}
      {...props}
    />
  );
};

const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  ...props
}) => {
  const adaptFileEventToValue = (delegate) => (e) =>
    delegate(e.target.files[0]);
  return (
    <input
      className="form-control"
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      accept="image/*"
      {...inputProps}
      {...props}
    />
  );
};

export const FormControlInput = formControlWithProps(Input);
export const FormControlTextarea = formControlWithProps(TextArea);
export const FormControlFileInput = formControlWithProps(FileInput);
export const FormControlDatePicker = formControlWithProps(DatePickerInput);
