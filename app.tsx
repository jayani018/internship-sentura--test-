import React from 'react';
import { WeavyClient, WeavyProvider, Chat } from '@weavy/uikit-react';

const weavyClient = new WeavyClient({
    url: "{WEAVY-SERVER}",
    tokenFactory: async (refresh) => "{ACCESS-TOKEN}"
});

function App() {
    return (
        <div className="App">
            <WeavyProvider client={weavyClient}>
                <Chat uid="demochat" />
            </WeavyProvider>
        </div>
    )
}

export default App;
