import "./styles/object_container.scss"

interface Object_container_Props {
  src: string,
  title: string,
  direction: string,
  textPosition: string,
  link: string,
}

function Object_container(props: Object_container_Props) {
  return(
    <a href={props.link} className={"container " + (props.direction == "horizontal" ? "container-horizontal" : "")}>
      <img className="objectImage" src={props.src} ></img>
      <p className={(props.direction == "horizontal" ? 
        (props.textPosition == "left" ? "leftText" : "rightText") 
      : "" )}
      >{props.title}</p>
    </a>
  )
}
export { Object_container };