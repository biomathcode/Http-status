# Http Status 

github repo: [here](https://github.com/pratiksharm/Http-status)

atlassian marketplace: [here](https://developer.atlassian.com/console/myapps/78895b38-ebe2-4486-ac01-310a586b8653/overview)

## ⚡ Idea

### Story behind the idea

A while back i was working in a startup. We were three people mostly, backend developer, me the frontend guy and the idea guy. While working there the most of the issues that were related to http status and api calls. We mostly will keep asking "What's the response?".

As, the team got bigger and we added a lot of new interns. They too started working with api's and some of them would have a similar issue mostly. If some had a 401 issue I would have to tell them to authorize. 

### Actual Idea

> Either you are above the api or below the api

Http status is basically a custom issue field in a jira issue. I think it can be of great help while working on making rest apis. Since, most of the issue with the same response error will have the same solution. The frontend guys or the tester would be making the same mistakes, those issue can be solved and clubed together. 

This is a very simple, yet something which can give high utility and productivity. Highly helpful for days when the backend developer and fronend developer join their hands. 

Backend developer 🤝 front developer 

"What's the response?" 

## ⚙️ What it does

### Http status

- Custom field for http status for working with rest api's
- Open sourced
- All the http response (1XX, 2XX, 3XX, 4XX, 5XX)

App for jira

type: custom field in issue

target audience: DevOps (testers, QA, backend, frontend)

function : organisation, utility 

### How it works

Add the http response custom field in your issue panel. Now, you can organise your issue based on the http response they have. 

## Accomplishments

- Good UI
- User experience is great
- Highly utility
- Open sourced
- Free ( when i will release it)

## What's next for http response

- [ ]  Give more customization options
- [ ]  Create an  admin page based on the http response
- [ ]  Working more on organising the issues.

## Feedback, Feedback, Feedback

Since, I mostly made paletto for my own utility. I am quite satisfied with what i have build. 

I would love to hear your feedbacks. 

- How can i make it better for you?

- Do you think you would like to have this app in your organisation?

- Maybe you would have a better perspective.

- Just a critic !

email me at : sharma.pratik2016@gmail.com

or

fork it.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

Once you have logged into the CLI (`forge login`), follow the steps below to install the app onto your site:

1. Clone this repository
2. Run `forge register` to register a new copy of this app to your developer account
3. Run `npm install` to install your dependencies
4. Run `forge deploy` to deploy the app into the default environment
5. Run `forge install` and follow the prompts to install the app

## Usage

* Go the the list of custom fields.
* Find the *Http Status* custom field.
* Click the *more* menu, and then select *Associate to Screens*.
* Check the screens you want to use the field on, and then click *Update*.

## Documentation

The app consists of one custom field defined in the `manifest.yml` file. 
The custom field's view is implemented by the `renderFieldView` function defined in `/src/index.jsx`. 
The custom field�s editing experience is implemented by the `renderFieldEdit` function defined in `/src/index.jsx`. 

## Contributions

Contributions to Http Status Custom Field are welcome! Please see write an issue

## License

Copyright (c) 2020 pratiksharm
Apache 2.0 licensed, see [LICENSE](./LICENSE) file.