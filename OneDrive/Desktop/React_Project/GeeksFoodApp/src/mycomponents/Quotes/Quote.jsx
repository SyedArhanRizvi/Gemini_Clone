import React from 'react';
import quotesData from './Q.json'; 
import './Quote.css'

const Quote = () => {
    return (
        <div className="quote-container">
            {quotesData.map(quote => (
                <div key={quote.id} className="quote-card">
                    <p className="quote-text">{quote.quote}</p>
                    <p className="quote-author">- {quote.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Quote;