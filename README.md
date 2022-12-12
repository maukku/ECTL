

[![MIT License](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://opensource.org/licenses/)


# Welcome to Electricity Cost Traffic Lights 👋


A mobile app that provides a traffic light (red - amber - green) display representing the current electricity cost in Finland.



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

The data used in this app is retrieved from the ENTSO-E Transparency Platform, which provides electricity data for the European market.

The restful API is a synchronous interface.

https://web-api.tp.entsoe.eu/api? followed by Parameter Name = Parameter Value, where each pair of parameter name and value are separated by &

The user guide is available at https://transparency.entsoe.eu/content/static_content/Static%20content/web%20api/Guide.html

#### Limits on Requests
Maximum of 400 requests are accepted per user per minute.

#### Authentication and Authorisation
To request access to the Restful API, please register on the Transparency Platform (https://transparency.entsoe.eu/) and send an email to transparency@entsoe.eu with “Restful API access” in the subject line. Indicate the email address you entered during registration in the email body. Once access has been granted, after logging in on Transparency Platform, users will find a button to generate their token under 'My Account Settings' on TP. 

#### API Key used in this app

This app was developed using a devleoper's private API Key, which will be deleted by the end of 2022. Future developers must follow the above instructions to get their own API key.


#### Request Parameters

Document Type: A44 - Price Document
In_Domain: 10YFI-1--------U  - Finland Region
Out_Domain: 10YFI-1--------U  - Finland Region

#### Return Data Format

Data is returned in XML Format.


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

