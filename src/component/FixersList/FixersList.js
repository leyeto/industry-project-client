import React from "react";
import axios from 'axios'
import FixerItem from "../FixerItem/FixerItem";
import "./FixersList.scss";

const API_ROOT = process.env.REACT_APP_BACKEND_URL;

export default function FixersList(props) {
    // const [userPostcode, setUserPostcode] = useState(props.postcode)

    const getPostcodeData = async ((postcode) => {
        try {
            const {data} = await axios.get(`https://api.postcodes.io/postcodes/${postcode}`);
            let { newData } = await axios.get(`${API_ROOT}/fixers/${data.result.latitude}/${data.result.longitude}`);
            return newData;
        } catch (error) {
            console.log("Error: ", error);
            
        }
    });

const orderedList = getPostcodeData(props.postcode)
  const fixersList = orderedList.map((fixer) => {
    return <FixerItem key={fixer.id} fixer={fixer} />;
  });

  return (
    <section className="fixers-list">
      <h2 className="fixers-list__title">NEXT VIDEOS</h2>
      <ul className="fixers-list__list">{fixersList}</ul>
    </section>
  );
}

