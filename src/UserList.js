import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
function Users() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);


  return (
    <div>
        <h2>List of Users</h2>
    {loading && <div>Loading</div>}
    {!loading && (
      <div className='card2'>
        {data.map(item => ( <div className='card'>
                                <img alt='profile img' src='https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg'width={200}/>
                                <p>{item.name}</p>
                                <p>{item.username}</p>
                            </div>
                        )
                )
        }
      </div>
    )}
    </div>
  );
}

export default Users;
