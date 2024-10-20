# Chat app

An extremely basic chat application. Still no API, no PWA, no caching of messages, no optimization at all.

## What is implemented
Only:
1. Writing messages and displaying them. Everything is saved in memory.
2. Choosing a conversation partner from a list.

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

1. In this implementation, when choosing a new conversation partner and going back, the sent messages appear lost. This is because, on selecting a new friend, it'll simulate fetching the messages again (which, right now, are only 2 random messages). One way to improve this would be to use Redux to save all the fetched and sent messages in memory, with no need to fetch them over again when selecting other conversations.


