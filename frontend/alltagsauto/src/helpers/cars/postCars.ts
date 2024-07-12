const apiUrl = process.env.NEXT_PUBLIC_API_URL
export async function postCars(newsResponse: any): Promise<any> {
  try {
      const response = await fetch(`${apiUrl}/cars`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newsResponse) 
      });

      if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error al crear tarjeta", error);
      throw error;
  }
}