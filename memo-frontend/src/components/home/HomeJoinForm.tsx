import React, { useState } from 'react';
import axios from 'axios';

const HomeJoinForm = () => {
  const [channel, setChannel] = useState('');
  const [error, setError] = useState('');
  const [border, setBorder] = useState('');
  const apiUrl = process.env.REACT_APP_MEMO_API_URL;
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!channel) {
      setError('Invalid channel');
      setBorder('border-red-500');
      setTimeout(() => {
        setBorder('');
      }, 10000);
    } else {
      try {
        await axios.post(apiUrl + '/users', { channel: channel })
          .then(((response) => {
            console.log(response)
          }))
          .catch((error) => {
            console.log(error)
          });
        setChannel('');
        setError('');
        setBorder('');
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <form className="mx-auto p-10" onSubmit={handleSubmit}>
      <div className={'relative'}>
        <div className={'block'}>
          <div className={'inline-block'}>
            <input
              disabled={true}
              className={`p-2 m-2 rounded border-gray-400 border-2 cursor-not-allowed ${border}`}
              type="text"
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
              placeholder="Comming soon"
            />

          </div>
          <div className={'inline-block'}>
            <button
              disabled={true}
              className='w-[200px] bg-gray-500 text-white py-2 px-4 rounded
              mt-2 bg-blue-600 hover:bg-gray-700 cursor-not-allowed '
              type="submit"
            >
             Join to game
            </button>
          </div>
        </div>
        <div className={'block text-center'}>
          {error && (
            <p className="text-red-500 text-xs mt-2">{error}</p>
          )}
        </div>

      </div>

    </form>
  );
};

export default HomeJoinForm;