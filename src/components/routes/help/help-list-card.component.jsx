import "./help.styles.scss";

export const HelpListCard = () => {
  return (
    <section className="helpListCard">
      <div id="getting-started">
        <h4>Getting Started</h4>

        <h6 className="pt-2"><u>What is Afro Fashion?</u></h6>
        <p>
          Afro Fashion is a complete e-commerce platform that lets you enjoy shopping services 
          and also start, grow and manage your own business.
        </p>
        <p>Join and shop for your favorite items- from the most affordable shops across Africa</p>
        <p>
          Sell in multiple places, including web, mobile, social media, online
          marketplaces without worrying about your customer base
        </p>
      </div>
      <br/>
      
      <div id="buying">
        <h6><u>What do I need, to start buying?</u></h6>
        <p>
          To start buying on AfroFashion, you&apos;ll need an AfroFashion account and
          a subscription. There is a free and a paid version.{" "}
        </p>
        <p>
          Get started by signing up for AfroFashion. Then set up your account by
          adding your favorite items.{" "}
        </p>
        <p>
          {" "}
          If you do not have any particular product or brand in mind, you can view all AfroFashion products from the <a  className="link" href="/shop">shop</a> page.
        </p>
      </div>
      <br />
     
      <div id="selling">
        <h6><u>What do I need, to start selling?</u></h6>
        <p>
          To start selling on AfroFashion, you&apos;ll need an AfroFashion account and
          real products to sell.{" "}
        </p>
        <p>
          Get started by signing up as a <a href="/seller" className="link">seller</a> on AfroFashion. Then set up your brand and add
          your products.
        </p>
        <p>
          If you don&apos;t have products to sell yet, dropshipping might be a
          good option for you.
        </p>
      </div>
      <br />

      <div id="shipping">
        <h6><u>Shipping with Afro Fashion</u></h6>
        <p>
          To start shipping with AfroFashion, you&apos;ll need a Courier service that is registered and available within the 
          the region (Africa).
        </p>
        <p>Get started by contacting Customer care with the neccessary details about your shipping plan and services.</p>
        <p>
          <b>Please Note</b>: AfroFashion will not be responsible for the shipping cost and safety unless insured.
        </p>
      </div>
      <br />

      <div id="payments">
        <h6><u>Payments on Afro Fashion</u></h6>
        <p>
          To receive and send payments on AfroFashion, you&apos;ll need to setup a payment method with 
          either <a className="link" href="https://flutterwave.com">Flutterwave</a> or <a className="link" href="https://paystack.com">Paystack</a>
        </p>
        <p>
          After this setup is complete, add your payment information to your profile (as a seller) to receive
          payment from buyers.
        </p>
        <p>
          Alternatively, you are free to use your own accounts (as a buyer) to send money through these 
          payment channels on the AfroFashion payment portals.
        </p>
      </div>
    </section>
  );
};
