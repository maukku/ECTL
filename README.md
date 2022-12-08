

[![MIT License](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://opensource.org/licenses/)


# Welcome to Electricity Cost Traffic Lights 👋


A mobile app that provides a traffic light (red - amber - green) display representing the current electricity cost.



## User Interface

![Ambar](https://user-images.githubusercontent.com/73178418/206501722-29c8196c-e24f-497e-877b-bad9988005c3.png)
![Green](https://user-images.githubusercontent.com/73178418/206501732-d285a2b4-64da-4e24-bfd0-0dbe61a42adb.png)
![Red](https://user-images.githubusercontent.com/73178418/206501735-ab254bb1-d7b6-4831-9eb8-9003e69c431b.png)


## Installation and Usage



```bash
  1. Clone the repo
  git clone https://github.com/maukku/ECTL.git
 
  2. Install NPM packages
  npm install

  3. Run the Code
  cd ECTL
  npm start

```
    
## Documentation

[Documentation](https://aussie.atlassian.net/wiki/spaces/T1ECTLM/pages)


## Authors

- [Mauro Risso](https://github.com/maukku/)
- [Tim Kunze](https://github.com/tim1709)
- [Anthony Hannam](https://github.com/AntHannam)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Main  | ![#02A5FB](https://via.placeholder.com/10/02A5FBf?text=+) #02A5FB |
| Red (high price)| ![#FF0000](https://via.placeholder.com/10/FF0000?text=+) #FF0000 |
| Amber (Average price) | ![#FFB700](https://via.placeholder.com/10/FFB700?text=+) #FFB700 |
| Green (low price) | ![#00FF19](https://via.placeholder.com/10/00FF19?text=+) #00FF19 |


## Features

- Current price of electricity 
- Graph showing the price of electricity for the whole day.
- Indicator that displays the time of the best and worst price of the day, on the chart
- Also displayed are yesterday's, today's and tomorrow's high and low prices for better price control.

