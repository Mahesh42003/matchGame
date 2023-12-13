const NavItem = props => {
  const {navItem} = props
  const {imgUrl, timerImage, timer1, Score} = navItem
  return (
    <div>
      <li className="Tab-Colour">
        >
        <img src={imgUrl} alt="website logo" className="size" />
        <p className="paragraph">Score:</p>
        <p className="colour">{Score}</p>
        <img src={timerImage} alt="timer" />
        <p className="colour">{timer1} sec</p>
      </li>
    </div>
  )
}

export default NavItem
