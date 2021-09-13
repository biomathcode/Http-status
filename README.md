# Paletto

✨Beautiful Color palettes in confluence as macro

github repo: [here](https://github.com/pratiksharm/Paletto)

atlassian marketplace: [here](https://developer.atlassian.com/console/install/2119cb23-10ed-4e66-bae2-2ee73b1626ab?signature=4a3d24752ab82b6d8b698b9a96e64eb8784ebad26e78b27e56afbc5ab6e568ee&product=confluence)

## ⚡ Idea

### Approach

This is the first time I am participating in codegeist. For the idea part, I just went with **"me as a user"** approach. I started asking myself what type of app i should build that can be 

- Simple
- Minimalistic
- Works as utility
- Increases my productivity

### Actual Idea

As a front-end developer, i have to search a lot for good color palette. Design is such a trial and error process. I would end up opening multiple chrome tabs full of color palettes. When I am working with my team I become difficult and end up wasting a lot of time.

## ⚙️ What it does

### Paletto

- Gives nice color Palette of five color with their hex color codes
- Save the palette / get a new random one (works for single instance of macro)
- The palette can be download from confluence
- Works like charm
- Paletto is open sourced - git clone [here](https://github.com/pratiksharm/Paletto.git)

App for Confluence

type: Macro

target audience: front-end developer ( IT developer) and designers

function : utility, productivity, design

### How it works

I have a  json file of 1000 color palette that you can chose from. We randomly fetch one of the palettes and display it as svg in an image tag. Save it if you like the palette.(currently save works for single instance of macro).

## Challenges we ran into

I was not familiar with the Atlassian jira and confluence rest apis. I was a total noob at the terminologies used in both the products. 

- working with storage api
- Svg stuff

## Accomplishments

- Good UI
- User experience is great
- Highly utility
- Open sourced
- Free ( when i will release it)

## What's next for Paletto

- [ ]  Give more customization options
- [ ]  User can have make their own color palettes
- [ ]  right now save options work for only one macro instance

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