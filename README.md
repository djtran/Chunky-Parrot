# Chunky Parrot

Teaching tool meant to provide students with rule-based workflows for ELA. Students can select a defined workflow, respond to each prompt, and then take the concatenated output.

Available on https://chunky-parrot.web.app/

### Workflows
Workflows are a series of slides with a prompt and a response box. At the end of all the slides, the responses will be compiled into some result.

Workflow definitions exist in the `public/workflows` directory in JSON form. Every JSON file will be read and generated into a page on the site for student usage.

### Developing

1. Work in `src/`
2. Host local server with `npm start`
3. View at `http://localhost:3000`

### Deploying to Firebase
```
npm run build
firebase deploy
```


# Todo list from my wife

- punctuation reminders (cute little oop)
- add a word bank and cross out words as they are found in the result.
- Validation for citing text.
- Baby parrot growth while you accomplish tasks and use words from word bank.