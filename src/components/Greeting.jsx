import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting} Thank you for visiting!</h3>
      <button style={{
        backgroundColor: '#003344',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
        marginBottom: '10px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      }}
        onClick={() =>
          setGreeting(messages[Math.floor(Math.random() * messages.length)])
        }
      >
        New Greeting
      </button>
    </div>
  );
}
