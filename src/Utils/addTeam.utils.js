export function addTeam(navigate){
    navigate('/addteam')
  }
 
export async function newTeam(navigate, login, password){
  const data={
    "name": login,
    "password": password,
  }

  const token = window.localStorage.getItem("token");
    const result = await fetch(`http://localhost:4000/Team/`,{method: "POST", body: JSON.stringify(data), headers: {"Content-Type":"application/json", "Authorization": "Bearer " + token}})
    navigate('/dispatcher')
}
