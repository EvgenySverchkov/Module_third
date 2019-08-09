import React from "react";
import PropTypes from "prop-types";

import { daysToDate } from "../../services/date";

function getCorrectUserName(name) {
  return name || "Anonymous";
}

function getTextByBirthday(name, date) {
  if (!date) {
    return `Hello, ${name}!`;
  }

  const days = daysToDate(date);
  const isBirthdayToday = days === 0;

  return isBirthdayToday
    ? `Happy Birthday, ${name}!`
    : `Hello, ${name}! It's ${days} days left until your birthday`;
}

export default function GreetingsLabel(props){
	const { name, birthday } = props.userData;
	const userName = getCorrectUserName(name);
	const label = getTextByBirthday(userName, birthday);
	return (
		<span>{label}</span>
		);
}

GreetingsLabel.propTypes = {
  userData: PropTypes.object
};