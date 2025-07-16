import mountFujiImg from "./assets/mount-fuji.jpg";
import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    );
  });

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}
