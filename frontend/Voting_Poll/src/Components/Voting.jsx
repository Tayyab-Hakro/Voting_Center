import '../Components/./Css/Voting.css'
const Voting = () => {
  return (
    <div className="voting-container">
      <h1 className="poll-header">Voting Polls</h1>

      <div className="poll">
        <h2 className="poll-question">Which is the best framework: React.js or Next.js?</h2>
        <button className="poll-button">React.js</button>
        <button className="poll-button">Next.js</button>
      </div>

      <div className="poll">
        <h2 className="poll-question">Which is better for styling: Tailwind CSS or Bootstrap?</h2>
        <button className="poll-button">Tailwind CSS</button>
        <button className="poll-button">Bootstrap</button>
      </div>

      <div className="poll">
        <h2 className="poll-question">Which JavaScript runtime is better: Node.js or Deno?</h2>
        <button className="poll-button">Node.js</button>
        <button className="poll-button">Deno</button>
      </div>
    </div>
  );
};

export default Voting;
