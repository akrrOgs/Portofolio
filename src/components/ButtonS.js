import "../styles/button.css";

function ButtonS(props) {
  const classButton = "btn btn-warning btn-saya-" + props.warna;
  return (
    <a href={props.link} class={classButton}>
      {props.text}
    </a>
  );
}

export default ButtonS;
