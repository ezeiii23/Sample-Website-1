export const Footer = () => {
  return (
    <footer className="container-fluid ">
      <div className="row font-style">
        <div className="col-lg-12 ">
          <div>
            <img
              src={"img/1.jpg"}
              width="150"
              height="150"
              alt=""
              className="me-2 logo"
            />
            <span className="font-footer">KICKS</span>
          </div>
        </div>
        <div className="col-sm-2 offset-7 text-end">
          <span className="">Follow us @</span>
        </div>
        <div className="col-sm-1">
          <img src={"img/ig.png"} width="47" height="47" alt="" className="" />
        </div>
        <div className="col-sm-1">
          <img src={"img/twitter.png"} width="47" height="47" alt="" className="" />
        </div>
        <div className="col-sm-1">
          <img src={"img/fb.png"} width="47" height="47" alt="" className="" />
        </div>
      </div>
    </footer>
  );
};
