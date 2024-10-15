export const fetchSubjects = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const url = `${baseUrl}/sub.json`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch subjects');
      const data = await response.json();
      return data.subjects;
    } catch (error) {
      console.error('Error fetching subjects:', error);
      return [];
    }
  };