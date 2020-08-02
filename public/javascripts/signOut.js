const onClickSignOut = (e) => {
  e.preventDefault();
  fetch('/logout/session', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        window.location.href = '/';
      }
    });
};

window.onload = function () {
  document
    .querySelector('.btn_logout')
    .addEventListener('click', onClickSignOut);
};
