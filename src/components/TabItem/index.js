import './index.css'

const TabItem = props => {
  const {tabsList, receivingTab} = props
  const {tabId, displayText} = tabsList
  const changingTab = () => {
    receivingTab(tabId)
  }
  return (
    <li>
      <button onClick={changingTab} className="button button1">
        <p>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
