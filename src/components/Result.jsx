import PropTypes from "prop-types";

function Result({answerSum}) {
  return (
    <div>{answerSum}</div>
  )
}

Result.propTypes = {
    answerSum: PropTypes.number
}

export default Result