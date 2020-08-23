import React from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import locale from 'antd/es/date-picker/locale/ru_RU';
import moment, { Moment } from 'moment';
import { WrappedFieldProps } from 'redux-form';

type ReturnedComponentProps = {
  className: string;
  errorClassName: string;
} & WrappedFieldProps;
type FormControlWithProps = (Component: React.FC<any>) => React.FC<any>;

type DatePickerPropsType = {
  formatDate: string;
};

const formControlWithProps: FormControlWithProps = (Component) => {
  const FormControlWithProps: React.FC<ReturnedComponentProps> = ({ className, errorClassName, meta, ...props }) => {
    return (
      <div
        className={classNames({
          [className]: className,
          [errorClassName]: meta.touched && meta.error,
        })}
      >
        <Component {...props} />
        {meta.touched && meta.error && <span className={errorClassName}>{meta.error}</span>}
      </div>
    );
  };
  return FormControlWithProps;
};

const Input: React.FC<WrappedFieldProps> = ({ input, ...props }) => {
  return <input className="form-control" {...input} {...props} />;
};

const TextArea: React.FC<WrappedFieldProps> = ({ input, ...props }) => {
  return <textarea className="form-control" {...input} {...props} />;
};

const DatePickerInput: React.FC<WrappedFieldProps & DatePickerPropsType> = ({ input, formatDate, ...props }) => {
  const onChange = (date: Moment | null, dateString: string) => {
    input.onChange(dateString);
  };
  return (
    <DatePicker
      format={formatDate}
      locale={locale}
      onChange={onChange}
      defaultValue={input.value ? moment(input.value, formatDate) : undefined}
      {...props}
    />
  );
};

const FileInput: React.FC<WrappedFieldProps> = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  ...props
}) => {
  const adaptFileEventToValue = (delegate: any) => (e: any) => delegate(e.target.files[0]);
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
