import { useEffect } from "react";
import { useSelector } from "react-redux";
const SetPage = (setPagina) => {
  const { countries } = useSelector((state) => state);
  useEffect(() => {
    setPagina(1);
  }, [countries]);
};

export default SetPage;
