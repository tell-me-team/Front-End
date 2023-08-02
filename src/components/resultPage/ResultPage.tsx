import { useEffect, useState } from "react";
import { surveyGetApi } from "../../api/surveyApi";

const ResultPage = () => {
  const [result, setResult] = useState([]);
  const fetchData = async () => {
    const response = await surveyGetApi();
    const newRes = response.slice(0, 1);
    setResult(newRes);
    console.log(newRes);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
};

export default ResultPage;
