import request from 'superagent';

export const getData = async (url) => {
  try {
    if (!url) return 'Please Enter A URL';
    const { body } = await request
      .get(url);

    return JSON.stringify(body, null, 2);

  } catch (e) {
    return 'Uh-Oh...';
  }
};

export const postData = async (url) => {
  try {
    if (!url) return 'Please Enter A URL';
    const { body } = await request
      .post(url)
      .set('Content-Type', 'application/json')
      .send(body);
    return JSON.stringify(body, null, 2);
  }
  catch (e) {
    return 'Uh-Oh...';
  }
};

export const updateData = async (url) => {
  try {
    if (!url) return 'Please Enter A URL';
    const { body } = await request
      .put(url)
      .set('Content-Type', 'application/json')
      .send(body);
    return JSON.stringify(body, null, 2);
  }
  catch (e) {
    return 'Uh-Oh...';
  }
};

export const deleteData = async (url) => {
  try {
    if (!url) return 'Please Enter A URL';
    const { body } = await request
      .delete(url)
      .set('Content-Type', 'application/json')
      .send(body);
    return JSON.stringify(body, null, 2);
  }
  catch (e) {
    return 'Uh-Oh...';
  }
};



