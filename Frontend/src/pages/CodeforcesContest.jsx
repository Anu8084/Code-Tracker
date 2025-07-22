import React, { useEffect, useState } from 'react';

const CodeforcesContest = () => {
  const [contests, setContests] = useState({
    future: [],
    present: [],
    past: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch('https://code-tracker-1-fo9j.onrender.com/api/profile/codeforces/contests');
        if (!response.ok) {
          throw new Error('Failed to fetch contests');
        }
        const data = await response.json();
        setContests(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  const renderContests = (list) => (
    <ul className="grid gap-4">
      {list.map((contest) => (
        <li
          key={contest.contest_id}
          className="p-4 border rounded-lg shadow hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold">{contest.contest_name}</h3>
          <p>
            <strong>Start:</strong> {new Date(contest.contest_start_time).toLocaleString()}
          </p>
          <p>
            <strong>End:</strong> {new Date(contest.contest_end_time).toLocaleString()}
          </p>
          <p>
            <strong>Duration:</strong> {contest.contest_duration} minutes
          </p>
          <a
            href={contest.contest_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View on Codeforces
          </a>
        </li>
      ))}
    </ul>
  );

  if (loading) return <p className="text-center">Loading contests...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Codeforces Contests</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-600">Upcoming Contests</h2>
        {contests.future.length ? renderContests(contests.future) : <p>No upcoming contests.</p>}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-600">Ongoing Contests</h2>
        {contests.present.length ? renderContests(contests.present) : <p>No ongoing contests.</p>}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Past Contests</h2>
        {contests.past.length ? renderContests(contests.past) : <p>No past contests available.</p>}
      </div>
    </div>
  );
};

export default CodeforcesContest;
