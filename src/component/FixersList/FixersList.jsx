import React, { useState, useEffect } from "react";
import axios from "axios";
import FixerItem from "../FixerItem/FixerItem";
import "./FixersList.scss";

const API_ROOT = process.env.REACT_APP_BACKEND_URL;

export default function FixersList({ postcode }) {
  const [fixersList, setFixersList] = useState([]);

  useEffect(() => {
    try {
      const getPostcodeData = async (postcode) => {
        const { data } = await axios.get(
          `https://api.postcodes.io/postcodes/${postcode}`
        );
        const response = await axios.get(
          `${API_ROOT}/fixers/${data.result.latitude}/${data.result.longitude}`
        );
        if (response) {
          const itemList = response.data.map((fixer) => {
            return <FixerItem key={fixer.id} fixer={fixer} />;
          });
          setFixersList(itemList);
        }
      };
      getPostcodeData(postcode);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (fixersList.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <section className="fixers-list">
      <label for="sort">Sort results:</label>
      <select id="sort" name="sort">
        <option value="byDistance">by Distance</option>
        <option value="byPrice">by Price</option>
        <option value="byRating">by Rating</option>
      </select>
      <ul className="fixers-list__list">{fixersList}</ul>
    </section>
  );
}
