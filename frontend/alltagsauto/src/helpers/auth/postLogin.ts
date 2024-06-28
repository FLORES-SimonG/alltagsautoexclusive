
const apiUrl = process.env.NEXT_PUBLIC_API_URL
export async function postLogin(newsResponse: any): Promise<any> {
    try {
        const response = await fetch(`${apiUrl}/auth/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newsResponse),
        });
    
        if (!response.ok) {
          throw new Error("Failed to post Google login");
        }
    
        const token = await response.text();
        
        return token;
      } catch (error) {
        console.error("Error en postGoogleLogin:", error);;
      }
  }