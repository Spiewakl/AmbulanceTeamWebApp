

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

export async function changeStatus(status, id, ref){
  const token = window.localStorage.getItem("token");
  const data={
    "status": status,
  }
  const result = await fetch(`http://localhost:4000/Team/${id}`,{method: "PUT", body: JSON.stringify(data), headers: {"Content-Type":"application/json", "Authorization": "Bearer " + token}})
  ref();

}
