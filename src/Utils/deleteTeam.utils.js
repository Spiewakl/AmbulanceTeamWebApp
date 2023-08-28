export async function deleteTeam(refresh, id){
    const token = window.localStorage.getItem("token");
    const result = await fetch(`http://localhost:4000/Team/${id}`,{method: "DELETE", headers: {"Content-Type":"application/json", "Authorization": "Bearer " + token}})
    refresh()
  }