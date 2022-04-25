import "./styles/object_container.scss"

interface Square_Object_container_Props {
  src: string,
  title: string,
  color: string,
  link: string,
}

function Square_Object_container(props: Square_Object_container_Props) {
  return(
    <a href={props.link} className="container container_square">
      <img className="objectImage_square" src={props.src}></img>
      <p className={"centerText " + (props.color == "white" ? "textColor_white" : "textColor_black")}>{props.title}</p>
    </a>
  )
}
export { Square_Object_container };

