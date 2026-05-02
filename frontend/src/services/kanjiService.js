const BASE_URL = "http://localhost:3000/api/kanji";

const getAuthHeader = () => ({
 "content-type": "application/json",
 "Authorization": "Bearer " + localStorage.getItem("token")
});


export const fetchKanjiById = async (id) => {
  try {
    let response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return resizeBy.status(500).json({ message: err.message });
  }
};

export const updateKanji = async (id, formData) => {
  try {
    let response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: getAuthHeader(),
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return resizeBy.status(500).json({ message: err.message });
  }
};

export const deleteKanji = async (id) => {
  try{
      let response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: getAuthHeader(),
    });
    const data = await response.json();
    return data;
  }catch(err){
    console.log(err);
  }
}

export const register = async (userData) => {
  try {
    const REGISTER_URL = "http://localhost:3000/api/register";
    let response = await fetch(REGISTER_URL, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (err) {
    console.log(err);
  }
};

export const login = async (userdata) => {
  try {
    let response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const userData = await response.json();
    return { ok: response.ok, data: userData };
  } catch (err) {
    console.log(err);
  }
};
