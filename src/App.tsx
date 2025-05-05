import { useEffect, useState } from "react";
import "./App.css";
import BlogCard from "./components/BlogCard";
import dummyData from "./db/dataset";
import BodyProps, { InitialBodyCard } from "./types/Types";

function App() {
  const [dataCard, setDataCard] = useState<BodyProps>(InitialBodyCard);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dummyData.length);
    setDataCard(dummyData[randomIndex]);
  }, []);

  if (dataCard === InitialBodyCard) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen box-content">
      <BlogCard profileData={dataCard}/>
    </div>
  );
}

export default App;
