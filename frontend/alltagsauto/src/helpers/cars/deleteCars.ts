const apiUrl = process.env.NEXT_PUBLIC_API_URL
import Cookies from "js-cookie";
export async function deleteCars(id:any): Promise<any> {
  const tokenData = Cookies.get('token');
  let token = '';

if (tokenData) {
  const tokenObject = JSON.parse(tokenData); 
  token = tokenObject.token; 
}
    fetch(`${apiUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al eliminar el auto');
          }
        })
        .catch(error => {
          console.error('Error al eliminar el auto:', error);
        });
  } 