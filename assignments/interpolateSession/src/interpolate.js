const isEmpty = (sessionArray) => {
  return sessionArray.length === 0
}

const interpolate = (value, session = {}, options = {}) => {
  const { leftDelimiter, rightDelimiter} = options;
  const sessionArray = Object.keys(session)
  const list = isEmpty(sessionArray) ? '.*?' : sessionArray.join('|');
  var regExp = new RegExp( leftDelimiter + '(' + list + ')' + rightDelimiter , 'g');
  return value.replace(regExp, function (match, capture) { return session[capture] ? session[capture] : ''  });
};

module.exports = { interpolate }
