import "./styles/object_container.scss"

interface Object_container_Props {
  src: string,
  title: string,
  direction: string,
  textPosition: string,
  link: string,
}

function Object_container(props: Object_container_Props) {
  object = (<p>Error</p>)

  if(props.direction == "column") {
    var object = (
      <a href={props.link} className="container container-vertical">
        <img className="objectImage" src={props.src} ></img>
        <p className={(props.textPosition == "left" ? "leftText" : "rightText")}>{props.title}</p>
      </a>
    )
  }

  if(props.direction == "row") {
    var object = (
      <a href={props.link} className="container container-horizontal">
        <img className="objectImage" src={props.src} ></img>
        <p className={(props.textPosition == "left" ? "leftText" : "rightText")}>{props.title}</p>
      </a>
    )
    
  }
  return(object)
}
export { Object_container };