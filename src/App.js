import Card from "./Components/Card";

import CardContact from "./Components/CardContact";
import { data } from "./Data/data";



function App() {
  return (
    <div className="App flex justify-between justify-center gap-16">
      <Card
        svgWacthed={data.rias.svgWacthed}
        svgLike={data.rias.svgLike}
        img={data.rias.img}
        name={data.rias.name}
        job={data.rias.job}
        like={data.rias.like}
        wacthed={data.rias.wacthed}
      />
      <CardContact
        img={data.sue.img}
        name={data.sue.name}
        job={data.sue.job}
        map={data.sue.map}
        message={data.sue.message}
      />
    </div>
  );
}

export default App;
