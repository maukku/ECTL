

[![MIT License](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://opensource.org/licenses/)


# Welcome to Electricity Cost Traffic Lights 👋


A mobile app that provides a traffic light (red - amber - green) display representing the current electricity cost.



## User Interface
![1347ad37-fe51-4a73-8528-d20d5519d7f0 (1)](https://user-images.githubusercontent.com/73178418/206508761-96d85b35-5edf-4a28-9db1-a7075707139a.png)



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

Takes two numbers and returns the sum.!


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Main  | ![02A5FBf](https://user-images.githubusercontent.com/73178418/206509432-963206bf-3402-4d1a-8873-e8938bbbded6.png) #02A5FB |
| Red (high price)| ![FF0000](https://user-images.githubusercontent.com/73178418/206509723-92998465-32ef-4634-bb67-eedf1ea8d27c.png) #FF0000 |
| Amber (Average price) | ![FFB700](https://user-images.githubusercontent.com/73178418/206509974-befacc11-f670-437d-8771-a0dc12e70cc4.png) #FFB700 |
| Green (low price) | ![00FF19](https://user-images.githubusercontent.com/73178418/206510191-99d3a53c-ee0e-405b-b917-965cf88b7163.png)  #00FF19 |


## Features

- Current price of electricity 
- Graph showing the price of electricity for the whole day.
- Indicator that displays the time of the best and worst price of the day, on the chart
- Also displayed are yesterday's, today's and tomorrow's high and low prices for better price control.

