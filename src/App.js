import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function App() {
  // User authentication state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Comic management state
  const [comics, setComics] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [newComicName, setNewComicName] = useState('');
  const [newComicDescription, setNewComicDescription] = useState('');
  const [newComicPrice, setNewComicPrice] = useState('');

  // Chat state
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const wsRef = useRef(null);

  // User authentication functions
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/register', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Comic management functions
  useEffect(() => {
    const fetchComics = async () => {
      const response = await axios.get(`/api/comics?page=${page}`);
      setComics((prevComics) => [...prevComics, ...response.data]);
      setPage((prevPage) => prevPage + 1);
      if (response.data.length < 10) {
        setHasMore(false);
      }
    };
    fetchComics();
  }, [page]);

  const handleAddComic = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        '/api/comics',
        {
          name: newComicName,
          description: newComicDescription,
          price: newComicPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setComics((prevComics) => [...prevComics, response.data]);
      setNewComicName('');
      setNewComicDescription('');
      setNewComicPrice('');
    } catch (error) {
      console.error(error);
    }
  };

  // Chat functions
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/ws');
    wsRef.current = ws;

    ws.onopen = () => {
      console.log('Connected to WebSocket server.');
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (!messageInput.trim()) {
      return;
    }
    const message = {
      content: messageInput,
      username: 'Anonymous',
    };
    wsRef.current.send(JSON.stringify(message));
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessageInput('');
  };

  // Render functions
  const renderLoginForm = () => {
    return (
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  };

  const renderRegisterForm = () => {
    return (
      <form onSubmit={handleRegister}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    );
  };

  const renderComicManagement = () => {
    return (
      <div>
        <form onSubmit={handleAddComic}>
          <label>
            Name:
            <input
              type="text"
              value={newComicName}
              onChange={(event) => setNewComicName(event.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={newComicDescription}
              onChange={(event) => setNewComicDescription(event.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={newComicPrice}
              onChange={(event) => setNewComicPrice(event.target.value)}
            />
          </label>
          <button type="submit">Add Comic</button>
        </form>
        <InfiniteScroll
          dataLength={comics.length}
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<h4>No more comics to load.</h4>}
        >
          {comics.map((comic) => (
            <div key={comic.id}>
              <h2>{comic.name}</h2>
              <p>{comic.description}</p>
              <p>{comic.price}</p>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  };

  const renderChat = () => {
    return (
      <div>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <strong>{message.username}:</strong> {message.content}
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={messageInput}
          onChange={(event) => setMessageInput(event.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    );
  };

  // Main render function
  return (
    <div>
      {!isAuthenticated && (
        <>
          {renderLoginForm()}
          {renderRegisterForm()}
        </>
      )}
      {isAuthenticated && (
        <>
          {renderComicManagement()}
          {renderChat()}
        </>
      )}
    </div>
  );
}

export default App;
