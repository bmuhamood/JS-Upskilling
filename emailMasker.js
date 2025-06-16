function maskEmail(email) {
  const atIndex = email.indexOf('@');
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  return username[0] + '*'.repeat(username.length - 2) + username.slice(-1) + domain;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));
