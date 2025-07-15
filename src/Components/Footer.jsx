function Footer() {
  return (
    <>
      <div className="bg-accent">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <img src="./footer__logo.svg" />
          <p className="text-sm text-neutral-600">
            Copyright © 2023 Wizia. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
