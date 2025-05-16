import React, { useState } from "react";
import "./kursValyut.css";

const KursValyut = () => {
  const [currency, setCurrency] = useState(null);

  const handleClick = async (code) => {
    try {
      const res = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/");
      const data = await res.json();
      const selected = data.find((item) => item.Ccy === code);
      setCurrency(selected);
    } catch (error) {
      console.error("xato: " + error.message);
    }
  };

  return (
    <div className="KursValyut">
      <h1>Курс Валют</h1>
      
      <div className="buttons">
        <button onClick={() => handleClick("USD")}>USD</button>
        <button onClick={() => handleClick("RUB")}>RUB</button>
        <button onClick={() => handleClick("EUR")}>EUR</button>
        <button onClick={() => handleClick("GBP")}>GBP</button>
        <button onClick={() => handleClick("CNY")}>CNY</button>
      </div>

      {currency && (
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Курс</th>
              <th>Номинал</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
         <tr>
    <td data-label="Название">{currency.CcyNm_RU}</td>
    <td data-label="Курс">{currency.Rate}</td>
    <td data-label="Номинал">{currency.Nominal}</td>
    <td data-label="Дата">{currency.Date}</td>
  </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default KursValyut;
