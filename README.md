# SupportAI Chat Widget component

## Installation
```bash
npm i @supportai.it/react-chat-widget
```

## Usage
Add the following component inside `src/App.js`.

```jsx
import { ChatWidget } from "@supportai.it/react-chat-widget"

function App() {
  return (
    <div className="App">
        {/* you code here */}

        <ChatWidget chatUrl="<chatUrl>" />
    </div>
  );
}
```

## Customization
| **Attribute**    | **Description**                                     | **Required** | **Example** |
|------------------|-----------------------------------------------------|--------------|-------------|
| chatUrl          | The link given by SupportAI to connect to the chat. | true         |             |
| buttonColor      | Custom color of the open chat button.               | false        | #e74266     |
| buttonHoverColor | Custom color on hover of the open chat button.      | false        | #d6365d     |
| buttonSize       | Size of the chat button.                            | false        | 64px        |
| frameWidth       | Width of the chat frame.                            | false        | 400         |
| frameHeight      | Height of the chat frame.                           | false        | 600         |