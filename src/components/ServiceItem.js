import "../styles/serviceItem.css";
function ServiceItem(props) {
  const classCard = "card text-dark p-3 " + props.warna;
  return (
    <div className="col-6 mt-3">
      <div class={classCard}>
        <div class="card-body">
          <h5 class="card-title">{props.judul}</h5>
          <p class="card-text">{props.deskripsi}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
