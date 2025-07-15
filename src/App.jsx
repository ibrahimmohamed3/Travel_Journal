import "./App.css";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="contacts">
      <Contact 
      img = './images/mr-whiskerson.png'
      name ="Mr. Whiskerson"
      contact = "(212) 555-1234"
      email = 'mr.whiskaz@catnap.meow'
      />
      <Contact
      img = "./images/fluffykins.png"
      name = "FluffyKins"
      contact = "(212) 555-2345"
      email ="fluff@me.com"
      />
      <Contact
      img = "./images/felix.png"
      name = "Felix"
      contact = "(212) 555-2545"
      email ="fluff@me.com"
      />
      <Contact 
      img = "./images/pumpkin.png"
      name = "Pumpkin"
      contact = "(212) 555-2645"
      email ="pum@me.com"
      />
    </div>
  );
}

export default App;
