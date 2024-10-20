import { Chat } from './Chat'
import { ConversationPicker } from './ConversationPicker';
import { useState } from 'react';

import './App.css';

function App() {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <ConversationPicker onChange={setSelectedFriend} />
        {selectedFriend && <Chat friendUsername={selectedFriend}/>}
      </header>
    </div>
  );
}

export default App;
