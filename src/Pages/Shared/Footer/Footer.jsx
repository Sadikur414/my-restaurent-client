const Footer = () => {
  return (
    <div>
      <footer className="footer bg-neutral text-neutral-content p-10 md:flex md:justify-between">
        {/* Left Side - 50% */}
        <aside className="md:w-1/2 mb-6 md:mb-0">
          <p>
            Contuct Us
            <br />
            123 ABS Street, Uni 21, Bangladesh
            <br />
            Mon - Fri: 08:00 - 22:00
            <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </aside>

        {/* Right Side - 50% */}
        <nav className="md:w-1/2">
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <div>
              <h1>
                Follow Us
                <br />
                Join us on social media
              </h1>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
