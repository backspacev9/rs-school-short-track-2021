/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const em = email;
  const res = em.substring(em.lastIndexOf('@') + 1);
  return res;
}

module.exports = getEmailDomain;
