function ValidationMessage(props) {
  if (!props.valid) {
    return <div className='error-msg'>{props.message}</div>
  }
  return null;
}