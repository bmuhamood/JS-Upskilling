function getAverage(scores) {
  const total = scores.reduce((sum, num) => sum + num, 0);
  return total / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  return `Class average: ${average}. Your grade: ${grade}. You ${passed ? "passed" : "failed"} the course.`;
}

