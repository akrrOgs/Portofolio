import ServiceItem from "./ServiceItem";

function Service() {
  return (
    <div className="section bg-dark text-light">
      <div className="container">
        <h1>Service</h1>
        <div className="row">
          <ServiceItem
            judul="Desain"
            warna="merah"
            deskripsi="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here"
          />
          <ServiceItem
            judul="Web Development"
            warna="biru"
            deskripsi="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here"
          />
          <ServiceItem
            judul="Microsoft Excel"
            warna="hijau"
            deskripsi="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here"
          />
          <ServiceItem
            judul="Junior Web Developer"
            warna="kuning"
            deskripsi="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here"
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
