import './index.css'

const ProjectItems = props => {
  const {projectsList, receivingNewProject} = props
  const {imageUrl, thumbnailUrl} = projectsList
  const changingProject = () => {
    receivingNewProject(imageUrl)
  }

  return (
    <li className="list">
      <button onClick={changingProject} className="button">
        <img src={thumbnailUrl} alt="thumbnail" className="size1" />
      </button>
    </li>
  )
}
export default ProjectItems
