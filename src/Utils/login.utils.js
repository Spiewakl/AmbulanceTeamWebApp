export async function onLogin(navigate, login, password, source, page){
  const data={
    "name": login,
    "password": password,
    "source": source,
  }
  const response = await fetch("http://localhost:4000/auth/login",{method: "POST", body: JSON.stringify(data), headers: {"Content-Type":"application/json"}} );
  const access = await response.json();
  console.log(access);
    navigate(page)
  }