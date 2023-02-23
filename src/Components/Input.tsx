import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  RefObject
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  id: string
  label: string
  ref?: RefObject<HTMLInputElement>

  extraWrapClass?: string
}


const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    id,
    extraWrapClass,
    label,
    ...props
  }, ref) => {

  const changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value ? event.target.placeholder = event.target.value : event.target.removeAttribute("placeholder")
    if (props.onChange) {
      props.onChange(event)
    }

  }
  const wrapClass = extraWrapClass ? `form-outline ${extraWrapClass}` : "form-outline"
  return (
    <div className={wrapClass}>
      <input id={id} className="form-control" ref={ref}
             onChange={changeEvent} {...props}/>
      <div className="form-label"><label htmlFor={id}>{label}</label></div>
    </div>
  );
};

export default React.forwardRef(Input);
