export const BASE_URL = 'https://www.a.news-shv.students.nomoreparties.co';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((response) => response.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      } else {
        return data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export const getUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(data => data);
}

export const saveNews = (article) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = article;
  return fetch(`${BASE_URL}/articles`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.jwt}`,
      },
      body: JSON.stringify({ keyword, title, text, date, source, link, image })
    }).then((res) => {
      return res.json();
    }).catch((error) => console.log(error))
}

export const getArticles = (jwt) => {
  return fetch(`${BASE_URL}/articles`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': ` Bearer ${jwt}`,
      },
    }).then((res) => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    })
}

export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': ` Bearer ${localStorage.jwt}`,
      },
    }).then((res) => {
      return res.json();
    }).catch((error) => {
      console.log(error);
    })
}