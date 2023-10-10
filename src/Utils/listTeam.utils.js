export async function listTeam(){
    const token = window.localStorage.getItem("token");
    const response = await fetch("http://localhost:4000/Team",{method: "GET", headers: {"Content-Type":"application/json", "Authorization": "Bearer " + token}} );
    const teams = await response.json();
    console.log(teams);
    return teams;
}

export async function getTeam(id){
  const teams = await listTeam()
  const found = teams.find((element) => element.id === id);
  console.log(found)
  return found;
}
