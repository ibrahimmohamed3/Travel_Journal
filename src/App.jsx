import mountFujiImg from './assets/mount-fuji.jpg'
import Entry from "./components/Entry";
import Header from "./components/Header";

export default function App() {
  return (

<div>
            <Header />
            <Entry 
            img = {{
                src : {mountFujiImg},
                alt : "MountFuji"

            }}
            title = "Mount Fuji"
            country = "Japan"
            googleMapLink = "https://www.google.com/maps?q=mount+fuji"
            dates = "12 Jan, 2021 - 24 Jan, 2021"
            text = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            />
        </div>

  );
}


