export async function GET() {

 const res = await fetch(
   "https://api.github.com/users/Mufti-code/repos"
 )

 const data = await res.json()

 const repos = data.slice(0,6)

 return Response.json(repos)

}