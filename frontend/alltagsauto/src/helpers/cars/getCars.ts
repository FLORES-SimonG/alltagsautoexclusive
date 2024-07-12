const apiUrl = process.env.NEXT_PUBLIC_API_URL
export async function getCars(): Promise<any> {
    try {
      const response = await fetch(`${apiUrl}/cars`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al traer los autos", error);
      throw error; 
    }
  }