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

## Points for improvement and optimization:
In this implementation, when choosing a new conversation partner and going back, the sent messages appear lost. This is because, for every mount of the Chat component, it'll simulate fetching the messages again (which, right now, are 2 random messages). One way to improve this would be to use Redux to save all the fetched and sent messages in memory, with no need to fetch them over again when selecting other conversations.

### How to run it

```
npm install && npm start
```
