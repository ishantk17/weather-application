import React from "react";
import { useEffect, useState } from "react";
import ForecastCard from "./components/ForecastCard";
import CurrentCard from "./components/CurrentCard";
import bg from "./Resources/beach1.png";
function App() {
  const [city, setCity] = useState("");
  const [current, setCurrent] = useState();
  const [location, setLocation] = useState();
  const [forecast, setForecast] = useState();
  const [time, setTime] = useState();
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const ExtractDate = (timestamp) => {
    const dateObj = new Date(timestamp);

    const time = dateObj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateAndDay = dateObj.toLocaleDateString("en-US", options);
    setTime(time);
    console.log("Time:", time);
    console.log("Date and Day:", dateAndDay);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=714623d0281140089f9104234242504&q=${city}&days=5`
    );
    const data = await res.json();
    console.log(data);
    setCurrent(data.current);
    setLocation(data.location);
    setForecast(data.forecast.forecastday);
    ExtractDate(data.location.localtime);
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen w-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center justify-center h-[30%]">
        <form className=" w-[30%] flex items-center gap-3">
          <input
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="Enter City Name"
            className="bg-gray-200 px-5 py-2 outline-none rounded-md"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-white rounded-sm px-5 py-2"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly items-center">
        <CurrentCard current={current} location={location} time={time}/>
        <ForecastCard forecast={forecast}/>
      </div>

    </div>
  );
}

export default App;
