const CreditsPage = () => {
  return (
    <>
      <>
        <div className="card p-2 mt-1 mb-2">
          <div className="card-title">
            <h3 className="text-center mx-auto mt-2 bg-ws p-3">Credits</h3>
          </div>

          <div className="card p-1 mt-1" id="picture-credits">
            <div className="card-body mx-auto">
              <div className="card-title flex-just-center">
                <h5>Contents</h5>
              </div>
              <div className="mx-auto">
                <p>The captivating visuals within this platform have been made possible by the talented photographers and artists who share their work with the world. </p>
                <p>Special thanks to the following platforms:</p>
                <ul>
                  <li>
                    <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer"><b>Unsplash</b>:</a>{" "}
                    Generous community of photographers providing high-quality, royalty-free images that breathe life into this project.
                  </li>
                  <li>
                    <a href="https://istockphoto.com" target="_blank" rel="noopener noreferrer"><b>iStockPhoto</b>:</a>{" "}
                    Premium source for stock photos, illustrations, and videos that enhance the visual appeal of this application.
                  </li>
                  <li>Any other mentions we may be forgetting – We deeply appreciate the contributions from all other sources that have played a role in creating the visual experience of this application.</li>
                </ul>
                <p>Your creativity enriches our project, and we are grateful for the opportunity to showcase your amazing work.</p>
              </div>
            </div>
          </div>

          <div className="card p-1 mt-4" id="developer-credits">
            <div className="card-body">
              <div className="card-title flex-just-center">
                <h5>Developer</h5>
              </div>

              <p>
                This app was developed by <a href="https://github.com/gicodes" target="_blank" rel="noopener noreferrer">
                <b>Gideon Iduma</b>
                </a> in collaboration with  <a href="https://github.com/KrownWealth" target="_blank" rel="noopener noreferrer">
                <b>Adeola Abdulramon</b>
                </a>.
              </p>
              <span>You can find more about this Project from the  <a href="https://github.com/gicodes/afro-fashion" target="_blank" rel="noopener noreferrer">
                  <b>source code</b>
                </a>.</span>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default CreditsPage;
