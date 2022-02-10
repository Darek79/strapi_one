import classname from 'classnames';

interface InputI {
  inputWrapperStyle?: string;
  labelWrapperStyle?: string;
  inputStyle?: string;
  name?: string;
  label?: string;
  isRequired?: boolean;
  errorMessage?: string;
}

export default function Input({
  inputWrapperStyle = 'flex',
  labelWrapperStyle = 'bg-pageYellow w-full py-2 text-center',
  inputStyle = 'px-2 outline-0',
  name = '',
  label = '',
  isRequired = false,
  errorMessage = ''
}: InputI): JSX.Element {
  const errorLabelWrapperClasses = classname({
    'py-2 px-2': !errorMessage,
    'bg-error-red text-error-text py-1 px-2': errorMessage
  });

  return (
    <>
      <div className={inputWrapperStyle}>
        <label className={labelWrapperStyle} htmlFor={name}>
          {label}
        </label>
        <input
          aria-label={name}
          tabIndex={0}
          className={inputStyle}
          type="text"
          name={name}
          required={isRequired}
        />
      </div>
      <label className={errorLabelWrapperClasses}>{errorMessage}</label>
    </>
  );
}
