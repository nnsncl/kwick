import React, { useEffect } from 'react';
import axios from 'axios';

function App() {

  async function getData() {
    try {
      const response = await axios.get('http://greenvelvet.alwaysdata.net/kwick/api/ping',{
        params: {
          dataType: 'json'
        }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      a
    </div>
  );
}

export default App;
