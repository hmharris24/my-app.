import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: "19",
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    feelsLike: "62",
    humidity: "40",
    wind: "10"
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
          <div className="col-2">
            <input type="submit" value="Current" className="btn btn-success" />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1> {weatherData.city} </h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li> {weatherData.description} </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">ºF</a> | <a href="/">ºC</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels Like: {weatherData.feelsLike}º</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );