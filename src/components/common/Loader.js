import React from 'react';
const loadingEmojiCount = 7;
const loadingEmojis = ['🍨', '🦄', '🥧', '🍵', '🧃', '☕️'];

export default function Loading() {
  const loadingEmoji = loadingEmojis[Math.floor(Math.random() * loadingEmojis.length)];
  return (
    <div className="loader-wrapper container-fluid">
      <div className="emoji">
        {[...Array(loadingEmojiCount)].map(i => (
          <span role="img" key={i}>
            {loadingEmoji}
          </span>
        ))}
      </div>
    </div>
  );
}
