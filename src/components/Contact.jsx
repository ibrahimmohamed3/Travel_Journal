function Contact(props) {
    // console.log(props)
  return (
    <div>
      <article className="contact-card">
        <img src="./images/mr-whiskerson.png" alt="Photo of Mr. Whiskerson" />
        <h3>{props.name}</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" alt="phone icon" />
          <p>{props.contact}</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" alt="mail icon" />
          <p>{props.email}</p>
        </div>
      </article>
    </div>
  );
}


export default Contact