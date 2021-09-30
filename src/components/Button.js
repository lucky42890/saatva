const Button = ({ name, classes, clickHandler }) => {
  return (
    <button
      className={`btn ${classes}`}
      onClick={clickHandler}
    >
      {name}
    </button>
  )
}

export default Button;