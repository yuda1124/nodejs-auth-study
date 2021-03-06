const onClickSubmit = async (e) => {
  e.preventDefault();
  const id = document.querySelector('#userId').value;
  const password = document.querySelector('#userPw').value;
  const name = document.querySelector('#userName').value;
  let response = await fetch('/signUp', {
    method: 'POST',
    body: JSON.stringify({ id, password, name }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  response = await response.json();
  if (response.success) window.location.href = '/';
};

const onClickCancel = (e) => {
  e.preventDefault();
  const id = document.querySelector('#userId');
  const pw = document.querySelector('#userPw');
  id.value = '';
  pw.value = '';
};

window.onload = function () {
  document
    .querySelector('.btn_submit')
    .addEventListener('click', onClickSubmit);
  document
    .querySelector('.btn_cancel')
    .addEventListener('click', onClickCancel);
};
