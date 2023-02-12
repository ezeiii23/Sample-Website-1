export const Header = () => {
  return (
    <header className="container-fluid ">
      <nav className="row font-style">
        <ul className="col-lg-3 flex-wrap d-flex navbar-brand p-3 navbar-nav bg-light align-items-center">
          <li className="nav-item ">
            <img
              src={"img/1.jpg"}
              width="47"
              height="47"
              alt=""
              className="me-2 image"
            />
            <span className="font-header">KICKS</span>
          </li>
        </ul>
        <ul className="col-lg-8 flex-row gap-5 navbar-nav justify-content-center bg-light p-3 d-flex align-items-center">
          <li className="nav-item">NIKE</li>
          <li className="nav-item">VANS</li>
          <li className="nav-item">ADIDAS</li>
          <li className="nav-item">PUMA</li>
          <li className="nav-item">CONVERSE</li>
        </ul>
        <ul className="col-lg-1 flex-wrap d-flex navbar-brand p-3 navbar-nav justify-content-end bg-light align-items-center">
          <div>
            <img src={"img/2.png"} width="47" height="47" alt="" className="" />
          </div>
        </ul>
      </nav>
    </header>
  );
};
