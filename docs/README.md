📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# VTEX GAMESHOP WHATSAPP BUTTON

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

This custom component allows to add a whatsapp button that will redirect to a chat with the defined number and a predefined message. 

![Whatsapp Button](https://res.cloudinary.com/dannt/image/upload/v1671227406/vtex-gs/danigameshop--itgloberspartnercl.myvtex.com_whatsapp-button_reoqfj.png)

## Configuration 

1. Add the Whatsapp Button app to your theme's dependencies in the manifest.json file:

```json
{
  "itgloberspartnercl.whatsapp-button": "0.x"
}
```
Now, you are able to use all the blocks exported by the Login app. Check out the full list below:

| Block name   | Description  |
| :----------: | :------------------------: |
| `whatsapp-button` | Renders a whatsapp button, as shown above. | 

Below you may find all available props to configure your whatsapp button:

### `whatsapp-button` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `XXXXX`      | `XXXXXX`       | XXXXXXXX         | `XXXXXX`        |


### `block-2` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `logo`      | `string`       | Link to the logo that will be displayed when the logo is rendered         | `"mi-logo.png"`        |
| `phone`      | `string`       | The number to which the chat will be redirected         | `"3128924610"`        |
| `message`      | `string`       | The predetermined message that will appear for the user to send          | `"estás comunicandote con gameshop"`        |
| `width`      | `number`       | Logo width         | `60`        |
| `heigth`      | `number`       | Logo heigth         | `60`        |


## Customization

`No CSS Handles are available yet for the app customization.`

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
