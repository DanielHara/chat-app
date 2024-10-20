# Chat app

An extremely basic chat application. Still no API, no PWA, no caching of messages, no optimization at all.

## What is implemented
Only:
1. Writing messages and displaying them. Everything is saved in memory.
2. Choosing a conversation partner from a list.

Other requirements which are out of scope for this project, for now, are:

Functional:
1. Authentication
2. Groups
3. Replies, reactions
4. Sending images or files

Non-functional:
1. Performance
2. Accessibility
3. Browser-support
4. Offline usage


## How it looks like

https://github.com/user-attachments/assets/db1bc60a-7844-4a25-9fff-ddf92ca0fabc

## Time used
Approximately 2 hours.

## How to run it

```
npm install && npm start
```

## Points for improvement and optimization:
### API Architecture
```
interface Message {
  id: string,
  username: string,
  text: string,
  timestamp: Date,
}
```

In a production app, we'd need some APIs to fetch and send messages.

To fetch:
`/fetchMessages?conversationPartnerUsername=my_friend?cursor_id={cursor_id}` -> `Messages[]`

If you have too many messages (for example, by a friend you text everyday), you should have some pagination in place. I'd prefer cursor-based pagination over offset-based pagination, because messages get added quickly.

To send:
`/postMessage?message={message}` -> `Message`

### TO-DOs

1. In this implementation, when choosing a new conversation partner and going back, the sent messages appear lost. This is because, on selecting a new friend, it'll simulate fetching the messages again (which, right now, are only 2 random messages):
  https://github.com/DanielHara/chat-app/blob/f18851366aecf20dd3783b672731df06c3eb1b32/src/Chat/Chat.tsx#L23-L37 One way to improve this would be to use Redux to save all the fetched and sent messages in memory, with no need to fetch them over again when selecting other conversations.
2. How often should we check for new messages, by this approach of pulling by HTTP? We could use a websocket or Server Sent Events for retrieving messages, rather than pulling by HTTP every x seconds, which doesn't provide an instantaneous-like feeling, and introduces a lot of strain on the server.
3. Use a Service Worker and a PWA architecture to improve performance. A Service Worker sits between the browser and the internet, and can be used to cache already fetched messages for future use (so that the user doesn't have to wait for messages to be fetched), and assets, as well (like JS, CSS, fonts, and so on)
4. What happens if the user is offline and tries to send messages? They should be saved for later sending, like WhatsApp does, for example. This can be accomplished asyncronously using a Service Worker. Because the messages may be received by the server out of order, we should also save a timestamp of when the user sent the message.
5. If you have to many messages to display, you could use a Virtualized List to have in the DOM just the fraction of images which fit in the viewport, so that the browser doesn't slow down.
6. And much more! 



