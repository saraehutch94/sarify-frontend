function Footer(props) {
  return (
    <div
      className="footer"
      style={{ color: "white", backgroundColor: "black" }}
    >
      <div>2022 Sarify</div>
      <div>
        <a
          href="https://github.com/saraehutch94/sarify-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://i.imgur.com/X20Qz9B.png" alt="github-watermark" />
        </a>
        <div>Created by Sara Hutchinson</div>
      </div>
    </div>
  );
}

export default Footer;
