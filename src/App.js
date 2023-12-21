import React, {useState} from "react";
import ImageSearch from "./Components/ImageSearch"
import ImageList from "./Components/ImageList"

const App = () => {
  const [Images, setImages] = useState([])
  
  return (
    <div>
      <ImageSearch setImages={setImages} />
      <ImageList Images={ Images} />
    </div>
  );
}

export default App;
