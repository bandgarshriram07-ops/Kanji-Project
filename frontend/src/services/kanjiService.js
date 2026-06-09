import { use } from "react";

const API_BASE = "https://kanji-project-vuuf.onrender.com" || "http://localhost:3000";
const BASE_URL = `${API_BASE}/api/kanji`;




export const fetchKanjiById = async (id) => {
  try {
    let response = await fetch(`${BASE_URL}/${id}`,{
      method : "GET",
      credentials : "include"});
    const data = await response.json();
    return data;
  } catch (err) {
   console.log(err);
  }
};

export const addKanji = async (formData) => {
  try {
    let response = await fetch(`${BASE_URL}`, {
      method: "POST",
      credentials : "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return {ok : response.ok, data : data,message : response.message};
  } catch (err) {
    console.log(err);
    return {ok : false, message : err, messages: err.message};
    
  }
};

export const updateKanji = async (id, formData) => {
  try {
    let response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      credentials : "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(formData.jlpt);
    const data = await response.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
};

export const deleteKanji = async (id) => {
  try{
      let response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      credentials : "include",
    });
    const data = await response.json();
    return data;
  }catch(err){
    console.log(err);
  }
}

export const register = async (userData) => {
  try {
    const REGISTER_URL = `${API_BASE}/api/register`;
    let response = await fetch(REGISTER_URL, {
      method: "POST",
      credentials : "include",
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

export const login = async (email,password) => {
  try {
    let response = await fetch(`${API_BASE}/api/login`, {
      method: "POST",
      credentials : "include",
      body: JSON.stringify({email,password}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const userData = await response.json();
    console.log("api is called");
    return { ok: response.ok, data: userData };
  } catch (err) {
    console.log(err);
  }
};

export const logOutUser = async () => {
  try{
    const res = await fetch(`${API_BASE}/api/logout`,{
      method : "POST",
      credentials : "include"
    });
    const data = await res.json();
    return data;
  }catch(err){
    console.log(err);
  }
}


export const getKatakana = async () => {
  try{
    const res = await fetch(`${API_BASE}/api/katakana`,{
      method : "GET",
      credentials : "include"
    });
    const data = await res.json();
    return data;

  }catch(err){
    console.log(err);
  }
};

export const getSearchKanji = async (query) => {
  try{
    const res = await fetch(`${API_BASE}/api/search?q=${query}`,{
      method : "GET",
      credentials : "include"
    });
    const data = await res.json();
    return {ok : res.ok, data : data,message : data.message};

  }catch(err){
    console.log(err);
  }
};